import React, { useState } from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
const ContactUs = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    Address: "",
    message: "",
  });

  const [Loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.Address || !form.message) {
      return;
    }
    const phoneNumber = "9149455296"; // ✅ Add your number here (No + sign)
    const textMessage = `Hello, My Name is ${form.name}%0AEmail: ${form.Address}%0AMessage: ${form.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${textMessage}`;

    setTimeout(() => {
      setLoading(false);
      window.open(whatsappURL, "_blank");
    }, 1000);
  };

  return (
    <div className="contact-wrapper flex flex-col">
      <h1
        id="backbtn"
        onClick={(e) => {
          navigate("/Home");
        }}
      >
        back
      </h1>
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We’re here to support your brand. Let’s connect and grow together.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Details Card */}
        <div className="contact-card">
          <h2>MP Advertisers</h2>
          <p>Srinagar, Jammu & Kashmir, India</p>
          <p>
            <strong>Email:</strong> mpadvts@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +91 9149455296 | +91 9906951150
          </p>

          <div className="social-icons">
            <a href="https://www.facebook.com/share/1BqnLc5wBA/">
              <FontAwesomeIcon icon={faFacebook} size="4x" />
            </a>
            <a href="https://www.instagram.com/mpadvertisers?igsh=MXNoMXpqaWNpdmVzbA==">
              <FontAwesomeIcon icon={faInstagram} size="4x" />
            </a>
          </div>
        </div>

        {/* ✅ Updated Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Address"
            name="Address"
            value={form.Address}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Enter your message..."
            rows="5"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message on WhatsApp</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
