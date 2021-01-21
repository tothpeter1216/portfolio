import React from "react";

const ExampleCode = ({ code }) => {
  const {
    name,
    description,
    technologies,
    gitHub,
    gitHub2,
    website,
    websiteLinkText,
  } = code;
  return (
    <div className="code-content">
      <h2 className="code-name">{name}</h2>
      <p className="code-description">{description}</p>
      <p className="technologies">
        {technologies.map((tech) => {
          return " * " + tech + " * ";
        })}
      </p>
      <p>
        {website && (
          <a href={website}>{websiteLinkText ? websiteLinkText : "link"}</a>
        )}
      </p>
      <p>{gitHub && <a href={gitHub}>Codes on gitHub</a>}</p>
      <p>{gitHub2 && <a href={gitHub2}>Codes on gitHub 2</a>}</p>
    </div>
  );
};

export default ExampleCode;
