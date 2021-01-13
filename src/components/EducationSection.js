import React from "react";
import Slider from "./Slider";
import "./EducationSection.css";

const EducationSection = ({ schools }) => {
  return (
    <div id="education-section" className="section">
      <h1>Képzések, iskolák</h1>

      <Slider schools={schools} />
    </div>
  );
};

export default EducationSection;
