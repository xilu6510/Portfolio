import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section-title skill-section-title">
        - Skills & Certifications
      </h2>
      <div className="skill-certification skill-container">
        <div className="container-big">
          <div className="skill-list">
            <p className="skills-title">Languages:</p>
            <p clssName="skill-item">JavaScript, Java</p>
          </div>

          <div className="skill-list">
            <p className="skills-title">Front-end:</p>
            <p clssName="skill-item">
              JavaScript ES6+, React, HTML5, CSS3, SASS, Styled-component,
              Material-UI, BootStrap
            </p>
          </div>

          <div className="skill-list">
            <p className="skills-title">Testing:</p>
            <p clssName="skill-item">Cypress</p>
          </div>

          <div className="skill-list">
            <p className="skills-title">Databases:</p>
            <p clssName="skill-item">MySQL, MongoDB, Firebase</p>
          </div>

          <div className="skill-list">
            <p className="skills-title">Tooling:</p>
            <p clssName="skill-item">
              Git, Github, NPM, JIRA, Confluence, Postman, Figma
            </p>
          </div>

          <div className="skill-list">
            <p className="skills-title">Methodologies:</p>
            <p clssName="skill-item">Agile</p>
          </div>

          <div className="skill-list">
            <p className="skills-title">Google:</p>
            <p clssName="skill-item">Google Analytics, Google Search Console</p>
          </div>

          <div className="skill-list">
            <p className="skills-title">CMS:</p>
            <p clssName="skill-item">
              WordPress, Wix, Webflow, Shopify, Salesforce
            </p>
          </div>
        </div>
        <div className="certification">
          <a href="https://freecodecamp.org/certification/luuuuuxi_/responsive-web-design">
            <p className="certi-title">- Responsive Web Design</p>
            <p className="certi-desc">
              <i className="fa-brands fa-free-code-camp"></i> freeCodeCamp
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
