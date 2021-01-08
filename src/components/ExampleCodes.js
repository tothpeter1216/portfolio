import React from "react";
import ExampleCode from "./ExampleCode";

const ExampleCodes = ({ codes }) => {
  return (
    <div className="card code-card">
      {codes.map((code) => {
        return <ExampleCode key={code.id} code={code} />;
      })}
    </div>
  );
};

export default ExampleCodes;
