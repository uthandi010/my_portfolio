import React from "react";
import { ArrowRight, Bot, Sparkles } from "lucide-react";
import profileImage from "../assets/my_image.jpg";
import "../new-styles.css";

const focusAreas = [
  "Modern web apps",
  "AI-ready product thinking",
  "Scalable backends",
  "Mobile-friendly UI systems",
];

const stats = [
  { value: "Full Stack", label: "React, Vue, Rails, Python, .NET" },
  { value: "Client + Own", label: "Product work across internal and public apps" },
  { value: "Fast Shipping", label: "From interface polish to backend delivery" },
];

const About = () => {
  const openAgent = () => {
    window.dispatchEvent(new CustomEvent("portfolio-agent:open"));
  };

  return (
    <section id="home" className="hero-section section-shell">
      <div className="section-frame hero-grid">
        <div className="hero-copy reveal reveal-delay-1">
          <div className="eyebrow">
            <Sparkles size={16} />
            Full-Stack Developer from India
          </div>

          <h1 className="hero-title">
            Building sharp digital products with cleaner UI, motion, and
            real-world engineering depth.
          </h1>

          <p className="hero-description">
            I'm Uthandi P. I work across React, Vue 3, Python, Ruby on Rails,
            .NET, and .NET MAUI to create fast interfaces and reliable backend
            systems. I enjoy taking an ordinary page and turning it into
            something modern, animated, and easier to trust.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View Projects
              <ArrowRight size={18} />
            </a>
            <button type="button" className="secondary-button" onClick={openAgent}>
              <Bot size={18} />
              Talk To My Agent
            </button>
          </div>

          <div className="focus-list">
            {focusAreas.map((item) => (
              <span key={item} className="focus-pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay-2">
          <div className="portrait-card">
            <div className="portrait-badge">Available for collaborations</div>
            <img src={profileImage} alt="Uthandi P" className="portrait-image" />
            <div className="portrait-footer">
              <div>
                <h2>Uthandi P</h2>
                <p>Full-Stack Developer crafting web and mobile experiences.</p>
              </div>
              <div className="status-pill">
                <span className="status-dot"></span>
                Agent online
              </div>
            </div>
          </div>

          <div className="stats-panel">
            {stats.map((stat) => (
              <article key={stat.value} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
