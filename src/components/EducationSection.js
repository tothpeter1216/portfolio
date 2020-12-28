import React from "react";
import Education from "./Education";
import Slider from "./Slider";

const EducationSection = ({ educations }) => {
  return (
    <div>
      <h1>Képzések, iskolák</h1>
      <div className="education-section card">
        <Slider />

        {/* {educations.map((school) => {
          return <Education school={school} />;
        })} */}
      </div>
    </div>
  );
};

export default EducationSection;
