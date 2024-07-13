import { Chessboard } from "react-chessboard";
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

  const { getCurrentGame, onDrop, resetGame } = useChessGame(
    playerColor,
    difficulty,
  );
  const currentGame = getCurrentGame();
  const currentFen = currentGame.fen();

  const changeDifficulty = (newDifficulty: number) => {
    setDifficulty(newDifficulty);
  };

  const flipPlayerColor = () => {
    console.log("FLIP");
    if (playerColor === "white") {
      resetGame();
      setPlayerColor("black");
    } else {
      resetGame();
      setPlayerColor("white");
    }
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
      </div>
      <Chessboard
        position={currentFen}
        onPieceDrop={onDrop}
        boardOrientation={playerColor}
        customBoardStyle={{}}
        customDarkSquareStyle={{ backgroundColor: colors.surface2 }}
        customLightSquareStyle={{ backgroundColor: colors.surface0 }}
      />
    </div>
  );
}
