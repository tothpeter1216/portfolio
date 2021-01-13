import React from "react";

const Skills = ({ skillName, level }) => {
  let pngSrc = "";
  let alt = "";

  switch (level) {
    case 1:
      pngSrc = "/meter_red_s.png";
      alt = "level_1";
      break;
    case 2:
      pngSrc = "/meter_yellow_s.png";
      alt = "level_2";
      break;
    case 3:
      pngSrc = "/meter_green_s.png";
      alt = "level_3";
      break;

    default:
      pngSrc = "/meter_yellow_s.png";
      alt = "level_2";
      break;
  }

  return (
    <div className="small-card">
      <img src={pngSrc} alt={alt} />
      <p>{skillName}</p>
    </div>
  );
};

export default Skills;
