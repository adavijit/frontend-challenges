import React from 'react'

const Square = ({value, index, onClick}) => {
  return (
    <button className='square-btn' onClick={()=> onClick(index)}>{value}</button>
  );
};

export default Square;
