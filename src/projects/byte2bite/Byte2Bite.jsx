import React from "react";
import "./Byte2Bite.css";
import { Link } from "react-router-dom";

const Byte2Bite = () => {
  return (
    <div className="Byte2Bite">
      <h1>Byte2Bite</h1>
      <h3>Status: In Progress</h3>
      {/* <a
        href="https://github.com/vishyj/Byte2Bite"
        target="_blank"
        rel="noreferrer"
      >
        <p className="Byte2Bite-button">github repo</p>
      </a> */}
      {/* <h2>Video Demo:</h2>
      <iframe
        width="800px"
        height="500px"
        src="https://www.youtube.com/embed/S22BtvPQ0DM?si=7GjeYUAEiVlD0bBi"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe> */}
      <div className="Byte2Bite-desc">
        <p>Cofounded Byte2Bite. v1 in progress, check back later.</p>
      </div>
    </div>
  );
};

export default Byte2Bite;
