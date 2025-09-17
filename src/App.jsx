import React from "react";
import Navbar from "./Navbar";
import BannerCarousel from "./BannerCarousel";
import About from "./About";
import Testimonial from "./Testimonial";
import Services from "./Services";
import Stats from "../Stats";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <BannerCarousel />
      <About />
      <Services/>
      <Stats />
      <Testimonial />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
