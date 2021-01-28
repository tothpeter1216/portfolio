import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <button className="nav-btn">
        <a href="#info-section">Contacts</a>
      </button>
      <button className="nav-btn">
        <a href="#skill-section">Skills</a>
      </button>
      <button className="nav-btn">
        <a href="#education-section">Schools</a>
      </button>
      <button className="nav-btn">
        <a href="#code-section">Codes</a>
      </button>
      <button className="nav-btn">
        <a href="#hobby-section">Hobbies</a>
      </button>
    </div>
  );
};

export default Navbar;
