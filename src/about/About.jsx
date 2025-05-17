import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <h1>about</h1>
      <div className="About-container">
        <div>
          <img className="About-image" src="azalea1.png" alt="me"></img>
          <div className="About-caption">
            <p>1st @ digital divas comp</p>
            <img className="arrow" src="about_arrow.png"></img>
          </div>
        </div>
        <div className="About-desc">
          <p>
            Hi! I am currently studying Computer Science at the Texas Academy of
            Mathematics and Science.
          </p>
          <p>
            I have been coding for 3 years and enjoy participating in coding
            competitions & hackathons, and competing to FTC Robotics. Creating
            websites, games, etc. are also passions of mine, as it allows me to
            apply my knowledge to something real that people can experience and
            interact with. You can see the projects I have finished or are
            working on here.
          </p>

          <p>
            Aside from coding, I also love to weightlift, bike, cook, play
            sports, and hangout with friends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
