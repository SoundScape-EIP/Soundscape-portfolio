import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import gsap from 'gsap';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      let aboutSectionFound = false;

      // Find the section closest to the top of the viewport
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;
        const sectionId = section.getAttribute('id') || '';

        // Special handling for about section and its subsections
        if (sectionId === 'about' || sectionId.startsWith('about-')) {
          if (scrollPosition >= sectionTop - 100 && 
              scrollPosition < sectionTop + sectionHeight - 60) {
            current = 'about';
            aboutSectionFound = true;
          }
        } 
        // Normal handling for other sections
        else if (!aboutSectionFound && 
                scrollPosition >= sectionTop - 60 && 
                scrollPosition < sectionTop + sectionHeight - 60) {
          if (sectionId) {
            current = sectionId;
          }
        }
      });
      
      // Only update if we found a valid section
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial active section
    handleScroll();
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);


  // Add effect for the underline animation
  useEffect(() => {
    if (indicatorRef.current && navLinksRef.current) {
      const activeLink = navLinksRef.current.querySelector(`.nav-links a[href="#${activeSection}"]`);

      if (activeLink) {
        const linkRect = activeLink.getBoundingClientRect();
        const navRect = navLinksRef.current.getBoundingClientRect();

        gsap.to(indicatorRef.current, {
          left: linkRect.left - navRect.left,
          width: linkRect.width,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  }, [activeSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false); // Close mobile menu when a link is clicked
    }
  };

  return (
    <nav className="navbar">
      {/* Desktop Navigation */}
      <div className="nav-links" ref={navLinksRef}>
        <a
          href="#home"
          className={activeSection === 'home' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Accueil
        </a>
        <a
          href="#about" 
          className={activeSection === 'about' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'about')}
        >
          À propos
        </a>
        <a
          href="#events" 
          className={activeSection === 'events' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'events')}
        >
          Événements
        </a>
        <a 
          href="#contact" 
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Liste d'attente
        </a>
        {/* Animated underline indicator */}
        <div className="nav-indicator" ref={indicatorRef}></div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-links">
          <a
            href="#home"
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Accueil
          </a>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            À propos
          </a>
          <a
            href="#events"
            className={activeSection === 'events' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'events')}
          >
            Événements
          </a>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Liste d'attente
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;