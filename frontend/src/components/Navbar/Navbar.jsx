import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../assets/icons/MAIN LOGO MP.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header>
      <div className="logo">
        <img src={logoImg} alt="Logo" />
      </div>

      {/* ✅ Hamburger Button */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          "X"
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </div>

      {/* ✅ Slide Menu for Mobile */}
      <nav className={isOpen ? "active" : ""}>
        <ul>
          <li>
            <button
              className="nav-link"
              onClick={() => {
                setIsOpen(false);
                navigate("/Home");
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
              Contact
            </button>
            <button
              className="nav-link"
              onClick={() => {
                setIsOpen(false);
                navigate("/dashboard");
              }}
            >
              DashBoard
            </button>
          </li>
        </ul>
      </nav>

      <div className="social-icons">
        <a href="https://www.facebook.com/share/1BqnLc5wBA/">
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        <a href="https://www.instagram.com/mpadvertisers?igsh=MXNoMXpqaWNpdmVzbA==">
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
