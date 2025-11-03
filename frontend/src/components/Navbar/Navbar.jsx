import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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

  return (
    <header>
      <div className="logo">
        <img src={logoImg} alt="Logo" onClick={() => navigate("/")} />
      </div>

      {/* Hamburger Button */}
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
          <li>
            <button
              className="nav-link"
              onClick={() => {
                setIsOpen(false);
                navigate("/");
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => {
                setIsOpen(false);
                navigate("/AboutUs");
              }}
            >
              About Us
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => {
                setIsOpen(false);
                navigate("/Products");
              }}
            >
              Products
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => {
                setIsOpen(false);
                navigate("/industries");
              }}
            >
              Industries
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => {
                setIsOpen(false);
                navigate("/Contact-Us");
              }}
            >
              Contact Us 
            </button>
          </li>
        </ul>

        {/* Social icons in mobile menu */}
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
              size="lg"
              color={social.color}
            />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
