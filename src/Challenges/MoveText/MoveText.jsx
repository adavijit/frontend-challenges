import React, { useState } from "react";
import "./MoveText.css";
import dummyList from "./dummyList";

const MoveText = () => {
  const [lists, setLists] = useState(dummyList);

  const updateLists = (id) => {
    const tempLists = [...lists];
    const foundItem = tempLists.find((item) => item.id === id);
    if (foundItem) {
        foundItem.selected = !foundItem.selected;
    }
    setLists(tempLists);
  };

  const togglePositions = () => {
    const tempLists = [...lists];
    tempLists.forEach(item => {
        if (item.selected) {
            item.position = item.position === "L" ? "R" : "L";
            item.selected = false;
        }
    });
    setLists(tempLists);
  }

  const moveAllPositions = (position) => {
    const tempLists = [...lists];
    tempLists.forEach(item => {
        item.position = position;
        item.selected = false;
    });
    setLists(tempLists);
  }
  return (
    <div>
      <p>Problem Statement:</p>
      <div className="move-text">
        <div className="move-text-left-div">
          {lists.map((value, key) => {
            if (value.position === "L") {
              return (
                <p
                    className={`${value.selected ? 'move-text-selected' : ''}`}
                  key={key}
                  onClick={() => {
                    updateLists(value.id);
                  }}
                >
                  {value.name}
                </p>
              );
            }
          })}
        </div>
        <div className="move-text-buttons">
          <button onClick={()=> togglePositions()}>Move</button>
          <button onClick={()=> moveAllPositions("R")}>Move All {">"}</button>
          <button onClick={()=> moveAllPositions("L")}>Move All {"<"}</button>
        </div>
        <div className="move-text-right-div">
          {lists.map((value, key) => {
            if (value.position === "R") {
              return (
                <p
                  className={`${value.selected ? 'move-text-selected' : ''}`}
                  key={key}
                  onClick={() => {
                    updateLists(value.id);
                  }}
                >
                  {value.name}
                </p>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MoveText;
