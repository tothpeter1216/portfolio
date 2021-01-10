import React from "react";
import "./HeaderAnimation.css";

const HeaderAnimation = () => {
  return (
    <div className="headerAnimation">
      <img src={"./bg1.png"} alt="house" className="bg-house bg1" />
      <img src={"./bg2.png"} alt="house" className="bg-house bg2" />
      <img src={"./bg3.png"} alt="house" className="bg-house bg3" />
      <img src={"./bg4.png"} alt="house" className="bg-house bg4" />
      <img src={"./me.png"} alt="" className="me" />
    </div>
  );
};

export default HeaderAnimation;
