import React from "react";
import profileImage from "../assets/my_image.jpg";
import "../professional-styles.css";

const ProfessionalHero = () => {
  return (
    <section id="home" className="section hero">
      <div className="hero-badge">
        <span style={{ display: "inline-block", width: "8px", height: "8px", background: "currentColor", borderRadius: "50%", animation: "pulse 2s infinite" }}></span>
        Available for opportunities
      </div>

      <h1 className="hero-title">
        Building exceptional digital experiences
      </h1>

      <p className="hero-subtitle">
        Full-Stack Developer
      </p>

      <p className="hero-description">
        I craft clean, efficient, and user-friendly digital experiences using React, Vue, Python, Ruby on Rails, .NET, and modern technologies. Let's build something amazing together.
      </p>

      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">
          View Projects
        </a>
        <a href="#contact" className="btn btn-secondary">
          Get In Touch
        </a>
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-value">3+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">5+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">100%</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHero;