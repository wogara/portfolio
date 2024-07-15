import React, { useState, useEffect } from "react";

interface DraggableModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DraggableModal: React.FC<DraggableModalProps> = ({
  isVisible,
  onClose,
  children,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    setIsDragging(true);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({ x: e.clientX - startPos.x, y: e.clientY - startPos.y });
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, startPos]);
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "auto",
        }}
        className="bg-base rounded border border-white shadow-lg relative w-1/4"
      >
        <div
          className="bg-green text-mantle p-2 cursor-move"
          onMouseDown={onMouseDown}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-mantle"
          >
            ✕
          </button>
          Drag Here
        </div>
        <div
          className="p-8 position-absolute"
          onMouseDown={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DraggableModal;
