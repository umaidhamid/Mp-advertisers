import React from "react";
import "./AboutPage.css";
import { Phone } from "lucide-react";
import Logo from "../../assets/Logo.png";
import marketingImg from "../../assets/Images/Reasons/MARKETING-PROFESSIONAL.webp";
import rapidImg from "../../assets/Images/Reasons/RAPID-RESPONSE.webp";
import oneStopImg from "../../assets/Images/Reasons/ONE-STOP-SHOP.webp";
import graphicImg from "../../assets/Images/Reasons/GRAPHIC-DESIGN.webp";
import teamImg from "../../assets/Images/Reasons/DEDICATED-TEAM.webp";
import sampleImg from "../../assets/Images/Reasons/PRODUCTION-SAMPLE.webp";
import printImg from "../../assets/Images/Reasons/PRINT-MANAGEMENT.webp";

import shahid from "../../assets/Images/shahid sir.webp"; // add your owner images
import Owais from "../../assets/Images/OwaisBhat.webp"; // add your owner images
import { useNavigate } from "react-router-dom";
const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div id="main">
      <h1
        id="backbtn"
        onClick={(e) => {
          navigate("/Home");
        }}
      >
        back
      </h1>
      <div className="hero-container">
        <img src={Logo} alt="MP Advertisers Logo" className="hero-logo" />

        <h1 className="hero-title">MP ADVERTISERS</h1>
        <p className="hero-tagline">A Complete Printing Solution</p>

        <div className="hero-services">PRINTING | DESIGNING | ADVERTISING</div>
      </div>
      <h1 className="welcome">Thanks For Visiting</h1>
      <div className="about-wrapper">
        {/* About MP Advertisers */}
        <section className="section-box">
          <h2 className="heading  AboutHeading pink center">
            About MP Advertisers
          </h2>
          <p>
            MP Advertisers is a professional advertising and printing company
            established with the vision to deliver complete printing, branding,
            and design solutions under one roof. From concept to creation, we
            handle every detail with precision and creativity. Our mission is to
            help businesses stand out with impactful visuals, quality materials,
            and innovative designs. With years of experience and modern
            technology, we’ve become a trusted name for promotional printing,
            signage, flex boards, and more — helping brands bring their ideas to
            life.
          </p>
        </section>

        {/* Owners Section */}
        <section className="owners-section">
          <h2 className="heading pink center text-white">Our Founders</h2>
          <div className="owners-grid">
            <div className="owner-card">
              <img src={shahid} alt="Owner 1" className="owner-photo" />
              <h3 className="owner-name">Mr. Shahid Beigh</h3>
              <p className="owner-position">Founder & Managing Director</p>
              <p className="owner-bio">
                A highly accomplished IT professional with deep expertise in IT
                infrastructure, cloud integration, and sustainable technology
                innovation, Mr. Beigh established MP Advertisers with the vision
                of making advanced and affordable technological solutions
                accessible across Kashmir. Under his dynamic leadership, the
                company has not only built a strong reputation for reliability
                and excellence but has also forged meaningful collaborations
                with leading national and international organizations, driving
                digital transformation and long-term growth in the region.
              </p>
            </div>

            <div className="owner-card">
              <img src={Owais} alt="Owner 2" className="owner-photo" />
              <h3 className="owner-name">Mr. Owais Hamid</h3>
              <p className="owner-position">Co-Founder & Operations Head</p>
              <p className="owner-bio">
                With over twelve years of hands-on experience in graphic design,
                acrylic craftsmanship, and visual communication, Mr. Owais heads
                the creative division of MP Advertisers with unmatched passion
                and precision. His deep understanding of modern design trends,
                coupled with a strong sense of aesthetics and innovation, has
                been instrumental in shaping the company’s distinctive visual
                identity. Through his leadership, the creative team consistently
                delivers high-quality branding, advertising, and promotional
                solutions that not only reflect professionalism but also capture
                the essence of the client’s vision and brand story.
              </p>
            </div>
          </div>
        </section>

        {/* 7 Reasons Section */}
        <section className="reasons-wrapper">
          <h2 className="heading center">7 Reasons</h2>
          <p className="sub-title center">(Why MP Advertisers)</p>

          <div className="reasons-grid">
            <div className="reason-card">
              <img
                src={marketingImg}
                alt="Marketing Professional Focus"
                className="reason-icon"
              />
              <h3>Marketing Professional Focus</h3>
              <p>
                We are not just a general print company. We give you confidence
                in print and project execution.
              </p>
            </div>

            <div className="reason-card">
              <img
                src={rapidImg}
                alt="Rapid Response Service"
                className="reason-icon"
              />
              <h3>Rapid Response Service & Delivery</h3>
              <p>
                • Quotation within 3 hours <br />
                • Fast online ordering <br />
                • Job tracking <br />• Guaranteed production time lines
              </p>
            </div>

            <div className="reason-card">
              <img
                src={oneStopImg}
                alt="One Stop Shop"
                className="reason-icon"
              />
              <h3>1 Stop Shop</h3>
              <p>
                From concept & design, print and delivery. 1 company = control +
                accountability + project execution.
              </p>
            </div>

            <div className="reason-card">
              <img
                src={graphicImg}
                alt="Graphic Design"
                className="reason-icon"
              />
              <h3>Graphic Design</h3>
              <p>
                Equipped with the latest design software, our creative team
                transforms ideas into designs.
              </p>
            </div>

            <div className="reason-card">
              <img src={teamImg} alt="Dedicated Team" className="reason-icon" />
              <h3>Dedicated Team</h3>
              <p>
                • In operation since 2015 <br />
                • Your success is our business <br />• Professional graphics
                designers
              </p>
            </div>

            <div className="reason-card">
              <img
                src={sampleImg}
                alt="Pre-production Samples"
                className="reason-icon"
              />
              <h3>Pre-production Samples</h3>
              <p>
                • Digital hard copy samples for production <br />• Digital soft
                copy assurance proof
              </p>
            </div>

            <div className="reason-card">
              <img
                src={printImg}
                alt="Print Management"
                className="reason-icon"
              />
              <h3>Print Management</h3>
              <p>
                From beginning to end, we handle the entire printing process and
                deliver a perfect final product.
              </p>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <Phone size={20} />
        <span>9149455296</span>
      </footer>
    </div>
  );
};

export default AboutPage;
