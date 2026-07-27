import React from "react";
import { Code2, Database, Layout, Server, Smartphone, Wrench } from "lucide-react";
import "../professional-styles.css";

const skills = [
  {
    category: "Frontend Development",
    icon: <Layout size={20} />,
    items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend Development",
    icon: <Server size={20} />,
    items: ["Node.js", "Python", "Ruby on Rails", ".NET", "GraphQL"]
  },
  {
    category: "Database Management",
    icon: <Database size={20} />,
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
  },
  {
    category: "Mobile Development",
    icon: <Smartphone size={20} />,
    items: ["React Native", ".NET MAUI", "Flutter"]
  },
  {
    category: "DevOps & Tools",
    icon: <Wrench size={20} />,
    items: ["Git", "Docker", "AWS", "CI/CD", "Agile"]
  },
  {
    category: "Core Technologies",
    icon: <Code2 size={20} />,
    items: ["REST APIs", "Microservices", "System Design", "Testing"]
  }
];

const ProfessionalSkills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <div className="section-badge">
          <Code2 size={16} />
          Skills & Expertise
        </div>
        <h2 className="section-title">
          Technologies I work with
        </h2>
        <p className="section-subtitle">
          A comprehensive toolkit spanning frontend, backend, mobile, and infrastructure technologies.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="card">
            <div className="card-header">
              <div className="card-icon">
                {skillGroup.icon}
              </div>
              <h3 className="card-title">{skillGroup.category}</h3>
            </div>
            <div className="skills-section">
              {skillGroup.items.map((skill) => (
                <div key={skill} className="skill-item">
                  <div className="skill-icon">
                    <span style={{ fontSize: "0.75rem", fontWeight: "700" }}>{skill[0]}</span>
                  </div>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalSkills;