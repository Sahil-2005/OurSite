import React from 'react';
import './Contact.css';
import Spline from '@splinetool/react-spline';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <main>
      <Spline scene="https://prod.spline.design/s1nY0zmHaPDUN66U/scene.splinecode" />

    </main>
      <div className="glass-form-container">
        <form className="glass-form">
          <h2>Let's Connect</h2>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="4" required resize="none"></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
