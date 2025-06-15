import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Visionary from "./components/Visionary";
import Contact from "./components/Contact";
import "./new-styles.css";

const App = () => {
  return (
    <div className="app-container">
      {/* Video Background */}
      <div className="video-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          <source src="assets/video/clip_1.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="content-wrapper">
        <Navbar />
        <main className="main-content">
          <About />
          <Skills />
          <Projects />
          <Visionary />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App; 