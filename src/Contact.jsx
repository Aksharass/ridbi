import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      {/* Main Heading & Text */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We’re here to help you. Get in touch with us via phone, email, or by
          sending a quick message using the form below.
        </p>
      </div>

      <div className="contact-wrapper">
        {/* LEFT PANEL - CONTACT INFO */}
        <div className="contact-panel contact-info-panel">
          <h2>Get in Touch</h2>
          <p className="contact-tagline">
            We’d love to hear from you. Reach out using any of the methods below.
          </p>

          <div className="info-card">
            <FaPhoneAlt className="info-icon" />
            <span>+91 98765 43210</span>
          </div>

          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <span>contact@yourmail.com</span>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <span>123 Business Street, Chennai, India</span>
          </div>
        </div>

        {/* RIGHT PANEL - CONTACT FORM */}
        <div className="contact-panel contact-form-panel">
          <h2>Send a Message</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-btn">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
