import React from 'react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import './Sections.css'; // Import the CSS file

const HomeSection: React.FC = () => {
  const scrollArrowRef = useRef<HTMLDivElement>(null);

  // Animation for the scroll arrow
  useEffect(() => {
    if (scrollArrowRef.current) {
      gsap.to(scrollArrowRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <section id="home" className="section">
      <div className="hero-content">
        <div className="content-wrapper">
          <div className="logo-container">
            <img src="/logo.png" alt="Soundscape Logo" className="hero-logo" />
          </div>
          <h1>soundscape.</h1>
          <p className="hero-description purple-text">
            Find, join, or organize music events effortlessly. Connect, live and enjoy.
          </p>
          {/* <button className="cta-button">Join the waitlist</button> */}
        </div>
      </div>
      
      {/* Scroll indicator arrow */}
      <div className="scroll-arrow-container" ref={scrollArrowRef}>
        {/* <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div> */}
        <p className="scroll-text">Scroll down</p>
      </div>
    </section>
  );
};

export default HomeSection;