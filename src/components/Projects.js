import React from "react";
import { ExternalLink, FolderGit2, Github } from "lucide-react";
import project1Image from "../assets/clientproject1.png";
import project2Image from "../assets/clientproject4.png";
import project3Image from "../assets/clientproject3.png";
import project4Image from "../assets/clientproject5.png";
import project5Image from "../assets/clientproject2.png";
import "../new-styles.css";

const projects = [
  {
    id: 1,
    title: "Calculator App",
    image: project3Image,
    type: "Own project",
    description:
      "A C# and .NET MAUI calculator experience built for both everyday calculations and more advanced math workflows.",
    techStack: ["C#", ".NET MAUI"],
    sourceCode: "https://github.com/uthandi010/CalculatorApp",
  },
  {
    id: 2,
    title: "Network Sniffer App",
    image: project2Image,
    type: "Own project",
    description:
      "A traffic-analysis tool focused on packet capture and NetFlow inspection with a practical desktop-style interface.",
    techStack: ["C#", ".NET MAUI", "SharpPcap", "OpenSSL"],
    sourceCode: "https://github.com/uthandi010/NetworkSnifferApp",
  },
  {
    id: 3,
    title: "Temporary Mail Creation Website",
    image: project4Image,
    type: "Own project",
    description:
      "A lightweight utility website for generating temporary email addresses with a fast browser-first experience.",
    techStack: ["HTML", "CSS", "JavaScript", "TypeScript"],
    sourceCode: "https://github.com/uthandi010/Temporary_Mail_Creation",
    liveSite: "https://dummymailcreation.netlify.app/",
  },
  {
    id: 4,
    title: "Blog Post App",
    image: project5Image,
    type: "Own project",
    description:
      "A content platform built with Ruby, Vue, and Docker to support publishing workflows and cleaner content management.",
    techStack: ["Ruby", "Vue", "Docker"],
    sourceCode: "https://github.com/uthandi010/blog_app",
  },
  {
    id: 5,
    title: "Teldat BeSafeAgent",
    image: project1Image,
    type: "Client project",
    description:
      "A secure network-protection application built with .NET MAUI, SSL, and SQL to improve privacy and traffic safety.",
    techStack: ["C#", ".NET MAUI", "SSL", "SQL"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-shell">
      <div className="section-frame">
        <div className="section-intro reveal">
          <div className="eyebrow">
            <FolderGit2 size={16} />
            Selected Work
          </div>
          <h2 className="section-title">
            Projects that show both practical engineering and product taste.
          </h2>
          <p className="section-description">
            These projects cover utilities, content products, networking tools,
            and production client work.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card reveal reveal-delay-${(index % 3) + 1}`}
            >
              <div className="project-media">
                <img src={project.image} alt={project.title} className="project-image" />
                <span className="project-type">{project.type}</span>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech-stack">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github size={16} />
                      Source
                    </a>
                  )}
                  {project.liveSite && (
                    <a
                      href={project.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={16} />
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
