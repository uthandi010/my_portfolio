import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
import "../fresh-styles.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const FreshNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          <a href="#home" className="nav-logo" onClick={closeMobileMenu}>
            <div className="nav-logo-icon">UP</div>
            <span>Uthandi P</span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <div className="nav-socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
            <ThemeSwitcher />
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "active" : ""}`} onClick={closeMobileMenu}>
        <div className={`mobile-menu-content ${isMobileMenuOpen ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <div className="nav-logo">
              <div className="nav-logo-icon">UP</div>
              <span>Uthandi P</span>
            </div>
            <button
              type="button"
              className="mobile-menu-close"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-menu-links">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-menu-link"
                onClick={closeMobileMenu}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <p>Get in touch</p>
            <div className="mobile-menu-socials">
              <a href="mailto:contact@example.com" className="mobile-social-btn">
                <Mail size={20} />
              </a>
              <a href="https://github.com" className="mobile-social-btn">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="mobile-social-btn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreshNavbar;