import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialNav = () => {
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
      color: "#E4405F",
      label: "Instagram",
    },
    {
      icon: faYoutube,
      url: "https://youtube.com/@mpadvertisers?si=0psLeH6DIbMC-weF",
      color: "#FF0000",
      label: "YouTube",
    },
    {
      icon: faEnvelope,
      url: "mailto:mpadvts@gmail.com",
      color: "#ffffff",
      label: "Email",
    },
  ];

  // ✅ Inline style object
  const style = {
    socialContainer: {
      width: "100%",
        // background: "linear-gradient(to right, purple, pink)",
      backgroundColor: "black",
      display: "flex",
      justifyContent: "center",
      padding: "10px 10px",
      gap:"15px"
    },
    icons: {
    //   padding: "20px",
    //   width:"10px",
      transition: "transform 0.3s ease, opacity 0.3s ease",
    },
  };

  return (
    <div style={style.socialContainer}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          style={style.icons}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.25)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <FontAwesomeIcon icon={social.icon} size="3x" color={social.color} />
        </a>
      ))}
    </div>
  );
};

export default SocialNav;
