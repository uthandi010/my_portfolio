import React from "react";
import "../new-styles.css";
import profileImage from "../assets/my_image.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        {/* Left Column - Text Content */}
        <div className="about-text">
          <h1 className="about-greeting">Hi, I am Uthandi P </h1>
          <h2 className="about-position">
            I am a <span className="moving-text"></span>
          </h2>
          <p className="about-description">
            I'm a full-stack developer skilled in modern technologies, including Python, Ruby on Rails, Vue 3, .NET MAUI, .NET, and React. I specialize in building dynamic and scalable applications, crafting seamless front-end experiences, and developing robust backend solutions. With expertise across multiple frameworks and platforms, I create high-performance applications that merge innovation with efficiency.
          </p>
          <a 
            href="https://drive.google.com/file/d/14ibcAk_vsmMXnQmsyvHiPety0YMk4aFy/view?usp=sharing" 
            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Resume
          </a>
        </div>

        {/* Right Column - Profile Image */}
        <div className="about-image-container">
          <img src={profileImage} alt="Profile" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
