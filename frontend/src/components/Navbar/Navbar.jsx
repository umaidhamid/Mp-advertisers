import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../assets/icons/MAIN LOGO MP.webp";
import MobileBubbleNav from "../MobileBubbleNav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/AboutUs", label: "About Us" },
    { to: "/Products", label: "Products" },
    { to: "/industries", label: "Industries" },
    { to: "/gallery", label: "Gallery" },
    { to: "/Contact-Us", label: "Contact Us" },
  ];

  const socialLinks = [
    {
      icon: faFacebook,
      url: "https://www.facebook.com/share/1BqnLc5wBA/",
      color: "#1877f2",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/mpadvertisers",
      color: "#e1306c",
    },
    {
      icon: faYoutube,
      url: "https://youtube.com/@mpadvertisers",
      color: "#ff0000",
    },
    { icon: faEnvelope, url: "mailto:mpadvts@gmail.com", color: "#ffffff" },
  ];

  return (
    <>
      {/* ===== DESKTOP NAVBAR ===== */}
      <header className="desktop-navbar text-white">
        {/* Logo */}
        <NavLink to="/" className="logo">
          <img src={logoImg} alt="MP Advertisers Logo" />
        </NavLink>

        {/* Navigation */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="social-icons">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </header>

      {/* ===== MOBILE NAV ===== */}
      <div className="mobile-navbar">
        <MobileBubbleNav />
      </div>
    </>
  );
};

export default Navbar;
