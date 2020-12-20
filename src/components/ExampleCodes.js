import React from "react";
import { codes } from "../data/exmpleCodesData";
import ExampleCode from "./ExampleCode";

const ExampleCodes = () => {
  return (
    <div className="card code-card">
      {codes.map((code) => {
        return <ExampleCode code={code} />;
      })}
      {/* <h2>{skillGroup}</h2> */}
      {/* {skills.map((skill) => {
        return <Skills skillName={skill.skillName} level={skill.level} />;
      })} */}
    </div>
  );
};

export default ExampleCodes;
