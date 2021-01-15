import React from "react";

const Education = ({ school }) => {
  return (
    <div className="school-content">
      <h6 className="school-name">{school.name}</h6>
      <p className="school-description">{school.description}</p>
      <p>
        {school.link && (
          <a href={school.link} className="school-link">
            {school.link}
          </a>
        )}
      </p>
    </div>
  );
};

export default Education;
