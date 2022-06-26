import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Amlendra</div>
        <span>Dark</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Experince</li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
        </div>
        <button className="button">Resume</button>
      </div>
    </div>
  );
};

export default Navbar;
