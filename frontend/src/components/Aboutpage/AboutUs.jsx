import React from "react";
import { motion } from "framer-motion";
import { Phone, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/Logo.png";
import marketingImg from "../../assets/Images/Reasons/MARKETTING PROFESSIONAL.webp";
import rapidImg from "../../assets/Images/Reasons/RAPID RESPONSE.webp";
import oneStopImg from "../../assets/Images/Reasons/ONE STOP SHOP.webp";
import graphicImg from "../../assets/Images/Reasons/GRAPHIC DESIGN.webp";
import teamImg from "../../assets/Images/Reasons/DEDICATED TEAM.webp";
import sampleImg from "../../assets/Images/Reasons/PRODUCTION SAMPLE.webp";
import printImg from "../../assets/Images/Reasons/PRINT MANAGEMENT.webp";

import shahid from "../../assets/Images/shahid sir.webp";
import Owais from "../../assets/Images/OwaisBhat.webp";

const reasons = [
  {
    img: marketingImg,
    title: "Marketing Professional Focus",
    desc: "Confidence in print and project execution.",
  },
  {
    img: rapidImg,
    title: "Rapid Response Service",
    desc: "Fast quotes, tracking & guaranteed timelines.",
  },
  {
    img: oneStopImg,
    title: "One Stop Shop",
    desc: "From concept to delivery with full accountability.",
  },
  {
    img: graphicImg,
    title: "Graphic Design",
    desc: "Modern tools turning ideas into visuals.",
  },
  {
    img: teamImg,
    title: "Dedicated Team",
    desc: "Experienced professionals focused on success.",
  },
  {
    img: sampleImg,
    title: "Production Samples",
    desc: "Pre-production digital assurance.",
  },
  {
    img: printImg,
    title: "Print Management",
    desc: "End-to-end print handled perfectly.",
  },
];

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#0b0b14",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
      }}
    >

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <motion.img
          src={Logo}
          alt="MP Advertisers"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{ width: 130, marginBottom: 24 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: "3.5rem",
            fontWeight: 800,
            background: "linear-gradient(90deg,#a855f7,#ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          MP ADVERTISERS
        </motion.h1>

        <p style={{ marginTop: 16, fontSize: 18, color: "#cbd5f5" }}>
          A Complete Printing Solution
        </p>

        <div
          style={{
            marginTop: 20,
            letterSpacing: 2,
            fontSize: 14,
            color: "#9ca3af",
          }}
        >
          PRINTING • DESIGNING • ADVERTISING
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 24 }}
        >
          About MP Advertisers
        </motion.h2>

        <p style={{ fontSize: 18, lineHeight: 1.8, color: "#d1d5db" }}>
          MP Advertisers is a professional advertising and printing company
          delivering complete branding and printing solutions under one roof.
          From concept to creation, we help businesses stand out through
          quality, creativity, and innovation.
        </p>
      </section>

      {/* FOUNDERS */}
      <section
        style={{
          background: "linear-gradient(135deg,#681ca1,#aa31e4)",
          padding: "90px 24px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: 60,
          }}
        >
          Our Founders
        </h2>

        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gap: 40,
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          }}
        >
          {[
            {
              img: shahid,
              name: "Mr. Shahid Beigh",
              role: "Founder & Managing Director",
              bio: "Visionary leader driving innovation, technology, and long-term growth.",
            },
            {
              img: Owais,
              name: "Mr. Owais Hamid",
              role: "Co-Founder & Operations Head",
              bio: "Creative expert with 12+ years in design and branding excellence.",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              style={{
                background: "rgba(0,0,0,0.35)",
                borderRadius: 28,
                padding: 32,
                textAlign: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <img
                src={p.img}
                alt={p.name}
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: 20,
                }}
              />
              <h3 style={{ fontSize: 20, fontWeight: 600 }}>{p.name}</h3>
              <p style={{ color: "#f472b6", marginBottom: 12 }}>{p.role}</p>
              <p style={{ color: "#e5e7eb", lineHeight: 1.6 }}>{p.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REASONS */}
      <section
        style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: 700,
            marginBottom: 70,
          }}
        >
          7 Reasons{" "}
          <span style={{ color: "#ec4899" }}>(Why MP Advertisers)</span>
        </h2>

        <div
          style={{
            display: "grid",
            gap: 40,
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          }}
        >
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12 }}
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: 24,
                padding: 36,
                textAlign: "center",
              }}
            >
              <img
                src={r.img}
                alt={r.title}
                style={{ width: 80, marginBottom: 24 }}
              />
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>
                {r.title}
              </h3>
              <p style={{ color: "#cbd5f5", lineHeight: 1.6 }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#000",
          padding: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          color: "#d1d5db",
        }}
      >
        <Phone size={18} /> 9149455296
      </footer>
    </div>
  );
};

export default AboutPage;
