import "./TicTacToe.css";
import React, { useEffect, useState } from "react";
import Square from "./Square";

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [playerWon, setPlayerWon] = useState("");

  useEffect(()=> {

    const winningComb = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    winningComb.forEach((singleComb) => {
      const [a, b, c] = singleComb;
      if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        setPlayerWon(squares[a] + " Wins");
      }
    });

  }, [squares]);
  return (
    <div className="main-div">

      <div className="tic-tac-toe">
      {
        playerWon !== "" ?
        <p>{playerWon}</p> :
        <p>Player {player} turn</p>
      }
      
      <div className="board-main">
        { squares.map((value, index) => {
          return <Square value={value} key={index} 
          index={index}
          onClick={(index)=> {
            if(squares[index] === null && playerWon === "") {
              const tempSquares = [...squares];
              tempSquares[index] = player;
              setPlayer(player === "X" ? "O" : "X");
              setSquares(tempSquares);
            }
          }}/>
      }) }</div>
      <button onClick={()=> setSquares(Array(9).fill(null))}>Reset</button>
      </div>
    </div>
  );
};

export default TicTacToe;
