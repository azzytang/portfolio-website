import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const TypewriterText = ({ as: Tag, text, className = "", delay = 0 }) => {
  let charIndex = 0;

  return (
    <Tag className={`typewriter-text ${className}`} aria-label={text}>
      {text.split(/(\s+)/).map((part, partIndex) => {
        if (/^\s+$/.test(part)) {
          return part;
        }

        return (
          <span
            key={`${part}-${partIndex}`}
            className="typewriter-word"
            aria-hidden="true"
          >
            {Array.from(part).map((char) => {
              const currentIndex = charIndex;
              charIndex += 1;

              return (
                <span
                  key={`${char}-${currentIndex}`}
                  className="typewriter-char"
                  style={{
                    animationDelay: `${delay + currentIndex * 0.045}s`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
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
      <TypewriterText
        as="h2"
        text="Developer and CS Student at The University of Texas at Austin"
        delay={0.9}
      />
      <Link to="/projects">
        <p className="project-button">see my projects</p>
      </Link>
    </div>
  );
};

export default Home;
