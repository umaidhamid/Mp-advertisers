import React, { useState } from "react";
import "./ContactUs.css";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [Loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email!");
      return;
    }
    const loadingToast = toast.loading("Preparing WhatsApp...");

    const phoneNumber = "9149455296"; // ✅ Add your number here (No + sign)
    const textMessage = `Hello, My Name is ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${textMessage}`;

    setTimeout(() => {
      toast.dismiss(loadingToast);
      setLoading(false);
      toast.success("Redirecting to WhatsApp...");
      window.open(whatsappURL, "_blank");
    }, 2000);
  };

  return (
    <div className="contact-wrapper flex flex-col">
      <Toaster position="top-right" />
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
            <strong>Email:</strong> support@mpadvertisers.com
          </p>
          <p>
            <strong>Phone:</strong> +91 98765 43210
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
            type="email"
            placeholder="Email Address"
            name="email"
            value={form.email}
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
