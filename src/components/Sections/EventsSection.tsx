import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Sections.css';

gsap.registerPlugin(ScrollTrigger);

const EventsSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Title parallax with scale effect
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { 
          y: -30,
          scale: 0.95
        },
        {
          y: 30,
          scale: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          }
        }
      );
    }

    // Subtitle parallax
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { y: -20 },
        {
          y: 20,
          ease: "power1.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,
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
    <section id="events" className="section">
      <h1 ref={titleRef}>Events</h1>
      <p ref={subtitleRef}>Check out our upcoming events</p>
      {/* Add your events content here */}
    </section>
  );
};

export default EventsSection;