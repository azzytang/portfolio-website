import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="Projects">
      <h1>projects</h1>
      <div className="Projects-container">
        <div className="imageBox">
          <Link to="/projects/coding-agent">
            <div className="imageInn">
              <img
                className="Projects-coding-agent"
                src="coding_agent1.jpg"
                alt="coding-agent"
              ></img>
            </div>
            <div className="hoverImg">
              <div className="Projects-coding-agent">
                <h2>Coding Agent</h2>
                <p>click to learn more</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="imageBox">
          <Link to="/projects/rpe10">
            <div className="imageInn">
              <img className="Projects-rpe10" src="rpe10.png" alt="rpe10"></img>
            </div>
            <div className="hoverImg">
              <div className="Projects-rpe10">
                <h2>RPE10</h2>
                <p>click to learn more</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="imageBox">
          <Link to="/projects/byte2bite">
            <div className="imageInn">
              <img
                className="Projects-byte2bite"
                src="byte2bite.png"
                alt="byte2bite"
              ></img>
            </div>
            <div className="hoverImg">
              <div className="Projects-byte2bite">
                <h2>Byte2Bite</h2>
                <p>click to learn more</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="imageBox">
          <Link to="/projects/deepscan">
            <div className="imageInn">
              <img
                className="Projects-deepscan"
                src="deepscan.png"
                alt="deepscan1"
              ></img>
            </div>
            <div className="hoverImg">
              <div className="Projects-deepscan">
                <h2>DeepScan Intelligence</h2>
                <p>click to learn more</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="imageBox">
          <Link to="/projects/stickman-life">
            <div className="imageInn">
              <img
                className="Projects-stickman-life"
                src="stickman_life1.png"
                alt="stick1"
              ></img>
            </div>
            <div className="hoverImg">
              <img
                className="Projects-stickman-life"
                src="stickman_life2.png"
                alt="stick2"
              ></img>
              <div className="Projects-stickman-life">
                <h2>Stickman Life</h2>
                <p>click to learn more</p>
              </div>
            </div>
          </Link>
        </div>

        {/* <div className="imageBox">
          <a
            href="https://www.undefinedrobotics.org/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="imageInn">
              <img
                className="Projects-robotics"
                src="robotics_website1.png"
                alt="robotics1"
              ></img>
            </div>
            <div className="hoverImg">
              <img
                className="Projects-robotics"
                src="robotics_website2.png"
                alt="robotics2"
              ></img>
              <div className="Projects-robotics">
                <h2>Undefined Robotics Website</h2>
                <p>click to visit</p>
              </div>
            </div>
          </a>
        </div> */}

        <div className="imageBox">
          <Link to="/projects/smart-scan-attendance">
            <div className="imageInn">
              <img
                className="Projects-smart-scan"
                src="smart_scan1.png"
                alt="smartscan1"
              ></img>
            </div>
            <div className="hoverImg">
              <img
                className="Projects-smart-scan"
                src="smart_scan2.png"
                alt="smartscan2"
              ></img>
              <div className="Projects-smart-scan">
                <h2>SmartScan Attendance</h2>
                <p>click to learn more</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="imageBox">
          <a
            href="https://shirleymassagetherapy.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="imageInn">
              <img
                className="Projects-massage"
                src="massage_website1.png"
                alt="massage1"
              ></img>
            </div>
            <div className="hoverImg">
              <img
                className="Projects-massage"
                src="massage_website2.png"
                alt="massage2"
              ></img>
              <div className="Projects-massage">
                <h2>Massage Therapy Business Website</h2>
                <p>click to visit</p>
              </div>
            </div>
          </a>
        </div>

        {/* <h2>Community Volleyball Court Reserver</h2> */}

        <div className="imageBox">
          <Link to="/projects/plan-pro">
            <div className="imageInn">
              <img
                className="Projects-plan-pro"
                src="plan_pro1.png"
                alt="planpro1"
              ></img>
            </div>
            <div className="hoverImg">
              <div className="Projects-plan-pro">
                <h2>PlanPro</h2>
                <p>click to learn more</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <h2 className="Projects-end">& this website ofc!</h2>
    </div>
  );
};

export default Projects;
