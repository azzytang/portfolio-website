import React from "react";
import "./RPE10.css";
import { Link } from "react-router-dom";

const RPE10 = () => {
  return (
    <div className="RPE10">
      <h1>RPE10</h1>
      <h3>Status: In progress</h3>
      <a
        href="https://github.com/azzytang/Max-AI"
        target="_blank"
        rel="noreferrer"
      >
        <p className="RPE10-button">github repo</p>
      </a>
      <h2>Video Demo:</h2>
      <iframe
        width="800px"
        height="500px"
        src="https://www.youtube.com/embed/VOIyfCCE0bk?si=0k-HMWD-XYFQkWt0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="RPE10-desc">
        <p>
          RPE10 is a web application that develops block programs for
          powerlifting. I am starting with a generalized model based on logic,
          no ML, that takes in age, gender, weight, height, current maxes,
          training experience, frequency, goals, injuries or limitations. Later,
          I plan to account for user training data and make adjustments to the
          block like how a coach would with neural networks.
        </p>
        <p>
          Further in the future, I hope to create a federated learning model
          that can be used by multiple users to improve the block program.
        </p>
      </div>
    </div>
  );
};

export default RPE10;
