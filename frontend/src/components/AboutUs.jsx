import React from "react";
// import "./About.css"; // Create this CSS file
// import aboutImage from "../../assets/about-us.jpg"; // Replace with your image

const About = () => {
  return (
    <div className="about-section">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>
          MP Advertisers is a full-service digital advertising and branding agency. 
          We specialize in turning ideas into bold campaigns and helping brands connect with their audience.
        </p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            To provide creative and effective marketing solutions that drive measurable results for our clients.
          </p>

          <h2>Our Vision</h2>
          <p>
            To be the leading agency in India that combines creativity, technology, and strategy to help brands grow.
          </p>
        </div>

        <div className="about-image">
          {/* <img src={aboutImage} alt="About Us" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
