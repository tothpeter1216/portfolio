import React from "react";
import ExampleCode from "./ExampleCode";
import Slider from "../tools/Slider";
import "./CodeSection.css";

const CodeSection = ({ codes }) => {
  let sliderArr = [];
  sliderArr = codes.map((code, index) => {
    return <ExampleCode key={code.id} code={code} />;
  });
  return (
    <div id="code-section" className="section">
      <h1 className="title">My Codes</h1>

      <Slider pagesArray={sliderArr} sliderClassName={"code-slider"} />
    </div>
  );
};

export default CodeSection;
