import React from "react";
import "../styles/Cell.css";

const Cell = ({ value, onClick, isXNext }) => {
  let className = "cell";
  if (value === "X") className += " x";
  else if (value === "O") className += " o";

  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Cell;
