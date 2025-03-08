import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking a link (mobile)
    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-brand">Soundscape</div>
            <button 
                className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
                aria-label="toggle navigation"
                onClick={toggleMenu}
            >
                <span className="hamburger"></span>
            </button>
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <li className="nav-item">
                    <a href="#home" className="nav-link" onClick={handleLinkClick}>Home</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="nav-link" onClick={handleLinkClick}>About</a>
                </li>
                <li className="nav-item">
                    <a href="#projects" className="nav-link" onClick={handleLinkClick}>Projects</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link" onClick={handleLinkClick}>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar; 