import React from "react";
import "../new-styles.css";

const Visionary = () => {
  return (
    <section id="visionary" className="visionary-section">
      <h2 className="visionary-title">Work Experience</h2>
      
      <div className="visionary-container">
        {/* Job Role */}
        <div className="visionary-job">
          <h3 className="visionary-role">
            <span className="highlight-role">Full-Stack Developer</span> –  
            <span className="highlight-company"> FRANCIUM TECH</span>
          </h3>
          <p className="visionary-date">(Feb 2025 – Present)</p>
        </div>

        {/* Bullet Points */}
        <ul className="visionary-list">
          <li>
            Developing and maintaining robust applications using Python, Ruby on Rails, Vue 3, .NET MAUI, .NET, and React.
          </li>
          <li>
            Building scalable backend systems and crafting intuitive front-end interfaces to enhance user experience.
          </li>
          <li>
            Collaborating with cross-functional teams to deliver high-quality, innovative software solutions.
          </li>
          <li>
            Implementing best coding practices, optimizing performance, and ensuring application security.
          </li>
        </ul>

        {/* Narrative Section */}
        <p className="visionary-narrative">
          "As a <span className="highlight-role">Full-Stack Developer</span> at 
          <span className="highlight-company"> FRANCIUM TECH</span>, I specialize in building high-performance applications using modern technologies. 
          My role involves designing intuitive user interfaces, developing scalable backend systems, and collaborating with teams to deliver 
          cutting-edge software solutions. Passionate about problem-solving and innovation, I continuously explore new technologies and best 
          practices to drive business success."
        </p>
      </div>
    </section>
  );
};

export default Visionary;
