import React from "react";
import { Layers3, MonitorSmartphone, ServerCog, Wrench } from "lucide-react";
import htmlLogo from "../assets/Html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import vueLogo from "../assets/vue.png";
import rubyLogo from "../assets/rails.png";
import pythonLogo from "../assets/python.png";
import dotNetLogo from "../assets/dotnet.png";
import gitLogo from "../assets/git.png";
import vscodeLogo from "../assets/vscode.png";
import githubLogo from "../assets/github.png";
import netlifyLogo from "../assets/netlify.png";
import chromeDevLogo from "../assets/devtool.png";
import mauiLogo from "../assets/maui.png";
import sqlLogo from "../assets/sql.png";
import angularLogo from "../assets/angular.png";
import "../new-styles.css";

const skillGroups = [
  {
    title: "Frontend systems",
    icon: <MonitorSmartphone size={18} />,
    description:
      "Responsive interfaces with strong interaction design and component thinking.",
    items: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "React", logo: reactLogo },
      { name: "Vue.js", logo: vueLogo },
    ],
  },
  {
    title: "Backend delivery",
    icon: <ServerCog size={18} />,
    description:
      "API work, business logic, and scalable application development across stacks.",
    items: [
      { name: "Ruby on Rails", logo: rubyLogo },
      { name: "Python", logo: pythonLogo },
      { name: ".NET", logo: dotNetLogo },
      { name: ".NET MAUI", logo: mauiLogo },
      { name: "SQL", logo: sqlLogo },
    ],
  },
  {
    title: "Workflow tools",
    icon: <Wrench size={18} />,
    description:
      "Daily tools for shipping, debugging, collaboration, and deployment.",
    items: [
      { name: "Git", logo: gitLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Chrome DevTools", logo: chromeDevLogo },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="section-frame">
        <div className="section-intro reveal">
          <div className="eyebrow">
            <Layers3 size={16} />
            Core Skill Stack
          </div>
          <h2 className="section-title">Tools I use to turn ideas into products.</h2>
          <p className="section-description">
            My work sits between interface polish and application engineering,
            so I focus on technologies that help me ship complete solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className={`skill-group-card reveal reveal-delay-${index + 1}`}
            >
              <div className="skill-group-head">
                <span className="skill-icon-wrap">{group.icon}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className="skills-chip-grid">
                {group.items.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <img src={skill.logo} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
