
function Contact() {
    return(
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="contact-text">
          <h2 id="contact-tittle">Contact</h2>
          <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>

        <form className="contact-form" action="#" method="post" noValidate>
          <div className="form-field">
            <label htmlFor="name">NAME</label>
            <input type="text" id="name" name="name" autoComplete="name" required/>
          </div>

          <div className="form-field">
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" name="email" autoComplete="email" required pattern="^[A-Za-z0-9._%+-]+@gmail\.com$" placeholder=" "/>
            <p class="error-msg">Sorry, invalid format here</p>
          </div>

          <div className="form-field">
            <label htmlFor="message">MESSAGE</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className="btn-submit"><span className="highlight-name">SEND MESSAGE</span></button>
        </form>
      </div>
      <div className="form-orbits" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    );
}

export default Contact;