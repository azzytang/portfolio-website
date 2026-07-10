import "./Projects.css";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    key: "autonomous-air-racing",
    to: "/projects/autonomous-air-racing",
    title: "Autonomous Air Racing @ MIT Beaver Works Summer Institute",
    image: "optimized/bwsi-card.webp",
  },
  {
    key: "coding-agent",
    to: "/projects/coding-agent",
    title: "Coding Agent",
    image: "optimized/coding_agent1-card.webp",
  },
  {
    key: "rpe10",
    to: "/projects/rpe10",
    title: "RPE10",
    image: "optimized/rpe10-card.webp",
  },
  {
    key: "deepscan",
    to: "/projects/deepscan",
    title: "DeepScan Intelligence",
    image: "optimized/deepscan-card.webp",
  },
  // {
  //   key: "stickman-life",
  //   to: "/projects/stickman-life",
  //   title: "Stickman Life",
  //   image: "optimized/stickman_life1-card.webp",
  //   hoverImage: "optimized/stickman_life2-card.webp",
  // },
  {
    key: "smart-scan",
    to: "/projects/smart-scan-attendance",
    title: "SmartScan Attendance",
    image: "optimized/smart_scan1-card.webp",
    hoverImage: "optimized/smart_scan2-card.webp",
  },
  {
    key: "massage",
    href: "https://shirleymassagetherapy.com/",
    title: "Massage Therapy Business Website",
    image: "optimized/massage_website1-card.webp",
  },
  // {
  //   key: "plan-pro",
  //   to: "/projects/plan-pro",
  //   title: "PlanPro",
  //   image: "optimized/plan_pro1-card.webp",
  // },
];

const Projects = () => {
  return (
    <div className="Projects">
      <h1>projects</h1>
      <div className="Projects-grid">
        {PROJECTS.map((p, index) => {
          const isPriority = index < 3;
          const body = (
            <>
              <div className="Projects-card-media">
                <div className="Projects-card-imageStack">
                  <img
                    className="Projects-card-img Projects-card-img--primary"
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading={isPriority ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={isPriority ? "high" : "auto"}
                  />
                  {p.hoverImage ? (
                    <img
                      className="Projects-card-img Projects-card-img--hover"
                      src={p.hoverImage}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
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
