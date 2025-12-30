import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #2e1065, #1e1b4b, #020617)",
    padding: "20px",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "420px",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(16px)",
    borderRadius: "18px",
    padding: "48px 36px",
    boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#ede9fe",
  };

  const codeStyle = {
    fontSize: "96px",
    fontWeight: "800",
    color: "#c084fc",
    letterSpacing: "6px",
    margin: 0,
  };

  const titleStyle = {
    fontSize: "26px",
    fontWeight: "600",
    marginTop: "10px",
    marginBottom: "12px",
  };

  const textStyle = {
    fontSize: "14px",
    color: "#ddd6fe",
    lineHeight: "1.6",
  };

  const buttonStyle = {
    display: "inline-block",
    marginTop: "30px",
    padding: "12px 30px",
    borderRadius: "30px",
    backgroundColor: "#a855f7",
    color: "#1e1b4b",
    fontWeight: "600",
    textDecoration: "none",
    transition: "all 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={codeStyle}>404</h1>

        <h2 style={titleStyle}>Page Not Found</h2>

        <p style={textStyle}>
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          style={buttonStyle}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "#9333ea")
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = "#a855f7")
          }
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
