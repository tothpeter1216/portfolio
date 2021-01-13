import React, { useState } from "react";
import "./Slider.css";
import Education from "./Education";

const Slider = ({ pagesArray }) => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (pagesArray.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    // setX(x - 100);
    x === -100 * (pagesArray.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {pagesArray.map((item, index) => {
        return (
          <div
            key={index}
            className="slide card"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" className="btn-slider" onClick={goLeft}>
        left
      </button>
      <button id="goRight" className="btn-slider" onClick={goRight}>
        right
      </button>
    </div>
  );
};

export default Slider;
