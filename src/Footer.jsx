import React from "react";
import "./Footer.css";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import Logo from "./assets/first.svg"; // Replace with your logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-section logo-section">
          <a href="/" className="footer-logo-link">
            <img src={Logo} alt="Company Logo" className="footer-logo" />
          </a>
          <p className="footer-text">
            Empowering your digital growth with innovative solutions worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li><FaMapMarkerAlt /> <a href="#">123 Main Street, City, Country</a></li>
            <li><FaPhoneAlt /> <a href="tel:+1234567890">+1 (234) 567-890</a></li>
            <li><FaEnvelope /> <a href="mailto:info@company.com">info@company.com</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h2>Subscribe</h2>
          <p>Get the latest updates and offers directly in your inbox.</p>
          <form className="footer-subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit" className="footer-btn">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
