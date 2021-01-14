import React from "react";
import "./HobbySection.css";

const HobbySection = ({ hobbies }) => {
  return (
    <div id="hobby-section" className="section">
      <h1>Hobbies</h1>
      <div className="card hobby-card">
        {hobbies.map((hobby) => {
          return (
            <p key={hobby.id} className="small-card">
              {hobby.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default HobbySection;
