import "./AutonomousAirRacing.css";

const AutonomousAirRacing = () => {
  return (
    <div className="AutonomousAirRacing">
      <h1>Autonomous Air Racing</h1>
      <h3>MIT Beaver Works Summer Institute</h3>
      <a
        href="https://bwsi.mit.edu/bwsi-programs-2/uav-2/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="AutonomousAirRacing-button">BWSI program page</p>
      </a>

      <div className="AutonomousAirRacing-imgs">
        <img src="/bwsi.jpg" alt="MIT Beaver Works Summer Institute" />
        <img
          src="/bwsi2.jpg"
          alt="MIT Beaver Works Summer Institute — additional photo"
        />
      </div>

      <h2>Video Demo:</h2>
      <iframe
        width="800px"
        height="500px"
        src="https://www.youtube.com/embed/hp9jllaVXbY"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="project-desc-panel">
        <p>
          Intensive summer program focused on autonomous flight and racing:
          perception, planning, and control for air vehicles in competitive
          scenarios. Work spans simulation, hardware integration, and teamwork
          in a fast-paced engineering environment alongside peers and mentors
          from MIT Lincoln Laboratory and collaborators.
        </p>
        <p>
          The course emphasizes hands-on systems engineering: integrating
          sensors and software, testing in simulation and on hardware, and
          iterating toward reliable autonomous behavior under time pressure.
        </p>
      </div>
    </div>
  );
};

export default AutonomousAirRacing;
