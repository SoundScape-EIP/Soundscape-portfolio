import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sections.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const textContainersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Create a smooth scrolling effect for each text container
    textContainersRef.current.forEach((container, index) => {
      if (container && sectionsRef.current[index]) {
        // Initial animation to fade in the text
        gsap.to(container, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionsRef.current[index],
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
            scrub: 0.5,
          }
        });

        // Parallax effect - text moves slightly up as we scroll down
        gsap.to(container, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionsRef.current[index],
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      }
    });

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section id="about" className="section" ref={el => sectionsRef.current[0] = el}>
        <div className="about-content">
          <h1>About Soundscape</h1>
          <div className="about-section-row">
            <div className="about-text-container parallax-text" ref={el => textContainersRef.current[0] = el}>
              <h2>
                Soundscape is revolutionizing the way we discover and share music. 
                Breaking free from traditional algorithms, we're creating a community-driven 
                platform that connects people through music in their local neighborhoods.
              </h2>
            </div>
            <div className="about-image-container">
              <img src="/pics/1.JPG" alt="Community-driven music platform" className="about-image" />
            </div>
          </div>
        </div>
      </section>

      <section id="about-features" className="section" ref={el => sectionsRef.current[1] = el}>
        <div className="about-content">
          <div className="about-section-row reverse">
            <div className="about-text-container parallax-text" ref={el => textContainersRef.current[1] = el}>
              <h2>
                Using geolocation, we enable users to explore, collect, and share music 
                within their communities. Discover new tracks as you explore different 
                neighborhoods, collect musical trophies, and trade with other music enthusiasts.
              </h2>
            </div>
            <div className="about-image-container">
              <img src="/pics/2.JPG" alt="Geolocation music discovery" className="about-image" />
            </div>
          </div>
        </div>
      </section>

      <section id="about-community" className="section" ref={el => sectionsRef.current[2] = el}>
        <div className="about-content">
          <div className="about-section-row">
            <div className="about-text-container parallax-text" ref={el => textContainersRef.current[2] = el}>
              <h2>
                We believe in the power of human connection. Our platform encourages real 
                interactions, allowing users to shape the musical landscape of their areas 
                through suggestions and votes.
              </h2>
            </div>
            <div className="about-image-container">
              <img src="/pics/3.JPG" alt="Human connection through music" className="about-image" />
            </div>
          </div>
        </div>
      </section>

      <section id="about-audience" className="section" ref={el => sectionsRef.current[3] = el}>
        <div className="about-content">
          <div className="about-section-row reverse">
            <div className="about-text-container parallax-text" ref={el => textContainersRef.current[3] = el}>
              <h2>
                Whether you're a music lover seeking new sounds, someone looking to connect 
                with others, or an artist wanting to reach new audiences, Soundscape is 
                your platform for musical discovery and community.
              </h2>
            </div>
            <div className="about-image-container">
              <img src="/pics/4.JPG" alt="Musical discovery and community" className="about-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;