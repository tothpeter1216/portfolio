import React, { useState } from "react";
import "./Slider.css";

const Slider = ({ pagesArray, sliderClassName }) => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (pagesArray.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (pagesArray.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {pagesArray.map((item, index) => {
        return (
          <div
            key={index}
            className={"slide  " + sliderClassName}
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" className="btn-slider" onClick={goLeft}>
        <img src={"./image/left.png"} alt="left" className="sign" />
      </button>
      <button id="goRight" className="btn-slider" onClick={goRight}>
        <img src={"./image/right.png"} alt="right" className="sign" />
      </button>
    </div>
  );
};

export default Slider;
