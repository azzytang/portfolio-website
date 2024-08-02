import React from "react";
import "./PlanPro.css";
import { Link } from "react-router-dom";

const PlanPro = () => {
  return (
    <div className="PlanPro">
      <h1>PlanPro</h1>
      <h3>Status: prob wont finish</h3>
      <a
        href="https://github.com/azzytang/PlanPro"
        target="_blank"
        rel="noreferrer"
      >
        <p className="PlanPro-button">github repo</p>
      </a>
      <h2>Video Demo:</h2>
      <iframe
        width="600px"
        height="500px"
        src="https://www.youtube.com/embed/R9hOAEpJ1z0?si=UuK-W58HFLB67t3o"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="PlanPro-desc">
        <p>
          PlanPro is a super simple todo list maker/planner. It was created for
          the Kode with Klossy summer camp to learn Swift/SwiftUI. In the
          future, I hope to make better apps in both functionality and looks
          wise.
        </p>
      </div>
    </div>
  );
};

export default PlanPro;
