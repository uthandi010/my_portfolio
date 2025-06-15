import React from "react";
import "../new-styles.css";

// Import skill logos
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
import mauilogo from "../assets/maui.png";
import sqllogo from "../assets/sql.png";
import angularlogo from "../assets/angular.png";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-description">
        Here are some of the technologies and tools I work with to build modern applications.
      </p>

      <div className="skills-container">
        {/* First Row - Frontend & Backend */}
        <div className="skills-row">
          {/* Frontend Skills */}
          <div className="skills-group">
            <h3 className="skills-heading">Front-End</h3>
            <div className="skills-list">
              <div className="skill-box"><img src={htmlLogo} alt="HTML" /> HTML</div>
              <div className="skill-box"><img src={cssLogo} alt="CSS" /> CSS</div>
              <div className="skill-box"><img src={jsLogo} alt="JavaScript" /> JavaScript</div>
              <div className="skill-box"><img src={angularlogo} alt="Vue.js" /> Angular</div>
              <div className="skill-box"><img src={reactLogo} alt="React" /> React</div>
              <div className="skill-box"><img src={vueLogo} alt="Vue.js" /> Vue.js</div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="skills-group">
            <h3 className="skills-heading">Back-End</h3>
            <div className="skills-list">
              <div className="skill-box"><img src={rubyLogo} alt="Ruby on Rails" /> Ruby on Rails</div>
              <div className="skill-box"><img src={pythonLogo} alt="Python" /> Python</div>
              <div className="skill-box"><img src={dotNetLogo} alt=".NET" /> .NET</div>
              <div className="skill-box"><img src={mauilogo} alt=".NET" /> MAUI</div>
              <div className="skill-box"><img src={sqllogo} alt=".NET" /> SQL</div>
            </div>
          </div>
        </div>

        {/* Second Row - Other Tools */}
        <div className="skills-row single">
          <div className="skills-group">
            <h3 className="skills-heading">Other Tools</h3>
            <div className="skills-list">
              <div className="skill-box"><img src={gitLogo} alt="Git" /> Git</div>
              <div className="skill-box"><img src={vscodeLogo} alt="VS Code" /> VS Code</div>
              <div className="skill-box"><img src={githubLogo} alt="GitHub" /> GitHub</div>
              <div className="skill-box"><img src={netlifyLogo} alt="Netlify" /> Netlify</div>
              <div className="skill-box"><img src={chromeDevLogo} alt="Chrome DevTools" /> Chrome DevTools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
