import React, { useState } from "react";
import "./StarRating.css";

const StarRating = () => {
  const [stars, setStars] = useState(Array(5).fill(0));
  const updateStars = (key) => {
    const tempArray = [...stars];
    if (tempArray[key] === 1) {
      for (let index = key + 1; index < tempArray.length; index++) {
        tempArray[index] = 0;
      }
    } else {
      for (let index = 0; index <= key; index++) {
        tempArray[index] = 1;
      }
    }
    setStars(tempArray);
  };
  return (
    <div className="star-rating">
      {stars.map((star, key) => {
        return (
          <span
            className={`star-rating-text ${star ? "star-rating-golden" : ""}`}
            key={key}
            onClick={() => updateStars(key)}
          >
            {star ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
