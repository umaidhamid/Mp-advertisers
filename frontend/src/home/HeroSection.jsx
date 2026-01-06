import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Volume2, VolumeX, Moon, Sun } from "lucide-react";
import Heading from "../assets/Images/MAIN PAGE LOGO.webp";

const HeroSection = () => {
  const navigate = useNavigate();

  const [muted, setMuted] = useState(true);
  const [isNight, setIsNight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 📱 Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🎥 Video / Image Background */}
      {!isMobile ? (
        <video
          key={isNight ? "night" : "day"}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted={muted}
          playsInline
          preload="metadata"
          loading="lazy"
          src={isNight ? "/night.mp4" : "/background.mp4"}
        />
      ) : (
        <img
          src="/hero-mobile.webp"
          alt="Hero background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 🔘 Controls */}
      <div className="absolute top-5 right-5 z-50 flex gap-3">
        <button
          onClick={() => setMuted((p) => !p)}
          className="p-2 bg-black/60 rounded-full text-white hover:scale-110 transition"
        >
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>

        <button
          onClick={() => setIsNight((p) => !p)}
          className="p-2 bg-black/60 rounded-full text-white hover:scale-110 transition"
        >
          {isNight ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* 🧠 Content */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 1.5rem",
          color: "#ffffff",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Welcome */}
        <motion.h2
          style={{
            fontSize: "2.2rem",
            letterSpacing: "0.15em",
            marginBottom: "0.75rem",
            fontWeight: 500,
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Welcome
        </motion.h2>

        {/* Logo */}
        <motion.img
          src={Heading}
          alt="MP Advertisers Logo"
          loading="lazy"
          style={{
            width: "18rem",
            maxWidth: "90%",
            marginBottom: "1.5rem",
          }}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        />

        {/* Description */}
        <motion.p
          style={{
            maxWidth: "72rem",
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: "#e5e7eb",
            marginBottom: "2.8rem",
            padding: "0 0.5rem",
          }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          MP Advertisers is a full-service digital advertising and branding
          agency based in India. We turn ideas into bold campaigns that help
          brands stand out and grow with measurable results.
        </motion.p>

        {/* Buttons */}
        <motion.div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2.2rem",
            justifyContent: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {/* View Products */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/Products")}
            style={{
              padding: "1rem 2.5rem",
              fontSize: "1.05rem",
              fontWeight: 600,
              borderRadius: "0.9rem",
              background: "linear-gradient(135deg, #4f46e5, #3b82f6)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
            }}
          >
            View Products
          </motion.button>

          {/* Rate Us */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                "https://search.google.com/local/writereview?placeid=ChIJq8eu53OP4TgRzjXqcw52vrk",
                "_blank"
              )
            }
            style={{
              padding: "1rem 2.5rem",
              fontSize: "1.05rem",
              fontWeight: 600,
              borderRadius: "0.9rem",
              background: "linear-gradient(135deg, #ec4899, #ef4444)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
            }}
          >
            Rate Us on Google
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
