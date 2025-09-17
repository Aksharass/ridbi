import React from "react";
import "./About.css";
import { FaCode, FaUsersCog, FaGlobe, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <section className="about-modern">
      {/* Section Header */}
      <div className="about-intro">
        <h2>Who We Are</h2>
        <p>
          We’re a <span>web development company</span> passionate about building
          scalable, user-friendly, and modern digital solutions that empower
          businesses worldwide.
        </p>
      </div>

      {/* Timeline / Journey */}
      <div className="about-timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2015 – The Beginning</h3>
            <p>
              Started as a small team of freelance developers delivering
              websites for local businesses.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2018 – Expansion</h3>
            <p>
              Grew into a full-fledged digital agency offering design,
              development, and consulting services.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2022 – Global Impact</h3>
            <p>
              Partnered with startups and enterprises across the globe, building
              products that reach millions of users.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="about-values">
        <div className="value-card">
          <FaCode className="value-icon" />
          <h4>Clean Code</h4>
          <p>Writing scalable, maintainable, and future-ready code.</p>
        </div>
        <div className="value-card">
          <FaUsersCog className="value-icon" />
          <h4>Collaboration</h4>
          <p>Working closely with clients to craft tailored solutions.</p>
        </div>
        <div className="value-card">
          <FaGlobe className="value-icon" />
          <h4>Global Reach</h4>
          <p>Helping businesses expand across borders with digital power.</p>
        </div>
        <div className="value-card">
          <FaLaptopCode className="value-icon" />
          <h4>Innovation</h4>
          <p>Always staying ahead with the latest tech stacks.</p>
        </div>
      </div>

      {/* Tech Stack Showcase */}
      <div className="about-tech">
        <h3>Our Tech Stack</h3>
        <div className="tech-badges">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>WordPress</span>
          <span>Next.js</span>
        </div>
      </div>
    </section>
  );
}

export default About;
