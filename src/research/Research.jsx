import "./Research.css";

const Research = () => {
  return (
    <div className="Research">
      <header className="Research-intro">
        <h1>research</h1>
        <p className="Research-role">
          Research Assistant at the UNT Smart Electronic Systems Laboratory
        </p>
      </header>

      <section className="Research-content" aria-label="Publications">
        <article className="Research-publication-card">
          <p className="Research-pub-venue">IEEE ICBAIE · 2025</p>
          <h3 className="Research-pub-title">
            StrokeSentry: A Novel Approach to Rapid Stroke Detection Using Edge
            AI
          </h3>
          <ul className="Research-pub-list">
            <li>
              Built a mobile AI system to detect stroke symptoms using facial
              asymmetry and speech analysis
            </li>
            <li>
              Runs entirely on device using CoreML (low latency and privacy
              preserving)
            </li>
            <li>
              Achieved realtime inference using lightweight computer vision and
              audio models
            </li>
            <li>
              Designed features including Facial Asymmetry Index (EAA, MCA, BHA)
            </li>
          </ul>
          <p className="Research-pub-actions">
            <a
              href="https://ieeexplore.ieee.org/document/11326575"
              target="_blank"
              rel="noopener noreferrer"
            >
              View paper on IEEE Xplore
            </a>
          </p>
        </article>

        <div className="Research-inprogress">
          <p className="Research-inprogress-label">In progress</p>
          <p className="Research-inprogress-text">
            Second paper (currently under review) on memory efficient semantic
            segmentation for plant disease detection on edge devices.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Research;
