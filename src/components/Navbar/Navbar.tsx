import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add effect to prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
      <div className="nav-links">
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