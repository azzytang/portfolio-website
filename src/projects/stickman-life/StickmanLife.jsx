import React from "react";
import "./StickmanLife.css";
import { Link } from "react-router-dom";

const StickmanLife = () => {
  return (
    <div className="StickmanLife">
      <h1>Stickman Life</h1>
      <h3>Status: In Progress</h3>
      <Link
        to="https://github.com/azzytang/stickman-life"
        target="_blank"
        rel="noreferrer"
      >
        <p className="StickmanLife-button">github repo</p>
      </Link>
      <h2>Video Demo:</h2>
      <iframe
        src="https://www.youtube.com/embed/OVCrju9oqzk?si=l40CJHxGDiQL34i8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <div className="StickmanLife-desc">
        <p>
          Stickman Life is a "parody" of the Duck Life games that I started when
          I was a Sophomore in HS (2023). The purpose of this project was mainly
          to learn how to use the pygame library. I have been working on
          Stickman Life on and off, but am expecting to finish it this summer
          (2024). Check out the GitHub repo for more info.
        </p>
      </div>
    </div>
  );
};

export default StickmanLife;
