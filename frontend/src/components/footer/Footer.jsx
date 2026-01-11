import React from "react";
import FooterCanvas from "./FooterCanvas";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import MapSection from "../../components/Map/Map.jsx";

export default function Footer() {
  const year = 2025;

  const styles = {
    footer: {
      position: "relative",
      backgroundColor: "#000",
      color: "#d1d5db",
      overflow: "hidden",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
    },

    accentLine: {
      width: "100%",
      height: "2px",
      background: "linear-gradient(90deg, #2563eb, #6366f1, #a855f7)",
    },

    canvasBg: {
      position: "absolute",
      inset: 0,
      opacity: 0.22,
      pointerEvents: "none",
    },

    overlay: {
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.65)",
      backdropFilter: "blur(8px)",
    },

    content: {
      position: "relative",
      zIndex: 10,
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "48px 20px", // ⬇ reduced height
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "32px", // ⬇ reduced gap
    },

    title: {
      fontSize: "20px", // ⬇ slightly smaller
      fontWeight: 600,
      color: "#ffffff",
      marginBottom: "12px",
    },

    text: {
      fontSize: "14px",
      lineHeight: 1.6, // ⬇ tighter
      color: "#9ca3af",
    },

    infoRow: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "14px",
      marginTop: "6px",
      color: "#d1d5db",
    },

    list: {
      // listStyle: "none",  paddingLeft: "20px",
      listStyleType: "disc",
      padding: 0,
      margin: 0,
      fontSize: "14px",
      color: "#9ca3af",
    },

    listItem: {
      marginBottom: "8px", // ⬇ reduced
    },

    map: {
      width: "100%",
      height: "160px", // ⬇ reduced
      borderRadius: "12px",
      border: "1px solid rgba(255,255,255,0.1)",
      filter: "grayscale(100%)",
    },

    socials: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
    },

    socialBtn: {
      width: "40px", // ⬇ slightly smaller
      height: "40px",
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#d1d5db",
      cursor: "pointer",
      transition: "all 0.25s ease",
    },

    bottomBar: {
      position: "relative",
      zIndex: 10,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      padding: "14px",
      textAlign: "center",
      fontSize: "12px", // ⬇ smaller
      color: "#9ca3af",
    },

    developer: {
      color: "#ffffff",
      fontWeight: 500,
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.accentLine} />

      {/* 3D Background */}
      <div style={styles.canvasBg}>
        <FooterCanvas />
      </div>

      {/* Glass Overlay */}
      <div style={styles.overlay} />

      {/* Content */}
      <div style={styles.content}>
        {/* Company Info */}
        <div>
          <h3 style={styles.title}>MP Advertisers</h3>
          <p style={styles.text}>
            Premium printing & advertising solutions delivering bold visuals,
            strong branding, and lasting impressions.
          </p>

          <div style={{ marginTop: "20px" }}>
            <div style={styles.infoRow}>
              <MapPin size={36} color="red" />
             1st Floor Bhat Complex, Aribagh Stop, Nowgam, Srinagar J&K - 19001
            </div>
            <div style={styles.infoRow}>
              <Phone size={26} /> +91 9149455296 || +91 9796951150
            </div>
            <div style={styles.infoRow}>
              <Mail size={26} /> mpadtvs@gmail.com
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 style={styles.title}>Services</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Flex & Banner Printing</li>
            <li style={styles.listItem}>Offset & Digital Printing</li>
            <li style={styles.listItem}>Brand Identity Design</li>
            <li style={styles.listItem}>Sticker & Label Printing</li>
            <li style={styles.listItem}>Outdoor Advertising</li>
          </ul>
        </div>

        {/* Map */}
        {/* <div>
          <h4 style={styles.title}>Find Us</h4>
          <iframe
            title="company-map"
            src="https://www.google.com/maps?q=Kashmir%20India&output=embed"
            loading="lazy"
            style={styles.map}
          />
        </div> */}
        <MapSection />
        {/* Social Media */}
        <div>
          <h4 style={styles.title}>Connect With Us</h4>
          <div style={styles.socials}>
            {[Facebook, Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
              <div
                key={i}
                style={styles.socialBtn}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.15)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.color = "#d1d5db";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                }}
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        © {year} MP Advertisers. All rights reserved.
        <br />
        Designed & developed by{" "}
        <span style={styles.developer}>Umaid Hamid</span>
      </div>
    </footer>
  );
}
