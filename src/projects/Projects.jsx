import "./Projects.css";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    key: "autonomous-air-racing",
    to: "/projects/autonomous-air-racing",
    title: "Autonomous Air Racing @ MIT Beaver Works Summer Institute",
    image: "bwsi.jpg",
  },
  {
    key: "coding-agent",
    to: "/projects/coding-agent",
    title: "Coding Agent",
    image: "coding_agent1.jpg",
  },
  {
    key: "rpe10",
    to: "/projects/rpe10",
    title: "RPE10",
    image: "rpe10.png",
  },
  {
    key: "deepscan",
    to: "/projects/deepscan",
    title: "DeepScan Intelligence",
    image: "deepscan.png",
  },
  {
    key: "stickman-life",
    to: "/projects/stickman-life",
    title: "Stickman Life",
    image: "stickman_life1.png",
    hoverImage: "stickman_life2.png",
  },
  {
    key: "smart-scan",
    to: "/projects/smart-scan-attendance",
    title: "SmartScan Attendance",
    image: "smart_scan1.png",
    hoverImage: "smart_scan2.png",
  },
  {
    key: "massage",
    href: "https://shirleymassagetherapy.com/",
    title: "Massage Therapy Business Website",
    image: "massage_website1.png",
    hoverImage: "massage_website2.png",
  },
  {
    key: "plan-pro",
    to: "/projects/plan-pro",
    title: "PlanPro",
    image: "plan_pro1.png",
  },
];

const Projects = () => {
  return (
    <div className="Projects">
      <h1>projects</h1>
      <div className="Projects-grid">
        {PROJECTS.map((p) => {
          const body = (
            <>
              <div className="Projects-card-media">
                <div className="Projects-card-imageStack">
                  <img
                    className="Projects-card-img Projects-card-img--primary"
                    src={p.image}
                    alt={`${p.title} preview`}
                  />
                  {p.hoverImage ? (
                    <img
                      className="Projects-card-img Projects-card-img--hover"
                      src={p.hoverImage}
                      alt=""
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
              </div>
              <div className="Projects-card-body">
                <h2 className="Projects-card-title">{p.title}</h2>
                <span className="Projects-card-hint">
                  {p.href ? "View website" : "View project"}
                </span>
              </div>
            </>
          );

          const linkClass = "Projects-card-link";

          return (
            <article key={p.key} className="Projects-card">
              {p.href ? (
                <a
                  href={p.href}
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {body}
                </a>
              ) : (
                <Link to={p.to} className={linkClass}>
                  {body}
                </Link>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
