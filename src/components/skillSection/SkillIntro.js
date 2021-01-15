import React from "react";
import Skills from "./Skills";

const SkillIntro = ({ skillGroup, skills }) => {
  return (
    <div className="card skill-card">
      <h4>{skillGroup}</h4>

      {skills.map((skill) => {
        return (
          <Skills
            key={skill._id}
            skillName={skill.skillName}
            level={skill.level}
          />
        );
      })}
    </div>
  );
};

export default SkillIntro;
