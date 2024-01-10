import React from "react";
import "./Card.css";

const Card = ({ name, onClick, component, contributors, source }) => {
  return (
    <div className="card">
      <div className="text">
        <p className="card-heading">{name}</p>
        <p className="card-subheading">Contributed by</p>
        <p className="card-subheading">
          {contributors.map((contributor)=> {
            return <a href={`https://www.github.com/${contributor}`}>{contributor}</a>
        })}</p>
      </div>
      <div className="arrow-btn" onClick={() => onClick(component, source)}></div>
    </div>
  );
};

export default Card;
