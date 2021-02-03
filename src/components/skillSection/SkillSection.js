import React from "react";
import SkillIntro from "./SkillIntro";
import "./SkillSection.css";

const SkillSection = ({ skillFields }) => {
  return (
    <div id="skill-section" className="section">
      <h1 className="title">Skills</h1>
      <div className="skill-fields card">
        {skillFields.map((skillGroup) => {
          return (
            <SkillIntro
              key={skillGroup.id}
              skillGroup={skillGroup.skillField}
              skills={skillGroup.skill}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillSection;
