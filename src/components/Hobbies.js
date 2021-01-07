import React from "react";

const Hobbies = ({ hobbies }) => {
  return (
    <div className="card hobby-card">
      {hobbies.map((hobby) => {
        return <p className="small-card">{hobby.name}</p>;
      })}
    </div>
  );
};

export default Hobbies;
