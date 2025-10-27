import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main/Main.jsx";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden">
      <Navbar />
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
            (e.currentTarget.style.transform = "translateY(-3px) scale(1.05)")
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
    </div>
  );
};

export default App;
