import React from "react";
import Navbar from "./components/Navbar";
import SiteStats from "./components/SiteStats";
import About from "./components/About";
import Skills from "./components/Skills";
import ChatWidget from "./components/ChatWidget";
import Projects from "./components/Projects";
import Visionary from "./components/Visionary";
import Contact from "./components/Contact";
import hackerBgMain from "./assets/stock/hacker-bg-main.jpg";
import hackerBgAlt from "./assets/stock/hacker-bg-alt.jpg";
import "./new-styles.css";

const App = () => {
  return (
    <div className="site-shell">
      <div className="site-background" aria-hidden="true">
        <div className="site-photo-stack">
          <div className="site-photo-layer site-photo-main">
            <img src={hackerBgMain} alt="" />
          </div>
          <div className="site-photo-layer site-photo-alt">
            <img src={hackerBgAlt} alt="" />
          </div>
        </div>
        <div className="site-gradient site-gradient-one"></div>
        <div className="site-gradient site-gradient-two"></div>
        <div className="site-grid"></div>
        <div className="site-scanlines"></div>
        <div className="ambient-orbs">
          <span className="ambient-orb orb-1"></span>
          <span className="ambient-orb orb-2"></span>
          <span className="ambient-orb orb-3"></span>
          <span className="ambient-orb orb-4"></span>
          <span className="ambient-orb orb-5"></span>
        </div>
        <div className="ambient-beams">
          <span className="ambient-beam beam-1"></span>
          <span className="ambient-beam beam-2"></span>
          <span className="ambient-beam beam-3"></span>
        </div>
        <div className="ambient-rings">
          <span className="ambient-ring ring-1"></span>
          <span className="ambient-ring ring-2"></span>
          <span className="ambient-ring ring-3"></span>
        </div>
      </div>

      <Navbar />
      <SiteStats />

      <main className="page-content">
        <About />
        <Skills />
        <Projects />
        <Visionary />
        <Contact />
      </main>

      <ChatWidget />
    </div>
  );
};

export default App;
