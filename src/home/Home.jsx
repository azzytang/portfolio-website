import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h1>Azalea Tang</h1>
      <h2>Developer and Student at the Texas Academy of Math and Science</h2>
      <Link to="/projects">
        <p>see my projects</p>
      </Link>
    </div>
  );
};

export default Home;
