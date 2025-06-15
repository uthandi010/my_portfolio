import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Visionary from "./components/Visionary";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./new-styles.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="about" className="about-section"><About /></section>
      <section id="skills" className="skills-section"><Skills /></section>
      <section id="visionary" className="visionary-section"><Visionary /></section>
      <section id="projects" className="projects-section"><Projects /></section>
      <section id="contact" className="contact-container"><Contact /></section>
    </div>
  );
};

export default App;
