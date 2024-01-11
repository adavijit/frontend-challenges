import React, { useEffect, useState } from "react";
import "./SnakeLadderBoard.css";
import Square from "./Square";

const SnakeLadderBoard = () => {
  const SNAKE_LADDER_BOARD_SIZE = 10;

  document.documentElement.style.setProperty(
    "--column-count",
    SNAKE_LADDER_BOARD_SIZE
  );
  document.documentElement.style.setProperty("--column-width", "50px");

  const [squares, setSquares] = useState(
    Array(Math.pow(SNAKE_LADDER_BOARD_SIZE, 2)).fill(null)
  );

  const getColor = (key) => {
    const row = Math.floor(key / SNAKE_LADDER_BOARD_SIZE);
    const col = key % SNAKE_LADDER_BOARD_SIZE;
    return (row + col) % 2 === 0 ? "red" : "white";
  };

  function getBoxNumber() {
    // logic to print a snake-ladder Game board
    // programmer can implement their own logic for the board,
    // this is one way to print a snake ladder board.
    let board = new Array(101);
    for (let i = 1; i <= 100; i++) {
      board[i] = i;
    }

    const finalBoard = new Array(0);

    let alt = 0; // to switch between the alternate nature of the board
    let iterLR = 101; // iterator to print from left to right
    let iterRL = 80; // iterator to print from right to left
    let val = 100;

    while (val--) {
      if (alt === 0) {
        iterLR--;
        finalBoard.push(board[iterLR]);

        if (iterLR % 10 === 1) {
          alt = 1;
          iterLR -= 10;
        }
      } else {
        iterRL++;
        finalBoard.push(board[iterRL]);

        if (iterRL % 10 === 0) {
          alt = 0;
          iterRL -= 30;
        }
      }
      if (iterRL === 10) break;
    }

    setSquares(finalBoard);
  }

  useEffect(() => {
    getBoxNumber();
  });

  return (
    <div className="snake-ladder-board-main">
      {squares.map((value, key) => {
        return <Square key={key} color={getColor(key)} value={value} />;
      })}
    </div>
  );
};

export default SnakeLadderBoard;
