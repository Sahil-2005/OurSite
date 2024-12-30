import React from 'react';
import './Contact.css';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <h2>Let's Connect</h2>
      <form className="contact-form">
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
    </section>
  );
};

export default ContactForm;
