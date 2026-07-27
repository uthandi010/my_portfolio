import React from "react";
import { BriefcaseBusiness, CheckCheck } from "lucide-react";
import "../professional-styles.css";

const getExperienceDuration = (startYear, startMonth) => {
  const today = new Date();
  const startDate = new Date(startYear, startMonth - 1, 1);

  let totalMonths =
    (today.getFullYear() - startDate.getFullYear()) * 12 +
    (today.getMonth() - startDate.getMonth());

  if (today.getDate() < startDate.getDate()) {
    totalMonths -= 1;
  }

  if (totalMonths < 0) {
    totalMonths = 0;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  // Return only years and months as requested
  if (years > 0 && months > 0) {
    return `${years}y ${months}m`;
  }

  if (years > 0) {
    return `${years}y`;
  }

  return `${months}m`;
};

const strengths = [
  "Builds and maintains robust applications across frontend and backend systems.",
  "Balances product usability, performance, and clean engineering practices.",
  "Works comfortably with cross-functional teams and real delivery timelines.",
  "Continuously improves code quality, maintainability, and developer workflow.",
];

const ProfessionalExperience = () => {
  const experienceDuration = getExperienceDuration(2025, 2);

  return (
    <section id="experience" className="section">
      <div className="section-header">
        <div className="section-badge">
          <BriefcaseBusiness size={16} />
          Experience
        </div>
        <h2 className="section-title">
          Current role and expertise
        </h2>
        <p className="section-subtitle">
          Turning requirements into stable, production-ready experiences that users can actually enjoy using.
        </p>
      </div>

      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3 className="experience-title">Full-Stack Developer</h3>
            <p className="experience-company">Francium Tech</p>
          </div>
          <div className="experience-duration">
            {experienceDuration}
          </div>
        </div>

        <p className="experience-description">
          Building and maintaining applications using Python, Ruby on Rails, Vue 3, React, .NET, and .NET MAUI while supporting performance, usability, and long-term maintainability.
        </p>

        <div className="experience-highlights">
          {strengths.map((strength) => (
            <div key={strength} className="experience-highlight">
              <CheckCheck size={16} />
              <span>{strength}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;