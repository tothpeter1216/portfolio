import React from "react";
import "./Infos.css";

const Infos = () => {
  return (
    <div className="infos ">
      <h1>Tóth Péter</h1>
      <h3>Webdeveloper</h3>
      <div className="contact card">
        <table>
          <tr>
            <td>Email:</td>
            <td>tothpeter1216@gmail.com</td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>Hungary</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>1191 Budapest, Kazinczy 10. 9/27</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>+36303771901</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Infos;
