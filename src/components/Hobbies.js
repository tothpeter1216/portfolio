import React from "react";
import { hobbies } from "../data/hobbiesData";

const Hobbies = () => {
  return (
    <div className="card hobby-card">
      {hobbies.map((hobby) => {
        return <p className="small-card">{hobby}</p>;
      })}
    </div>
  );
};

export default Hobbies;
