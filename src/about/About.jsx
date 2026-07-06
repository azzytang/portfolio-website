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
        <div className="About-desc project-desc-panel">
          <p>
            Hi! I am currently pursuing my B.S. in Computer Science at UT
            Austin. I also previously attended the Texas Academy of Math and
            Science (TAMS).
          </p>
          <p>
            I have been coding for 6 years and enjoy participating in coding
            competitions & hackathons. Creating websites, games, and software
            are also passions of mine, as it allows me to apply my knowledge and
            interests to something real that people can experience and interact
            with. You can see the projects I have finished or are working on
            here.
          </p>

          <p>
            Aside from coding, I compete in powerlifting and enjoy biking,
            cooking, and hanging out with friends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
