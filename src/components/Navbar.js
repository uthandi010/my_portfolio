import React, { useState } from "react";
import "../new-styles.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a href="#home" className="nav-link">Portfolio</a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className={`menu-button ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="menu-icon"></span>
      </button>

      {/* Navigation Links */}
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
        <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
        <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
        <a href="#visionary" className="nav-link" onClick={closeMenu}>Experience</a>
        <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
