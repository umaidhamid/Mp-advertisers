import React, { useState } from "react";
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
      url: "https://www.instagram.com/mpadvertisers",
      color: "#006eff",
      label: "Instagram",
    },
    {
      icon: faYoutube,
      url: "https://youtube.com/@mpadvertisers",
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
    <>
      {/* ===== DESKTOP NAVBAR ===== */}
      <header className="desktop-navbar">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/">
            <img src={logoImg} alt="Logo" />
          </NavLink>
        </div>

        {/* Navigation */}
        <nav>
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
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
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

      {/* ===== MOBILE NAV ===== */}
      <div className="mobile-navbar">
        <MobileBubbleNav />
      </div>
    </>
  );
};

export default Navbar;
