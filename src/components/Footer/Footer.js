import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-content">
        <h3>Footer Section</h3>
        <p>Footer content goes here</p>
        <ul className="footer-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p>&copy; 2024 Our Portfolio | All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
