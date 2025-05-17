import React from "react";
import "./DeepScan.css";
import { Link } from "react-router-dom";

const DeepScan = () => {
  return (
    <div className="DeepScan">
      <h1>DeepScan Intelligence</h1>
      <h3>Status: Finished? (room for improvement)</h3>
      <a
        href="https://github.com/azzytang/DeepScan-Intelligence"
        target="_blank"
        rel="noreferrer"
      >
        <p className="DeepScan-button">github repo</p>
      </a>
      <h2>Video Demo:</h2>
      <iframe
        width="800px"
        height="500px"
        src="https://www.youtube.com/embed/S22BtvPQ0DM?si=7GjeYUAEiVlD0bBi"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="DeepScan-desc">
        <p>In progress</p>
      </div>
    </div>
  );
};

export default DeepScan;
