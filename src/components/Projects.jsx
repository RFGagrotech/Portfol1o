import img1 from "../img/img-1.jpg";
import img2 from "../img/img-1@2x.jpg";
import img3 from "../img/img-2.jpg"
import img4 from "../img/img-2@2x.jpg"
import img5 from "../img/img-3.jpg";
import img6 from "../img/img-3@2x.jpg";
import img7 from "../img/img-4.jpg";
import img8 from "../img/img-4@2x.jpg";
import img9 from "../img/img-5.jpg";
import img10 from "../img/img-5@2x.jpg";
import img11 from "../img/img-6.jpg";
import img12 from "../img/img-6@2x.jpg";

function Projects() {
    return(
    <section className="projects" aria-labelledby="projects-tittle">
      <div className="projects-header">
        <h2 id="projects-tittle" className="projects-tittle" >Projects</h2>
        <a className="btn-contact" href="#contact"><span className="highlight-name">CONTACT ME</span></a>
      </div>

  <div className="projects-grid">
  <article className="project-card">
    <div className="project-thumb">
      <img src={img1}
           srcSet={`${img1} 1x, ${img2} 2x`}
           alt="Design portfolio"/>
      <div className="project-links">
        <a href="#"><span class="highlight-name">VIEW PROJECT</span></a>
        <a href="#"><span class="highlight-name">VIEW CODE</span></a>
      </div>
    </div>
    <h3>DESIGN PORTFOLIO</h3>
    <p>HTML CSS</p>
  </article>

  <article className="project-card">
    <div className="project-thumb">
      <img src={img3}
           srcSet={`${img3} 1x, ${img4} 2x`}
           alt="e-learning landing page"/>
      <div className="project-links">
        <a href="#"><span class="highlight-name">VIEW PROJECT</span></a>
        <a href="#"><span class="highlight-name">VIEW CODE</span></a>
      </div>
    </div>
    <h3>E-LEARNING LANDING PAGE</h3>
    <p>HTML CSS</p>
  </article>

  <article className="project-card">
    <div className="project-thumb">
      <img src={img5}
           srcSet={`${img5} 1x, ${img6} 2x`}
           alt="todo web app"/>
      <div className="project-links">
        <a href="#"><span class="highlight-name">VIEW PROJECT</span></a>
        <a href="#"><span class="highlight-name">VIEW CODE</span></a>
      </div>
    </div>
    <h3>TODO WEB APP</h3>
    <p>HTML CSS JAVASCRIPT</p>
  </article>

  <article className="project-card">
    <div className="project-thumb">
      <img src={img7}
           srcSet= {`${img7} 1x,${img8} 2x`}
           alt="entertainment web app"/>
      <div className="project-links">
        <a href="#"><span class="highlight-name">VIEW PROJECT</span></a>
        <a href="#"><span class="highlight-name">VIEW CODE</span></a>
      </div>
    </div>
    <h3>ENTERTAINMENT WEB APP</h3>
    <p>HTML CSS JAVASCRIPT</p>
  </article>

  <article className="project-card">
    <div className="project-thumb">
      <img src={img9}
           srcSet={`${img9} 1x, ${img10} 2x`}
           alt="memory game"/>
      <div className="project-links">
        <a href="#"><span class="highlight-name">VIEW PROJECT</span></a>
        <a href="#"><span class="highlight-name">VIEW CODE</span></a>
      </div>
    </div>
    <h3>MEMORY GAME</h3>
    <p>HTML CSS JAVASCRIPT</p>
  </article>

  <article className="project-card">
    <div className="project-thumb">
      <img src={img11}
           srcSet={`${img11} 1x, ${img12} 2x`}
           alt="art gallery showcase"/>

      <div className="project-links">
        <a href="#"><span class="highlight-name">VIEW PROJECT</span></a>
        <a href="#"><span class="highlight-name">VIEW CODE</span></a>
      </div>
    </div>
    <h3>ART GALLERY SHOWCASE</h3>
    <p>HTML CSS JAVASCRIPT</p>
  </article>

</div>

    </section>
    );
}

export default Projects;