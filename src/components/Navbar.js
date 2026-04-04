import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "../new-styles.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Agent", action: "open-agent" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openAgent = () => {
    window.dispatchEvent(new CustomEvent("portfolio-agent:open"));
    closeMenu();
  };

  return (
    <header className="navbar-shell">
      <nav className="navbar">
        <a href="#home" className="nav-brand" onClick={closeMenu}>
          <span className="nav-brand-mark">UP</span>
          <span className="nav-brand-copy">
            <strong>Uthandi P</strong>
            <small>Full-Stack Developer</small>
          </span>
        </a>

        <button
          type="button"
          className="menu-button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            item.action === "open-agent" ? (
              <button
                key={item.label}
                type="button"
                className="nav-link nav-link-button"
                onClick={openAgent}
              >
                {item.label}
              </button>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            )
          ))}
          <a
            href="https://drive.google.com/file/d/14ibcAk_vsmMXnQmsyvHiPety0YMk4aFy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            onClick={closeMenu}
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
