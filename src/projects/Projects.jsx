import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="Projects-container">
        <Link to="/projects/stickman-life">
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
                <h2>Stickman Life</h2>
                <p>click to learn more</p>
              </div>
            </div>
          </div>
        </Link>
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
              src="robotics_website2.png"
              alt="robotics2"
            ></img>
            <div style={{ width: "40rem", height: "25.763rem" }}>
              <h2>Undefined Robotics Website</h2>
              <p>click to visit</p>
            </div>
          </div>
        </div>

        <Link to="/projects/smart-scan-attendance">
          <div className="imageBox">
            <div className="imageInn">
              <img
                style={{ width: "40rem", height: "30.344rem" }}
                src="smart_scan1.png"
                alt="smartscan1"
              ></img>
            </div>
            <div className="hoverImg">
              <img
                style={{ width: "40rem", height: "30.344rem" }}
                src="smart_scan2.png"
                alt="robotics2"
              ></img>
              <div style={{ width: "40rem", height: "30.344rem" }}>
                <h2>SmartScan Attendance</h2>
                <p>click to learn more</p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="https://shirleymassagetherapy.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="imageBox">
            <div className="imageInn">
              <img
                style={{ width: "40rem", height: "25.174rem" }}
                src="massage_website1.png"
                alt="massage1"
              ></img>
            </div>
            <div className="hoverImg">
              <img
                style={{ width: "40rem", height: "25.174rem" }}
                src="massage_website2.png"
                alt="massage2"
              ></img>
              <div style={{ width: "40rem", height: "25.174rem" }}>
                <h2>Massage Therapy Business Website</h2>
                <p>click to visit</p>
              </div>
            </div>
          </div>
        </Link>

        {/* <h2>Community Volleyball Court Reserver</h2> */}

        <div className="imageBox">
          <div className="imageInn">
            <img
              style={{ width: "40rem", height: "30.344rem" }}
              src="smart_scan1.png"
              alt="smartscan1"
            ></img>
          </div>
          <div className="hoverImg">
            <img
              style={{ width: "40rem", height: "30.344rem" }}
              src="smart_scan2.png"
              alt="robotics2"
            ></img>
            <div style={{ width: "40rem", height: "30.344rem" }}>
              <h2>PlanPro</h2>
              <p>click to learn more</p>
            </div>
          </div>
        </div>
      </div>
      <h1>& this website ofc!</h1>
    </div>
  );
};

export default Projects;
