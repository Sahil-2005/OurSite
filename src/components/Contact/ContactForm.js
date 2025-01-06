import React from 'react';
import './Contact.css';

const ContactForm = () => {
  return (
    <section className="contact-section">

    <div className="intro-form">
      <h2>Let' work together</h2>
      <p>Or reach us via: <a href="sahil.com">ousite@mail.com</a></p>
      <form className="contact-fom">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>
        <button type="submit" className="submit-button">Connect</button>
      </form>
    </div>
    <div className="side-bar">
      Hey
    </div>
    </section>
  );
};

export default ContactForm;
