import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="Projects-container">
        <div>
          <img src="stickman_life1.png"></img>
          <img src="stickman_life2.png"></img>
          <h2>Stickman Life</h2>
        </div>
        <div>
          <img src="robotics_website1.png"></img>
          <h2>Robotics Website</h2>
        </div>
        <div>
          <img style={{ width: "18rem" }} src="smart_scan1.png"></img>
          <h2>SmartScan Attendance</h2>
        </div>
        <div>
          <img src="massage_website1.png"></img>

          <Link
            to="https://shirleymassagetherapy.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Massage Therapy Business Website</h2>
          </Link>
        </div>
        <div>
          <img src=""></img>
          <h2>Community Volleyball Court Reserver</h2>
        </div>
        <div>
          <img src=""></img>
          <h2>PlanPro</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
