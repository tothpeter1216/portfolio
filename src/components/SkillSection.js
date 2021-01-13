import React from "react";
import SkillIntro from "./SkillIntro";
import "./SkillSection.css";

const SkillSection = ({ skillFields }) => {
  return (
    <div id="skill-section">
      <h1>Skills</h1>
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
  );
};

export default SkillSection;