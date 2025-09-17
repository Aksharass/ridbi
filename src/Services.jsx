import React from "react";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaCloud } from "react-icons/fa";
import "./Services.css";

const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description: "Building responsive, modern, scalable websites tailored to your business.",
    tech: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "Creating high-performance mobile apps with great UX for Android & iOS.",
    tech: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description: "Designing user-friendly, visually appealing interfaces for web & mobile.",
    tech: ["Figma", "Adobe XD", "Sketch", "Photoshop"],
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description: "Deploying scalable cloud solutions using AWS, Azure, and Google Cloud.",
    tech: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
  },
];

function Services() {
  return (
    <section className="services-section">
      {/* Hero */}
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>
          Delivering <span>innovative digital solutions</span> that help businesses
          grow globally.
        </p>
      </div>

      {/* Service Cards */}
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
            <div className="service-tech">
              {service.tech.map((techItem, i) => (
                <span key={i} className="tech-badge">{techItem}</span>
              ))}
            </div>
            <button className="service-btn">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
