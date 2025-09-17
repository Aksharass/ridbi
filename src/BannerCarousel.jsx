import React from "react";
import bgImage from "./assets/BG-4.jpg"; // Ensure this path is correct
import "./BannerCarousel.css";

function Banner() {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="banner-content">
        <h1>Welcome to Our Website</h1>
        <p>
          Discover our amazing services and grow your business with us. 
          We provide top-notch solutions for your success.
        </p>
        <button className="banner-btn">Get Started</button>
      </div>
    </section>
  );
}

export default Banner;
