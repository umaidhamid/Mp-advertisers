import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../assets/Logo.png";
import fbIcon from "../../assets/facebook.webp";
import instaIcon from "../../assets/instagram.webp";

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
                navigate("/AboutUs");
              }}
            >
            Clients
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
              Contact
            </button>
          </li>
        </ul>
      </nav>

      <div className="social-icons">
        <a href="#">
          <img src={fbIcon} alt="Facebook" />
        </a>
        <a href="#">
          <img src={instaIcon} alt="Instagram" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
