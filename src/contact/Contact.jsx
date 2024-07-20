import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <div className="Contact-info">
        <a href="mailto:azzytang@gmail.com">
          <div className="Contact-email">
            <img
              className="email-icon"
              src="email_icon.png"
              alt="email icon"
            ></img>
            <img className="email-highlight" src="email_highlight.png"></img>
          </div>
        </a>
        <p>azzytang@gmail.com</p>
      </div>

      <p>follow me on social media!</p>
      <div className="Contact-social">
        <Link
          to="https://www.instagram.com/azzytang?igsh=MThnbHNrczBsY2F3&utm_source=qr"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ marginRight: "1rem" }}
            src="instagram_icon.png"
            alt="ig"
          ></img>
        </Link>
        <Link
          to="https://www.linkedin.com/in/azalea-tang-7474a7298"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ width: "2.1rem", marginRight: "1rem" }}
            src="linkedin_icon.png"
            alt="linkedin"
          ></img>
        </Link>
        <Link to="https://github.com/azzytang" target="_blank" rel="noreferrer">
          <img src="github_logo.png" alt="github"></img>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
