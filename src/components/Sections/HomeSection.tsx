import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import './Sections.css'; // Import the CSS file
import logo from '/logo.png?url';

gsap.registerPlugin(ScrollTrigger);

const HomeSection: React.FC = () => {
  const scrollArrowRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

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

  // Parallax effect for hero content
  useEffect(() => {
    // Logo parallax
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { y: -20 },
        {
          y: 20,
          ease: "power1.out",
          scrollTrigger: {
            trigger: logoRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          }
        }
      );
    }

    // Title parallax with slight delay
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -30 },
        {
          y: 30,
          ease: "power1.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,
            toggleActions: "play none none reverse",
          }
        }
      );
    }

    // Description parallax with more movement
    if (descriptionRef.current) {
      gsap.fromTo(
        descriptionRef.current,
        { y: -40 },
        {
          y: 40,
          ease: "power1.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.9,
            toggleActions: "play none none reverse",
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="home" className="section">
      <div className="hero-content">
        <div className="content-wrapper" ref={contentRef}>
          <div className="logo-container" ref={logoRef}>
            <img src={logo} alt="Soundscape Logo" className="hero-logo" />
          </div>
          <h1 ref={titleRef}>soundscape.</h1>
          <p className="hero-description purple-text" ref={descriptionRef}>
            Trouvez, rejoignez ou organisez des événements musicaux sans effort. Connectez-vous, vivez et profitez.
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
        <p className="scroll-text">Faites défiler vers le bas</p>
      </div>
    </section>
  );
};

export default HomeSection;