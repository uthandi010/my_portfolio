import React from "react";
import "../new-styles.css";

// Import project images
import project1Image from "../assets/clientproject1.png";
import project2Image from "../assets/clientproject4.png";
import project3Image from "../assets/clientproject3.png";
import project4Image from "../assets/clientproject5.png";
import project5Image from "../assets/clientproject2.png";

const projects = [
  {
    id: 1,
    title: "Calculator App",
    image: project3Image,
    about: "Own - project",
    description: "A C# MAUI app for basic and advanced mathematical calculations.",
    techStack: ["C#", ".NET MAUI"],
    sourceCode: "https://github.com/uthandi010/CalculatorApp",
  },
  {
    id: 2,
    title: "Network Sniffer App",
    image: project2Image,
    about: "Own - project",
    description: "A .NET MAUI app for capturing and analyzing NetFlow traffic.",
    techStack: ["C#", ".NET MAUI", "SharpPcap", "OpenSSL"],
    sourceCode: "https://github.com/uthandi010/NetworkSnifferApp",
  },
  {
    id: 3,
    title: "Temporary Mail Creation Website",
    image: project4Image,
    about: "Own - project",
    description: "A website for generating temporary email addresses using HTML, CSS, JavaScript, and TypeScript.",
    techStack: ["HTML", "CSS", "JavaScript", "TypeScript"],
    sourceCode: "https://github.com/uthandi010/Temporary_Mail_Creation",
    liveSite: "https://dummymailcreation.netlify.app/",
  },
  {
    id: 4,
    title: "Blog Post App",
    image: project5Image,
    about: "Own - project",
    description: "A blog platform built with Ruby, Vue, and Docker for seamless content management.",
    techStack: ["Ruby", "Vue", "Docker"],
    sourceCode: "https://github.com/uthandi010/blog_app",
  },
  {
    id: 5,
    title: "Teldat - BeSafeAgent",
    image: project1Image,
    about: "Client - project",
    description: "A secure VPN-like application built with .NET MAUI, C#, SSL, and SQL for enhanced network privacy and protection.",
    techStack: ["C#", ".NET MAUI", "SSL", "SQL"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-heading">{project.title}</h3>
            <div className="project-tech">
              <span className="tech-box">{project.about}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-box">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
              {project.liveSite && (
                <a href={project.liveSite} target="_blank" rel="noopener noreferrer" className="btn">Visit Site</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;