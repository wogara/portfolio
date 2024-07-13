import { useState, useCallback, useEffect, useRef } from "react";
import { Chess } from "chess.js";
import useStockfish from "./useStockfish";
import { BoardOrientation } from "@/types/chess";

const useChessGame = (playerColor: BoardOrientation, difficulty: number) => {
  const [game, setGame] = useState(new Chess());
  const { bestMove, sendCommand } = useStockfish();
  const [resetState, setResetState] = useState<boolean>(true)
  const bestMoveRef = useRef(bestMove);
  useEffect(() => {
    bestMoveRef.current = bestMove;
  }, [bestMove]);
  useEffect(() => {
    sendCommand(`position fen ${game.fen()}`);
    sendCommand("go depth 20");
  }, [game, sendCommand]);

  const getCurrentGame = useCallback(() => {
    return game;
  }, [game]);

  const resetGame = useCallback(() => {
    setResetState((resetState) => !resetState);
    setGame(new Chess());
  }, []);

  useEffect(() => {
    // If player is black, let Stockfish make the first move
    if (playerColor === "black") {
      setTimeout(() => {
        sendCommand("position startpos");
        sendCommand("go depth 20");

        // Wait for Stockfish to compute the best move
        setTimeout(() => {
          let randomNum = Math.random() * 10;

          if (randomNum < 10 - difficulty) {
            makeRandomMove();
          } else {
            const stockfishMove = bestMoveRef.current;
            if (stockfishMove) {
              const from = stockfishMove.slice(0, 2);
              const to = stockfishMove.slice(2, 4);
              makeAMove({ from, to });
              setGame(new Chess(game.fen())); // Update the game state
            }
          }
        }, 2000);
      }, 500); // Small delay to ensure Stockfish initialization
    }
  }, [playerColor, sendCommand, resetState]);
  const makeRandomMove = useCallback(() => {
    const possibleMoves = game.moves();
    if (possibleMoves.length === 0) return; // Checkmate or stalemate

    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    const randomMove = possibleMoves[randomIndex];
    game.move(randomMove);
    setGame(new Chess(game.fen()));
  }, [game]);
  const makeAMove = useCallback(
    (move: { from: string; to: string; promotion?: string }) => {
      const currentGame = getCurrentGame();
      const result = currentGame.move(move);
      if (result) {
        setGame(new Chess(currentGame.fen()));
      }
      return result;
    },
    [getCurrentGame],
  );

  const onDrop = useCallback(
    (sourceSquare: string, targetSquare: string): boolean => {
      if (
        (game.turn() === "w" && playerColor === "white") ||
        (game.turn() === "b" && playerColor === "black")
      ) {
        const move = makeAMove({
          from: sourceSquare,
          to: targetSquare,
          promotion: "q",
        });

        if (move === null) {
          return false;
        }
        sendCommand(`position fen ${game.fen()}`);
        sendCommand("go depth 20");
        setTimeout(() => {
          let randomNum = Math.random() * 10;
          console.log(randomNum);
          if (randomNum < 10 - difficulty) {
            console.log('rand');
            makeRandomMove();
          } else {
            console.log('stockfish');
            const stockfishMove = bestMoveRef.current;
            if (stockfishMove) {
              const from = stockfishMove.slice(0, 2);
              const to = stockfishMove.slice(2, 4);
              makeAMove({ from, to });
              setGame(new Chess(game.fen())); // Update the game state
            }
          }
        }, 1000);
        return true;
      } else {
        return false;
      }
    },
    [game, makeAMove, playerColor],
  );

  return { getCurrentGame, makeAMove, onDrop, resetGame };
};

export default useChessGame;
