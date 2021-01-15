import React from "react";
import "./Sentence.css";

const Sentence = () => {
  return (
    <div className="sentence-section">
      <div className="sentence-words">
        <h1 className="sentence-word dream">Dream</h1>
      </div>
      <div className="sentence-word">
        <h1 className="sentence-word plan">Plan</h1>
      </div>
      <div className="sentence-word">
        <h1 className="sentence-word create">Create</h1>
      </div>
    </div>
  );
};

export default Sentence;
