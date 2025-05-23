import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const restart = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div>
      <Board board={board} onClick={handleClick} isXNext={isXNext} />
      <div className="status">
        {winner ? `Pobjednik: ${winner}` : `Na potezu: ${isXNext ? "X" : "O"}`}
      </div>
      <button className="restart-btn" onClick={restart}>
        Restart
      </button>
    </div>
  );
};

function calculateWinner(cells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

export default Game;
