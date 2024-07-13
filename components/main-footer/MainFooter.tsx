"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagCheckered, faChess } from "@fortawesome/free-solid-svg-icons";
import DraggableModal from "../draggable-modal/DraggableModal";
import ChessGame from "../chess-game/ChessGame";

export default function MainFooter() {
  const [isDraggableChessModalOpen, setIsDraggableChessModalOpen] =
    useState(false);
  const [isDraggableCheckersModalOpen, setIsDraggableCheckersModalOpen] =
    useState(false);
  const openDraggableCheckersModal = () => {
    setIsDraggableCheckersModalOpen(true);
  };

  const closeDraggableCheckersModal = () => {
    setIsDraggableCheckersModalOpen(false);
  };

  const openDraggableChessModal = () => {
    setIsDraggableChessModalOpen(true);
  };

  const closeDraggableChessModal = () => {
    setIsDraggableChessModalOpen(false);
  };
  return (
    <div>
      <div className="bg-base p-4 fixed bottom-0 left-0 w-full z-50">
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={openDraggableChessModal}
            className="text-text hover:text-gray-400 p-2 border border-white h-12 w-12 md:h-16 md:w-16 md:text-lg flex items-center justify-center rounded-full"
          >
            <FontAwesomeIcon icon={faChess} size="sm" />
          </button>
          <button
            onClick={openDraggableCheckersModal}
            className="text-text hover:text-gray-400 p-2 border border-white h-12 w-12 md:h-16 md:w-16 md:text-lg flex items-center justify-center rounded-full"
          >
            <FontAwesomeIcon icon={faFlagCheckered} size="sm" />
          </button>
        </div>
      </div>
      <DraggableModal
        isVisible={isDraggableChessModalOpen}
        onClose={closeDraggableChessModal}
      >
        <ChessGame />
      </DraggableModal>

      <DraggableModal
        isVisible={isDraggableCheckersModalOpen}
        onClose={closeDraggableCheckersModal}
      >
        <h1 className="text-black">CHECKERS</h1>
      </DraggableModal>
    </div>
  );
}
