import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-attributions">
        <div>
          <a href="https://www.freepik.com/free-vector/abstract-background-with-hand-painted-clouds-design_50500233.htm#query=vintage%20sky&position=17&from_view=keyword&track=ais_user&uuid=819caba8-b60a-4686-8e6e-16fd202bcb4f">
            Background Image by kjpargeter
          </a>
          on Freepik
        </div>
      </div>

      <div className="Footer-contact">
        <Link
          to="https://www.instagram.com/azzytang?igsh=MThnbHNrczBsY2F3&utm_source=qr"
          target="_blank"
          rel="noreferrer"
        >
          <img className="Footer-insta" src="instagram_icon.png" alt="ig"></img>
        </Link>
        <Link
          to="https://www.linkedin.com/in/azalea-tang-7474a7298"
          target="_blank"
          rel="noreferrer"
        >
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
