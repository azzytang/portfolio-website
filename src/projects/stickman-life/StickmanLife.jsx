import React from "react";
import "./StickmanLife.css";
const StickmanLife = () => {
  return (
    <div className="StickmanLife">
      <h1>Stickman Life</h1>
      <h3>Status: In Progress</h3>
      <h2>Video Demo:</h2>
      <iframe
        width="890px"
        height="500px"
        src="https://www.youtube.com/embed/OVCrju9oqzk?si=l40CJHxGDiQL34i8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="StickmanLife-desc">
        <p>
          Stickman Life is a fun rendition of the Duck Life games I started when
          I was a Sophomore in HS (2023). I used to play Duck Life throughout my
          primary school years, and really enjoyed it. To relive some of the
          nostalgic years, I remade a version of it with a twist: instead of
          ducks racing and training, it would be stickmen.
        </p>
        <p>
          The purpose of this project was mainly to learn how to use the pygame
          library. I have been working on Stickman Life on and off, but am
          expecting to finish it this summer (2024). After finishing the basic
          functionality of the game, I plan to release it on Steam free of cost.
        </p>
        {/* <img src="/text_bg.png"></img> */}
      </div>
    </div>
  );
};

export default StickmanLife;
