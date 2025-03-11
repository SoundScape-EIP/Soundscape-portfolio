import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="section">
      <div className="hero-content">
        <div className="content-wrapper">
          <div className="logo-container">
            <img src="/logo.png" alt="Soundscape Logo" className="hero-logo" />
          </div>
          <h1>soundscape.</h1>
          <p className="hero-description">
            Find, join, or organize music events effortlessly. Connect, live and enjoy.
          </p>
          <button className="cta-button">Join the waitlist</button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;