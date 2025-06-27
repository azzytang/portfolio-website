import React from "react";
import "./RPE10.css";
import { Link } from "react-router-dom";

const RPE10 = () => {
  return (
    <div className="RPE10">
      <h1>RPE10</h1>
      <h3>Status: MVP in progress</h3>

      <h2>Video Demo:</h2>
      <iframe
        width="800px"
        height="500px"
        src="https://www.youtube.com/embed/8ujjDp8xJp0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="RPE10-desc">
        <p>
          RPE10 is the verified digital identity for competitive powerlifters.
          Track your PRs, build shareable meet recaps, and earn recognition that
          actually means something. Whether you're repping your local gym or
          chasing national records, RPE10 keeps track of your meet history,
          complete with badges, totals, and federation-verified stats. Built for
          powerlifters. Backed by data. Powered by community.
        </p>
        <p>
          I am currently working on the MVP and will start testing with a group
          of around 10 beta testers starting in July 2025.
        </p>
        <p>Expecting to launch in August 2025.</p>
      </div>
    </div>
  );
};

export default RPE10;
