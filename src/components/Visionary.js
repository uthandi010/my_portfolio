import React from "react";
import { BriefcaseBusiness, CheckCheck, Rocket } from "lucide-react";
import "../new-styles.css";

const strengths = [
  "Builds and maintains robust applications across frontend and backend systems.",
  "Balances product usability, performance, and clean engineering practices.",
  "Works comfortably with cross-functional teams and real delivery timelines.",
  "Continuously improves code quality, maintainability, and developer workflow.",
];

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
  const yearLabel = years === 1 ? "year" : "years";
  const monthLabel = months === 1 ? "month" : "months";

  if (years > 0 && months > 0) {
    return `${years} ${yearLabel} ${months} ${monthLabel}`;
  }

  if (years > 0) {
    return `${years} ${yearLabel}`;
  }

  return `${months} ${monthLabel}`;
};

const Visionary = () => {
  const experienceDuration = getExperienceDuration(2025, 2);

  return (
    <section id="experience" className="section-shell">
      <div className="section-frame experience-layout">
        <div className="section-intro reveal reveal-delay-1">
          <div className="eyebrow">
            <BriefcaseBusiness size={16} />
            Experience
          </div>
          <h2 className="section-title">Current role and the value behind the work.</h2>
          <p className="section-description">
            My day-to-day work is about turning requirements into stable,
            production-ready experiences that users can actually enjoy using.
          </p>
        </div>

        <div className="experience-panel reveal reveal-delay-2">
          <div className="experience-card">
            <div className="experience-card-top">
              <span className="experience-tag">Current position</span>
              <span className="experience-date">February 2025 - Present</span>
            </div>

            <h3>Full-Stack Developer at Francium Tech</h3>
            <p>
              Building and maintaining applications using Python, Ruby on Rails,
              Vue 3, React, .NET, and .NET MAUI while supporting performance,
              usability, and long-term maintainability.
            </p>

            <div className="experience-metric-card">
              <span className="experience-metric-label">Experience in this role</span>
              <strong>{experienceDuration}</strong>
            </div>

            <div className="experience-points">
              {strengths.map((strength) => (
                <div key={strength} className="experience-point">
                  <CheckCheck size={16} />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-side-card">
            <div className="eyebrow eyebrow-compact">
              <Rocket size={14} />
              Working style
            </div>
            <p>
              I enjoy modernizing outdated UI, tightening the full user journey,
              and delivering features that feel both useful and well-finished on
              desktop and mobile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visionary;
