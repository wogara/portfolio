import { Chessboard } from "react-chessboard";
import { Arrow, Square } from "react-chessboard/dist/chessboard/types";
import useChessGame from "../../hooks/useChessGame";
import { useState } from "react";
import { BoardOrientation } from "@/types/chess";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToggleOn,
  faToggleOff,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import CustomSlider from "../custom-slider/CustomSlider";
import { colors } from "../../utils/colors";

export default function ChessGame() {
  const [playerColor, setPlayerColor] = useState<BoardOrientation>("white");
  const [difficulty, setDifficulty] = useState<number>(0);
  const [hint, setHint] = useState<boolean>(false);
  const [arrow, setArrow] = useState<Arrow[]>([]);

  const clearHint = () => {
    // setHint(false);
    setArrow([]);
  };

  const { getCurrentGame, onDrop, resetGame, bestMove } = useChessGame(
    playerColor,
    difficulty,
    clearHint,
  );

  const currentGame = getCurrentGame();
  const currentFen = currentGame.fen();

  const changeDifficulty = (newDifficulty: number) => {
    setDifficulty(newDifficulty);
  };

  const flipPlayerColor = () => {
    if (playerColor === "white") {
      resetGame();
      setPlayerColor("black");
    } else {
      resetGame();
      setPlayerColor("white");
    }
  };
  const createArrow = (bestMove: string) => {
    const fromSquare = bestMove.slice(0, 2);
    const toSquare = bestMove.slice(2);

    setArrow([[fromSquare, toSquare]] as Arrow[]);
  };
  const flipHint = () => {
    hint ? setHint(false) : setHint(true);
    createArrow(bestMove);
  };

  return (
    <div>
      <div className="flex justify-between">
        <button
          onClick={() => flipPlayerColor()}
          className="z-50 p-2 bg-gray text-white rounded"
        >
          {playerColor === "black" && <FontAwesomeIcon icon={faToggleOff} />}
          {playerColor === "white" && <FontAwesomeIcon icon={faToggleOn} />}
        </button>
        <div className="w-1/4">
          <CustomSlider onChange={changeDifficulty} />
        </div>
        <button
          onClick={() => resetGame()}
          className="z-50 p-2 bg-gray text-white rounded"
        >
          <FontAwesomeIcon icon={faArrowRotateRight} />
        </button>
        <button
          onClick={() => flipHint()}
          className="z-50 p-2 bg-gray text-white rounded"
        >
          ?
        </button>
      </div>
      <Chessboard
        position={currentFen}
        onPieceDrop={onDrop}
        boardOrientation={playerColor}
        customBoardStyle={{}}
        customDarkSquareStyle={{ backgroundColor: colors.surface2 }}
        customLightSquareStyle={{ backgroundColor: colors.surface0 }}
        customArrows={arrow}
      />
    </div>
  );
}
