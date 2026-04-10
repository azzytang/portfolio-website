import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-attributions">
        <div>
          <a href="https://www.freepik.com/free-vector/abstract-background-with-hand-painted-clouds-design_50500233.htm#query=vintage%20sky&position=17&from_view=keyword&track=ais_user&uuid=819caba8-b60a-4686-8e6e-16fd202bcb4f">
            Background Image by kjpargeter
          </a>
          on Freepik
        </div>
      </div>

      <div className="Footer-contact">
        <p className="Footer-contact-label">Contact</p>
        <a href="mailto:azzytang@gmail.com" className="Footer-email-link">
          azzytang@gmail.com
        </a>
        <div className="Footer-social-icons">
          <a
            href="https://www.linkedin.com/in/azalea-tang-7474a7298"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="Footer-icons"
              src="linkedin_icon.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/azzytang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="Footer-icons" src="github_logo.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
