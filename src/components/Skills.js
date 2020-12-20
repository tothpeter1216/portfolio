import React from "react";

const Skills = ({ skillName, level }) => {
  let pngSrc = "";

  switch (level) {
    case 1:
      pngSrc = "/meter_red_s.png";
      break;
    case 2:
      pngSrc = "/meter_yellow_s.png";
      break;
    case 3:
      pngSrc = "/meter_green_s.png";
      break;

    default:
      pngSrc = "/meter_yellow_s.png";
      break;
  }

  return (
    <div className="small-card">
      <img src={pngSrc} alt="" />
      <p>{skillName}</p>
    </div>
  );
};

export default Skills;
