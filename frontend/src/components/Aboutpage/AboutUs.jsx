import React from "react";
import "./AboutPage.css";
import { Phone } from "lucide-react";
import Logo from "../../assets/Logo.png"
const AboutPage = () => {
  return (
    <div id="main">
      <div className="hero-container">
        <img src={Logo} alt="MP Advertisers Logo" className="hero-logo" />

        <h1 className="hero-title">MP ADVERTISERS</h1>
        <p className="hero-tagline">A Complete Printing Solution</p>

        <div className="hero-services">PRINTING | DESIGNING | ADVERTISING</div>
      </div>
      <h1 className="welcome">Thanks For Visit</h1>
      <div className="about-wrapper">

        {/* 7 Reasons Section */}
        <section className="reasons-wrapper">
          <h2 className="heading center">7 Reasons</h2>
          <p className="sub-title center">(Why MP Advertisers)</p>

          <div className="reasons-grid">
            <div className="reason-card">
              <h3>Marketing Professional Focus</h3>
              <p>
                We are not just a general print company. We give you confidence
                in print and project execution.
              </p>
            </div>

            <div className="reason-card">
              <h3>Rapid Response Service & Delivery</h3>
              <p>
                • Quotation within 3 hours <br />
                • Fast online ordering <br />
                • Job tracking <br />• Guaranteed production time lines
              </p>
            </div>

            <div className="reason-card">
              <h3>1 Stop Shop</h3>
              <p>
                From concept & design, print and delivery. 1 company = control +
                accountability + project execution.
              </p>
            </div>

            <div className="reason-card">
              <h3>Graphic Design</h3>
              <p>
                Equipped with the latest design software, our creative team
                transforms ideas into designs.
              </p>
            </div>

            <div className="reason-card">
              <h3>Dedicated Team</h3>
              <p>
                • In operation since 2015 <br />
                • Your success is our business <br />• Professional graphics
                designers
              </p>
            </div>

            <div className="reason-card">
              <h3>Pre-production Samples</h3>
              <p>
                • Digital hard copy samples for production <br />• Digital soft
                copy assurance proof
              </p>
            </div>

            <div className="reason-card">
              <h3>Print Management</h3>
              <p>
                From beginning to end, we handle the entire printing process and
                deliver a perfect final product.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Contact */}
      </div>
      <footer className="footer">
        <Phone size={20} />
        <span>9149455296</span>
      </footer>
    </div>
  );
};

export default AboutPage;
