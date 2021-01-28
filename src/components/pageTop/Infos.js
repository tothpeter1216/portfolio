import React from "react";
import "./Infos.css";

const Infos = () => {
  return (
    <div className="infos" id="info-section">
      <div className="card contact">
        <div className="intro">
          <img
            src={"./image/green_d.png"}
            alt="profile"
            className="profile-image"
          />
          <div className="profile-text">
            <h1>Péter Tóth</h1>
            <h3>Web Developer</h3>
          </div>
        </div>
        <div className="infoside">
          <table>
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Infos;
