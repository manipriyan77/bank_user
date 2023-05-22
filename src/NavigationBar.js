import React from "react";
import "./NavigationBar.css"; // Import the CSS file for styling

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className="navbar-links">
        <a href="#" className="navbar-link">
          Customer Form
        </a>
        <a href="#" className="navbar-link">
          Table
        </a>
        <a href="#" className="navbar-link">
          User Profile
        </a>
      </div>
      <div className="navbar-logout">
        <button className="navbar-button">Log Out</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
