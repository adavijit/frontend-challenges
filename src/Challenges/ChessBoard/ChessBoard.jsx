import React, { useState } from 'react'
import "./ChessBoard.css";
import Square from './Square';

const ChessBoard = () => {
    const CHESS_BOARD_SIZE = 8;
    
    document.documentElement.style.setProperty('--column-count', CHESS_BOARD_SIZE);
    document.documentElement.style.setProperty('--column-width', '50px');

    const [squares, ] = useState(Array(Math.pow(CHESS_BOARD_SIZE, 2)).fill(null));

    const getColor = (key) => {
        const row = Math.floor(key / 8);
        const col = key % 8;
        return (row + col) % 2 === 0 ? "black" : "white";   
    }
    
  return (
    <div className='main-div'>
        <div className='chessboard-main'>
            {squares.map((_, key)=> {
                return <Square key={key} color={getColor(key)}/>
            })}
        </div>
    </div>
  )
}

export default ChessBoard