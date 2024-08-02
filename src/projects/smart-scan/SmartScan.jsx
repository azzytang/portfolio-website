import React from "react";
import "./SmartScan.css";
import { Link } from "react-router-dom";

const SmartScan = () => {
  return (
    <div className="SmartScan">
      <h1>SmartScan Attendance</h1>
      <h3>Status: Finished? (a lot of improvements can be made)</h3>
      <a
        href="https://github.com/azzytang/smart-scan-attendance"
        target="_blank"
        rel="noreferrer"
      >
        <p className="SmartScan-button">github repo</p>
      </a>
      <div className="SmartScan-imgs">
        <img src="/smart_scan3.png" alt="slide1"></img>
        <img src="/smart_scan2.png" alt="slide2"></img>
      </div>
      <div className="SmartScan-desc">
        <p>
          SmartScan Attendance was created for my 2023-2024 Science/Engineering
          Fair project. This app & website takes attendance for the teacher by
          having students scan their face and ID at the same time when walking
          into class. The website is built with React, the app is built with
          Python + various libraries (kivy, facial recognition, etc.), and
          Realtime Database is used to send data from the app to the website.
          Check out the GitHub repo for more info.
        </p>
      </div>
    </div>
  );
};

export default SmartScan;
