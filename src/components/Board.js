import React from "react";
import Cell from "./Cell";
import "../styles/Board.css";

const Board = ({ board, onClick, isXNext }) => {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Cell
          key={index}
          value={value}
          onClick={() => onClick(index)}
          isXNext={isXNext}
        />
      ))}
    </div>
  );
};

export default Board;
