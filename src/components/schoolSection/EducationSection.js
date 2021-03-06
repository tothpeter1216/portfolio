import React from "react";
import Slider from "../tools/Slider";
import "./EducationSection.css";
import Education from "./Education";

const EducationSection = ({ schools }) => {
  let sliderArr = [];
  sliderArr = schools.map((school) => {
    return <Education key={school.id} school={school} />;
  });

  return (
    <div id="education-section" className="section">
      <h1 className="title">Education</h1>

      <Slider
        schools={schools}
        pagesArray={sliderArr}
        sliderClassName={"education-slider"}
      />
    </div>
  );
};

export default EducationSection;
