import React from "react";
import "./HeaderAnimation.css";

const HeaderAnimation = () => {
  return (
    <div className="headerAnimation">
      <div className="light-squares">
        <div className="light-square ls1"></div>
        <div className="light-square ls2"></div>
        <div className="light-square ls3"></div>
      </div>

      <img src={"./bg1.png"} alt="house" className="bg-house bg1" />
      <img src={"./bg2.png"} alt="house" className="bg-house bg2" />
      <img src={"./bg3.png"} alt="house" className="bg-house bg3" />
      <img src={"./bg4.png"} alt="house" className="bg-house bg4" />
      <img src={"./me.png"} alt="" className="me" />
    </div>
  );
};

export default HeaderAnimation;
