import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-links">
        <Link to="/">
          <div className="Navbar-logo">
            <img
              className="Navbar-logo1"
              src="flower_logo.png"
              alt="logo"
            ></img>
            <p>Azalea Tang</p>
          </div>
        </Link>
      </div>
      <div className="Navbar-social">
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
        <Link to="/projects">
          <p>Projects</p>
        </Link>

        <Link
          to="https://www.instagram.com/azzytang?igsh=MThnbHNrczBsY2F3&utm_source=qr"
          target="_blank"
          rel="noreferrer"
        >
          <img src="instagram_icon.png" alt="ig"></img>
        </Link>
        <Link
          to="https://www.linkedin.com/in/azalea-tang-7474a7298"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ width: "2.5rem" }}
            src="linkedin_icon.png"
            alt="linkedin"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
