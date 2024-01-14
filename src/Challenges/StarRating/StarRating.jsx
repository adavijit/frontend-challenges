import React, { useState } from "react";
import "./StarRating.css";

const StarRating = () => {
  const [stars, setStars] = useState(Array(5).fill(0));

  const updateStars = (key) => {
    const tempArray = [...stars];
    if (key === 0 && tempArray[key] === 1 && tempArray[key + 1] !== 1) {
      tempArray[key] = 0;
    } else {
      const startIndex = tempArray[key] === 1 ? key + 1 : 0;
      for (let index = startIndex; index < tempArray.length; index++) {
        tempArray[index] = tempArray[key] === 1 ? 0 : 1;
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
