import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main/Main.jsx";
import { useNavigate } from "react-router-dom";
import MapSection from "./components/Map/Map.jsx";
import { FaWhatsapp } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faClock } from "@fortawesome/free-solid-svg-icons";
import Slider from "./components/Work/Slider.jsx";
import { useState } from "react";
import { useEffect } from "react";
import api from "./api/axios.js";
import RotatingText from "../animation/RotatingText.jsx";
const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await api.get("/api/product/getmessage");
        if (response.data.success) {
          setMessage(response.data.latestMessage.message);
        }
      } catch (error) {
        console.error("❌ Error fetching message:", error);
      }
    };

    fetchMessage();
  }, []); // ✅ Run only once on mount
  const navigate = useNavigate();
  return (
    <>
      <div style={{ position: "relative" }} className="overflow-hidden">
        <FaWhatsapp
          style={{
            position: "fixed",
            bottom: "10px",
            left: "10px",
            padding: "1px",
            fontSize: "3rem",
            color: "white",
            cursor: "pointer",
            backgroundColor: "green",
            borderRadius: "50%",
            zIndex: "9000",
          }}
          onClick={() => window.open("https://wa.me/919149455296", "_blank")}
        />
        {/* <Navbar /> */}
        <div
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            // background: "linear-gradient(90deg, #ff0000a7, #ff4d4d)",
            color: "white",
            padding: "8px 0",
            position: "relative",
            fontWeight: "600",
            fontSize: "18px",

            backgroundColor: "grey",
          }}
        >
          <div
            style={{
              display: "inline-block",
              animation: "scrollText 10s linear infinite",
            }}
          >
            <FontAwesomeIcon icon={faBullhorn} />
            {message}
            <FontAwesomeIcon icon={faClock} />
          </div>

          <style>
            {`
      @keyframes scrollText {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
        
    `}
          </style>
        </div>
        <Main />
        {/* product btn  */}
      
        <div
          style={{
            width: "100%",
          }}
          className="about-wrapper"
        >
          <section className="slider ">
            <Slider />
          </section>
          {/* Mission Section */}
          <div className=" flex items-center bg-black justify-center text-5xl font-bold h-[100px] relative z-10">
            <RotatingText
              texts={[
                "Your Brand, Printed to Perfection.",
                "Make Your Brand Impossible to Ignore.",
                "Where Your Brand Meets Perfect Print.",
                "Your Brand, Seen Everywhere.",
                "We don’t just print designs",
                "we build brand identity.",
              ]}
              rotationInterval={2000}
              staggerDuration={0.02}
              mainClassName="
    text-center
    text-white
    font-semibold
    leading-tight
    max-w-[90%]
    mx-auto

    text-xl
    sm:text-2xl
    md:text-4xl
    lg:text-5xl
    xl:text-6xl
  "
              elementLevelClassName="
    inline-block
    bg-gradient-to-r
    from-indigo-400
    via-purple-500
    to-pink-500
    bg-clip-text
    text-transparent
  "
            />
          </div>
          <section className="section-box relative z-10 w-[100vw] ">
            <h2 className="heading pink">Mission</h2>
            <p>
              To make other brands great, giving them life through marketing.
            </p>
          </section>

          {/* Vision Section */}
          <section className="section-box dark-bg relative z-10  ">
            <h2 className="heading pink">Vision</h2>
            <p>
              To be the preferred print and fulfillment partner to marketing
              managers, through consistency & reliability.
            </p>
          </section>

          {/* Purpose Section */}
          <section className="section-box relative z-10">
            <h2 className="heading pink">Our Purpose</h2>
            <p>
              We exist to simplify and speed up the printing process to give you
              a hassle free experience.
            </p>
          </section>

          {/* Footer Contact */}
        </div>
        <MapSection />
      </div>
      <footer className="relative z-10">
        <h2
          className="CopywriteHeading"
          style={{
            // marginTop: "30px",
            padding: "14px 20px",
            width: "100%",
            textAlign: "center",
            fontSize: "0.9rem",
            fontWeight: 500,
            color: "#e5e7eb",
            background: "rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(6px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            letterSpacing: "0.3px",
            lineHeight: "1.6",
          }}
        >
          © 2025 Created and Developed by{" "}
          <span
            style={{
              color: "#ff66c4",
              fontWeight: 600,
            }}
          >
            Umaid Hamid
          </span>
          . All Rights Reserved.
          <br />
          <span
            style={{
              display: "block",
              marginTop: "6px",
              padding: "1px",
              fontSize: "0.8rem",
              color: "#d1d5db",
            }}
          >
            📍 Aaribagh Stop, B.K Pora, Nowgam, Srinagar, Jammu and Kashmir,
            India - 190015
          </span>
        </h2>
      </footer>
    </>
  );
};

export default App;
