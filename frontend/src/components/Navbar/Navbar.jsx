import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../assets/icons/MAIN LOGO MP.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      icon: faFacebook,
      url: "https://www.facebook.com/share/1BqnLc5wBA/",
      color: "#1877f2",
      label: "Facebook",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/mpadvertisers?igsh=MXNoMXpqaWNpdmVzbA==",
      color: "#006effff",
      label: "Instagram",
    },
    {
      icon: faYoutube,
      url: "https://youtube.com/@mpadvertisers?si=0psLeH6DIbMC-weF",
      color: "#ff0000",
      label: "YouTube",
    },
    {
      icon: faEnvelope,
      url: "mailto:mpadvts@gmail.com",
      color: "#ffffff",
      label: "Email",
    },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      {/* Logo */}
      <div className="logo">
        <NavLink to="/" onClick={closeMenu}>
          <img src={logoImg} alt="Logo" />
        </NavLink>
      </div>  

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
      </button>

      {/* Navigation */}
      <nav className={isOpen ? "active" : ""}>
        <ul>
          {[
            { to: "/", label: "Home" },
            { to: "/AboutUs", label: "About Us" },
            { to: "/Products", label: "Products" },
            { to: "/industries", label: "Industries" },
            { to: "/Contact-Us", label: "Contact Us" },
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Social Icons */}
        <div className="mobile-social">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <FontAwesomeIcon
                icon={social.icon}
                size="1.5x"
                color={social.color}
              />
            </a>
          ))}
        </div>
      </nav>

      {/* Desktop Social Icons */}
      <div className="social-icons">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <FontAwesomeIcon
              icon={social.icon}
              size="sm"
              color={social.color}
            />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
