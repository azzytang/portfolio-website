import React from "react";
import "./CodingAgent.css";

const CodingAgent = () => {
  return (
    <div className="CodingAgent">
      <h1>Coding Agent</h1>
      <h3>Status: In Progress</h3>

      <h2>Video Demo:</h2>

      <iframe
        width="800px"
        height="250px"
        src="https://www.youtube.com/embed/RANCPn27rZM?si=h7_w9FFoE793JCcO"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <iframe
        width="800px"
        height="450px"
        src="https://www.youtube.com/embed/Xu4pZfOg-_c?si=fjbTDHLQL0DfFj_e"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="CodingAgent-desc">
        <p>
          A terminal coding agent that can help you code through
          creating/editing files, answering questions, and running commands.
          It's called thorugh the keyword "doo" and uses Claude Sonnet 4 and a
          prompt based on Cursor's prompt. In the examples above, it was able to
          make a rock, paper, scissors game, edit it, and made a basic portfolio
          website. Goal is to be able to improve the agent with itself.
        </p>
      </div>
    </div>
  );
};

export default CodingAgent;
