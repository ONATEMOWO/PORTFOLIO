import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
        <img className="logo" src="/src/assets/logo.jpeg" alt="" />

          <ul>
            <li>
              <a className="menu-item" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="menu-item" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
