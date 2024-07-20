import React from "react";
import "./SmartScan.css";
import { Link } from "react-router-dom";

const SmartScan = () => {
  return (
    <div className="SmartScan">
      <h1>SmartScan Attendance</h1>
      <h3>Status: In Progress</h3>
      <Link
        to="      https://github.com/azzytang/smart-scan-attendance
"
        target="_blank"
        rel="noreferrer"
      >
        <p className="SmartScan-button">github repo</p>
      </Link>
    </div>
  );
};

export default SmartScan;
