import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="Projects-container">
        <div className="imageBox">
          <div className="imageInn">
            <img
              style={{ width: "40rem", height: "30.923rem" }}
              src="stickman_life1.png"
              alt="stick1"
            ></img>
          </div>
          <div className="hoverImg">
            <img
              style={{ width: "40rem", height: "30.923rem" }}
              src="stickman_life2.png"
              alt="stick2"
            ></img>
            <div style={{ width: "40rem", height: "30.923rem" }}>
              <h2>stickman life</h2>
              <p>click to learn more</p>
            </div>
          </div>
        </div>
        <div className="imageBox">
          <div className="imageInn">
            <img
              style={{ width: "40rem", height: "25.763rem" }}
              src="robotics_website1.png"
              alt="robotics1"
            ></img>
          </div>
          <div className="hoverImg">
            <img
              style={{ width: "40rem", height: "25.763rem" }}
              src="stickman_life2.png"
              alt="robotics2"
            ></img>
            <div style={{ width: "40rem", height: "25.763rem" }}>
              <h2>undefined robotics website</h2>
              <p>click to visit</p>
            </div>
          </div>
        </div>

        <div className="imageBox">
          <div className="imageInn">
            <img
              style={{ width: "18rem", height: "25.763rem" }}
              src="smart_scan1.png"
              alt="smartscan1"
            ></img>
          </div>
          <div className="hoverImg">
            <img
              style={{ width: "40rem", height: "25.763rem" }}
              src="stickman_life2.png"
              alt="robotics2"
            ></img>
            <div style={{ width: "40rem", height: "25.763rem" }}>
              <h2>SmartScan Attendance</h2>
              <p>click to learn more</p>
            </div>
          </div>
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
