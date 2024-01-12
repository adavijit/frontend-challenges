import React, { useRef, useState } from "react";
import "./Accordian.css";
import DownArrow from "../../assets/downArrow.svg";
const AccordianItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="AccordianItem-container">
      <button
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <div className="question-content">{question}</div>
        <img src={DownArrow} className={`arrow ${isOpen ? "active" : ""}`} />
      </button>
      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer-content">{answer}</div>
      </div>
    </div>
  );
};

const Accordian = ({ accordianContent }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="Accordian-container">
      {accordianContent.map((item, index) => (
        <AccordianItem
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordian;
