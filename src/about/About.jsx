import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <h1>About</h1>
      <div className="About-container">
        <img src="azalea_nobg2.png" alt="me"></img>
        <div>
          <p>
            Hi, I am a junior in highschool attending the Texas Academy of Math
            and Science (TAMS) on the Computer Science track.
          </p>
          <p>
            I have been coding for 3 years and enjoy participating in coding
            competitions and hackathons. Creating websites, games, etc. are also
            passions of mine, as it allows me to apply my knowledge to something
            real that people can experience and interact with. You can see the
            projects I have finished or are working on here.
          </p>
          <p>
            The coding language I am most comforatble with is Python, as it is
            my first language. I also know Java, Javascript, C++, CSS, HTML, and
            Swift.
          </p>
          <p>
            Aside from coding, I also love to weightlift, cook, play sports, and
            hangout with friends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
