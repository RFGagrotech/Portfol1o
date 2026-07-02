import git from "../img/GIT.svg";
import frontend from "../img/Front-end.svg";
import linkedin from "../img/Link.svg";
import twitter from "../img/Twitter.svg";

function Footer() {
    return(
    <footer className="site-footer">
      <section className="footer">
        <span className="footer-logo">adamkeyes</span>

        <nav className="footer-icons" aria-label="Social media">
          <a href="#" aria-label="Github">
        <img src={git} alt="Github"/>
          </a>
          <a href="#" aria-label="Frontend Mentor">
            <img src={frontend} alt="Front-end Mentor"/>
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src={linkedin} alt="Linkeind"/>
          </a>
          <a href="#" aria-label="Twitter">
            <img src={twitter} alt="Twitter"/>
          </a>
        </nav>
      </section>
    </footer>
    );
}

export default Footer;