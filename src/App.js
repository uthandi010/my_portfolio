import React from "react";
import { ThemeProvider } from "./theme-context";
import ClassicNavbar from "./components/ClassicNavbar";
import FreshHero from "./components/FreshHero";
import FreshSkills from "./components/FreshSkills";
import FreshProjects from "./components/FreshProjects";
import FreshExperience from "./components/FreshExperience";
import FreshContact from "./components/FreshContact";
import FreshFooter from "./components/FreshFooter";
import ModernSiteStats from "./components/ModernSiteStats";
import "./fresh-styles.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <ClassicNavbar />

        <main>
          <FreshHero />
          <div className="section-divider"></div>
          <FreshSkills />
          <FreshProjects />
          <FreshExperience />
          <FreshContact />
        </main>

        <FreshFooter />
...
        {/* Stats badge */}
        <div className="stats-badge-container" style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 1000,
          transition: "all 0.3s ease"
        }}>
          <ModernSiteStats />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;