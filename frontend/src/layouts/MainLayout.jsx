import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      {/* <h2
        className="CopywriteHeading"
        style={{
          marginTop: "30px",
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
        © {new Date().getFullYear()} Created and Developed by{" "}
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
            fontSize: "0.8rem",
            color: "#d1d5db",
          }}
        >
          📍 Mumbai, Maharashtra, India
        </span>
      </h2> */}
    </div>
  );
};

export default MainLayout;
