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

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 60) {
          current = section.getAttribute('id');
        }
      });
      if (current) {
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
  }, []);


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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          Home
        </a>
        <a
          href="#events" 
          className={activeSection === 'events' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'events')}
        >
          Events
        </a>
        <a 
          href="#shop" 
          className={activeSection === 'shop' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'shop')}
        >
          Shop
        </a>
        <a 
          href="#contact" 
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact
        </a>
        {/* Animated underline indicator */}
        <div className="nav-indicator" ref={indicatorRef}></div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
        aria-label="Menu"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-links">
          <a
            href="#home"
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </a>
          <a
            href="#events"
            className={activeSection === 'events' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'events')}
          >
            Events
          </a>
          <a
            href="#shop"
            className={activeSection === 'shop' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'shop')}
          >
            Shop
          </a>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;