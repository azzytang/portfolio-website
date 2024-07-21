import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RiArrowUpWideFill } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  return (
    <div className="Navbar">
      <div className="Navbar-links">
        <Link to="/">
          <div className="Navbar-logo">
            <img
              className="Navbar-logo1"
              src="azalea_flower.png"
              alt="logo"
            ></img>
            <p>AT</p>
          </div>
        </Link>
      </div>
      <div className="Navbar-social">
        <Link to="/about">
          <div className="Navbar-link">
            <p>about</p>
            <img src="navbar_highlight.png" style={{ width: "8rem" }}></img>
          </div>
        </Link>
        <Link to="/contact">
          <div className="Navbar-link">
            <p>contact</p>
            <img src="navbar_highlight2.png" style={{ width: "10rem" }}></img>
          </div>
        </Link>
        <Link to="/projects">
          <div className="Navbar-link">
            <p>projects</p>
            <img src="navbar_highlight3.png" style={{ width: "10rem" }}></img>
          </div>
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
            style={{ width: "2.1rem" }}
            src="linkedin_icon.png"
            alt="linkedin"
          ></img>
        </Link>
        <Link to="https://github.com/azzytang" target="_blank" rel="noreferrer">
          <img src="github_logo.png" alt="github"></img>
        </Link>
      </div>
      <div className="Navbar-menu">
        {toggleMenu ? (
          <RiArrowUpWideFill
            className="Navbar-menu_icon"
            color="white"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <AiOutlineMenu
            className="Navbar-menu_icon"
            color="white"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="Navbar-menu_container">
            <p>
              <Link
                className="Navbar-menu_link"
                to="/about"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </p>
            <hr></hr>
            <p>
              <Link
                className="Navbar-menu_link"
                to="/contact"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </p>
            <hr></hr>
            <p>
              <Link
                className="Navbar-menu_link"
                to="/projects"
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
