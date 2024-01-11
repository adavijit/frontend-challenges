import React, { useState } from "react";
import "./Card.css";

const Card = ({ name, onClick, component, contributors, source }) => {

      // predefined list of colors
      const colors = ['#EAC5D8', '#d4e1ca', '#c0e6de', '#dee6c0', '#c7d2e2'];

        
      // Function to get a random color from the predefined list
      function getRandomColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

  
  return (
    <div className="card"  style={{ backgroundColor: getRandomColor() }}>
      <div className="text">
        <p className="card-heading">{name}</p>
        <p className="card-subheading">Contributed by</p>
        <p className="card-subheading">
          {contributors.map((contributor)=> {
            return <a href={`https://www.github.com/${contributor}`} target="_blank" rel="noreferrer" >{contributor}</a>
        })}</p>
      </div>
      <div className="arrow-btn" onClick={() => onClick(component, source, name)}></div>
    </div>
  );
};

export default Card;
