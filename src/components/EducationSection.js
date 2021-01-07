import React from "react";
import Slider from "./Slider";

const EducationSection = ({ schools }) => {
  return (
    <div>
      <h1>Képzések, iskolák</h1>
      <div className="education-section card">
        <Slider schools={schools} />

        {/* {educations.map((school) => {
          return <Education school={school} />;
        })} */}
      </div>
    </div>
  );
};

export default EducationSection;
