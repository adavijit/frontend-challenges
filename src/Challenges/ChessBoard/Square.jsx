import React from 'react'

const Square = ({color}) => {
  return (
    <div className={`chess-square ${color}`}></div>
  )
}

export default Square