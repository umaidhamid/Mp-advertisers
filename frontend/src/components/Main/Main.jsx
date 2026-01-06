import React, { useEffect } from "react";
// import video from "../../assets/icons/background.mp4";
import Heading from "../../assets/Images/MAIN PAGE LOGO.webp";
import "./Main.css";
const Main = () => {
  useEffect(() => {
    const videoElement = document.getElementById("bgVideo");
    if (videoElement) {
      videoElement.playbackRate = 0.7;
    }
  }, []);
  return (
    <div className="herosection relative ">
      <video
        className=" w-full h-full object-cover pointer-events-none "
        autoPlay
        loop
        muted
        src="./background.mp4"
      />
      <div className="headings absolute inset-0 z-50">
        <h2>Welcome </h2>
        <img src={Heading} alt="heading" />
        {/* <h1>Create. Advertise. Grow.</h1> */}
        <p>
          MP Advertisers is a full-service digital advertising and branding
          agency based in India. We specialize in turning ideas into bold
          campaigns, helping brands stand out and connect with their audience.
          Passionate about creativity, strategy, and measurable results — we
          make marketing simple, effective, and powerful.
        </p>
      </div>

      <div className="flex gap-4 items-center absolute z-50 bottom-30 left-1/2 -translate-x-1/2">
        <div
          style={{
            width: "100%",
            height: "8vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              background: "linear-gradient(135deg, #6a11cb, #2575fc)",
              padding: "10px 9px",
              color: "white",
              borderRadius: "12px 24px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
              fontSize: "1.5rem",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              animation: "slideIn 0.6s ease-out, pulse 2s ease-in-out infinite",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-3px) scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0) scale(1)")
            }
            onClick={() => navigate("/Products")}
          >
            View Products
          </button>

          {/* Inline CSS keyframes directly inside JSX */}
          <style>
            {`
      @keyframes slideIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes pulse {
        0% { transform: scale(1); box-shadow: 0 0 0 rgba(37, 117, 252, 0.4); }
        50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(37, 117, 252, 0.6); }
        100% { transform: scale(1); box-shadow: 0 0 0 rgba(37, 117, 252, 0.4); }
      }
    `}
          </style>
        </div>
        <div
          style={{
            marginTop: "10px",
            width: "100%",
            height: "8vh",
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
          }}
          className="whitespace-nowrap"
        >
          <button
            style={{
              background: "linear-gradient(135deg, #ff512f, #dd2476)",
              padding: "10px 20px",
              color: "white",
              borderRadius: "12px 24px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
              fontSize: "1.5rem",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              animation: "slideIn 0.6s ease-out, pulse 2s ease-in-out infinite",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-3px) scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0) scale(1)")
            }
            onClick={() =>
              window.open(
                "https://search.google.com/local/writereview?placeid=ChIJq8eu53OP4TgRzjXqcw52vrk",
                "_blank"
              )
            }
          >
            Rate Us On Google
          </button>

          <style>
            {`
      @keyframes slideIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes pulse {
        0% { transform: scale(1); box-shadow: 0 0 0 rgba(221, 36, 118, 0.4); }
        50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(221, 36, 118, 0.6); }
        100% { transform: scale(1); box-shadow: 0 0 0 rgba(221, 36, 118, 0.4); }
      }
    `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default Main;
