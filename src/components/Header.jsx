import git from "../img/GIT.svg";
import frontend from "../img/Front-end.svg";
import linkedin from "../img/Link.svg";
import twitter from "../img/Twitter.svg";

import face from "../img/face-pic.png";
import face2x from "../img/face-pic@2x.png";

function Header() {
    return(
    <header className="site-header">
    <span className="logo">adamkeyes</span>
    <nav className="header-icons" aria-label="Social media">
      <a href="#" aria-label="Github">
        <img src={git} alt="Github"/>
      </a>
      <a href="#" aria-label="Font-end">
        <img src={frontend} alt="Front-end Mentor"/>
      </a>
      <a href="#" aria-label="LinkedIn">
        <img src={linkedin} alt="Linkeind"/>
      </a>
      <a href="#" aria-label="Twitter">
        <img src={twitter} alt="Twitter"/>
      </a>
    </nav>
    <section className="header-container">
      <div className="header-orbits" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <div className="header-circle" aria-hidden="true"></div>
      <figure className="header-picture">
        <img
          src={face}
          srcSet={`${face} 1x, ${face2x} 2x`}
          alt="Portrait of Adam Keyes"/>
      </figure>
      <div className="header-text">
        <h1 className="hero-tittle">
          <span className="hero-line1">Nice to </span>
          <span className="hero-line2">meet you! i'm</span>
          <span className="hero-line3"><span className="highlight-name">Adam Keyes</span>.</span></h1>
        <p>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
        <a className="btn-contact" href="#contact"><span className="highlight-name">CONTACT ME</span></a>
      </div>
    </section>
    </header>
    );
}

export default Header;