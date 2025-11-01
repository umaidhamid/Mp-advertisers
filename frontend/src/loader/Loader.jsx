// Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(to bottom, #211550 0%, #58266c 50%, #7a2d78 100%)",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          border: "6px solid #ccc",
          borderTopColor: "#007bff", // blue color
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
