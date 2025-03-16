import React from 'react';
import './Sections.css';

const WaitlisttSection: React.FC = () => {
  return (
    <section id="contact" className="section">
      <h2>Join the Waitlist</h2>
      <div className="waitlist-form">
        <input type="email" placeholder="email" className="waitlist-input" />
        <button className="cta-button">Join Now</button>
        <div className="contact-container">
          <a href="mailto:contact@soundscape.com" className="contact-link">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default WaitlisttSection;