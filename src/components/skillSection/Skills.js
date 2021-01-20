import React from "react";

const Skills = ({ skillName, level }) => {
  let pngSrc = "";
  let alt = "";

  switch (level) {
    case 1:
      pngSrc = "/image/meter_red_s.png";
      alt = "level_1";
      break;
    case 2:
      pngSrc = "/image/meter_yellow_s.png";
      alt = "level_2";
      break;
    case 3:
      pngSrc = "/image/meter_green_s.png";
      alt = "level_3";
      break;

    default:
      pngSrc = "/image/meter_yellow_s.png";
      alt = "level_2";
      break;
  }

  return (
    <div className="small-card">
      <img src={pngSrc} alt={alt} className="skill-img" />
      <p>{skillName}</p>
    </div>
  );
};

export default Skills;
