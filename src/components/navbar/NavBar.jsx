import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <section className="menu-container">
      <ul className="menu-bar">
        <li className="menu-list">
          <a href="/" className="menu-link">
            Home
          </a>
        </li>
        <li className="menu-list">
          <a href="/#about" className="menu-link">
            About
          </a>
        </li>
        <li className="menu-list">
          <a href="/#projects" className="menu-link">
            Projects
          </a>
        </li>
        <li className="menu-list">
          <a href="/#experience" className="menu-link">
            Experience
          </a>
        </li>
        <li className="menu-list">
          <a href="/#contact" className="menu-link">
            Contact
          </a>
        </li>
      </ul>
    </section>
  );
};

export default NavBar;
