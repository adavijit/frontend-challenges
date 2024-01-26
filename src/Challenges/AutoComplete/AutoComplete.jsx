import React, { useState } from "react";
import "./AutoComplete.css";

const data = ["java", "javascript", "php", "c#", "go", "dart"];

export default function AutoComplete() {
  const [suggestions, setSugesstions] = useState([]);
  const [isHideSuggs, setIsHideSuggs] = useState(false);
  const [selectedVal, setSelectedVal] = useState("");

  const handler = e => {
    setSugesstions(data.filter(i => i.startsWith(e.target.value)));
  };

  const handleChange = e => {
    const input = e.target.value;
    setIsHideSuggs(false);
    setSelectedVal(input);
  };

  const hideSuggs = value => {
    setSelectedVal(value);
    setIsHideSuggs(true);
  };

  return (
    <div className="auto-complete-sugesstion-auto">
      <div className="auto-complete-form-control-auto">
        <input
          placeholder="Type to search..."
          type="search"
          value={selectedVal}
          onChange={handleChange}
          onKeyUp={handler}
        />
      </div>

      <div
        className="auto-complete-suggestions"
        style={{ display: isHideSuggs ? "none" : "block" }}
      >
        {suggestions.map((item, idx) => (
          <div
            key={"" + item + idx}
            onClick={() => {
              hideSuggs(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
