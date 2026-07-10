import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const TypewriterText = ({ as: Tag, text, className = "", delay = 0 }) => {
  return (
    <Tag className={`typewriter-text ${className}`} aria-label={text}>
      {Array.from(text).map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="typewriter-char"
          aria-hidden="true"
          style={{ animationDelay: `${delay + index * 0.045}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className={`Home slide-in ${isLoading ? "loading" : "loaded"}`}>
      <img
        src="optimized/azalea_home-800.webp"
        alt="azzy"
        className="azzy-home"
        decoding="async"
        fetchPriority="high"
      />
      <TypewriterText as="h1" text="Azalea Tang" delay={0.25} />
      <TypewriterText as="h3" text="(azzy)" delay={0.9} />
      <TypewriterText
        as="h2"
        text="Developer and CS Student at The University of Texas at Austin"
        delay={1.25}
      />
      <Link to="/projects">
        <p className="project-button">see my projects</p>
      </Link>
    </div>
  );
};

export default Home;
