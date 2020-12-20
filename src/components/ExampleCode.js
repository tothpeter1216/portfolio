import React from "react";

const ExampleCode = ({ code }) => {
  const { name, description, technologies, gitHub, photo, website } = code;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        {technologies.map((tech) => {
          return " * " + tech + " * ";
        })}
      </p>
      <p>{website && <a href={website}>weboldal</a>}</p>

      <p>
        <a href={gitHub}>Codes on gitHub</a>
        <a href="#">Link</a>
      </p>
    </div>
  );
};

export default ExampleCode;
