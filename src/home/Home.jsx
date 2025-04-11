import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className={`Home slide-in ${isLoading ? "loading" : "loaded"}`}>
      <h1>Azalea Tang</h1>
      <h3>(azzy)</h3>
      <h2>
        Developer and Student at the Texas Academy of Mathematics and Science
      </h2>
      <Link to="/projects">
        <p>see my projects</p>
      </Link>
    </div>
  );
};

export default Home;
