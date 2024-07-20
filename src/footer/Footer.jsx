import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-attributions"></div>
      <div className="Footer-contact">
        <Link to="" target="_blank" rel="noreferrer">
          <img className="Footer-insta" src="instagram_icon.png" alt="ig"></img>
        </Link>
        <Link to="" target="_blank" rel="noreferrer">
          <img
            className="Footer-icons"
            src="linkedin_icon.png"
            alt="linkedin"
          ></img>
        </Link>
        <Link to="https://github.com/azzytang" target="_blank" rel="noreferrer">
          <img
            className="Footer-icons"
            src="github_logo.png"
            alt="github"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
