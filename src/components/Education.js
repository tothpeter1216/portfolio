import React from "react";

const Education = ({ school }) => {
  return (
    <div>
      <h6>{school.name}</h6>
      <p>{school.description}</p>
      <p>{school.link}</p>
    </div>
  );
};

export default Education;
