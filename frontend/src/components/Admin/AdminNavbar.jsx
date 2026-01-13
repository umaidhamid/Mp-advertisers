import React from "react";

const AdminNavbar = ({ isMobile, onMenuClick }) => {
  return (
    <header
      style={{
        height: "60px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        gap: "12px",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {isMobile && (
        <button
          onClick={onMenuClick}
          style={{
            fontSize: "22px",
            background: "none",
            border: "1px solid #e5e7eb",
            borderRadius: "6px",
            padding: "4px 10px",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      )}

      <h2 style={{ fontSize: "18px", fontWeight: 600 }}>Dashboard</h2>
    </header>
  );
};

export default AdminNavbar;
