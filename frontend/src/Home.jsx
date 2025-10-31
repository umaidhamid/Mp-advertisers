import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main/Main.jsx";
import { useNavigate } from "react-router-dom";
import MapSection from "./components/Map/Map.jsx";
import { FaWhatsapp } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faClock } from "@fortawesome/free-solid-svg-icons";
import Slider from "./components/Work/Slider.jsx";

const App = () => {
  const navigate = useNavigate();
  return (
      <>
        <div style={{ position: "relative" }} className="overflow-hidden">
          <FaWhatsapp
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              padding: "5px",
              fontSize: "4rem",
              color: "white",
              cursor: "pointer",
              backgroundColor: "green",
              borderRadius: "50%",
              zIndex: "9000",
            }}
            onClick={() => window.open("https://wa.me/919149455296", "_blank")}
          />
          <Navbar />
          <div
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              background: "linear-gradient(90deg, #ff0000a7, #ff4d4d)",
              color: "white",
              padding: "8px 0",
              position: "relative",
              fontWeight: "600",
              fontSize: "18px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                animation: "scrollText 10s linear infinite",
              }}
            >
              <FontAwesomeIcon icon={faBullhorn} /> 🎉 50% OFF on Lightboards —
              Hurry Up! <FontAwesomeIcon icon={faClock} />
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
          <div
            style={{
              width: "100%",
              height: "8vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: "#f0f4f8", // subtle light background
            }}
          >
            <button
              style={{
                background: "linear-gradient(135deg, #6a11cb, #2575fc)", // gradient color
                padding: "15px 30px",
                color: "white",
                borderRadius: "12px 24px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.2)", // subtle shadow
                fontSize: "1.8rem",
                fontWeight: "600",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform =
                  "translateY(-3px) scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0) scale(1)")
              }
              onClick={(e) => {
                navigate("/Products");
              }}
            >
              View Products
            </button>
          </div>
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
            <section className="section-box ">
              <h2 className="heading pink">Mission</h2>
              <p>
                To make other brands great, giving them life through marketing.
              </p>
            </section>

            {/* Vision Section */}
            <section className="section-box dark-bg">
              <h2 className="heading pink">Vision</h2>
              <p>
                To be the preferred print and fulfillment partner to marketing
                managers, through consistency & reliability.
              </p>
            </section>

            {/* Purpose Section */}
            <section className="section-box">
              <h2 className="heading pink">Our Purpose</h2>
              <p>
                We exist to simplify and speed up the printing process to give
                you a hassle free experience.
              </p>
            </section>

            {/* Footer Contact */}
          </div>
          <MapSection />
        </div>
        <footer className="copywrite">
          <h2 className="CopywriteHeading">
            © {new Date().getFullYear()} Created and Developed by{" "}
            <span>Umaid Hamid</span>. All Rights Reserved.
          </h2>
        </footer>
      </>
  );
};

export default App;
