import React from "react";
import ProfilImage from "./ProfilImage";

const CardContent = () => {
  return (
    <div className="card-content">
      <ProfilImage />
      <address>
        <a href="mailto:tothpeter1216@gmail.com">tothpeter1216@gmail.com</a>
        <br />
        <br />
        1191 Budapest <br /> Kazinczy u. 10., 9/27. <br />
        +36303771901
      </address>
    </div>
  );
};

export default CardContent;
