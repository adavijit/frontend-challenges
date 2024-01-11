import React from 'react'

const Square = ({color, value}) => {
  return (
    <div className={`snake-ladder-square ${color}`}>{value}</div>
  )
}

export default Square