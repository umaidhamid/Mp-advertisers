import React from "react";
import { NavLink } from "react-router-dom";

const SIDEBAR_WIDTH = 230;

const AdminSidebar = ({ isMobile, open, closeSidebar }) => {
  const styles = {
    sidebar: {
      width: SIDEBAR_WIDTH,
      position: "fixed",
      top: 0,
      left: isMobile ? (open ? 0 : -SIDEBAR_WIDTH) : 0,
      height: "100vh",
      backgroundColor: "#ffffff",
      borderRight: "1px solid #e5e7eb",
      zIndex: 100,
      transition: "left 0.25s ease",
    },
    header: {
      padding: "16px",
      borderBottom: "1px solid #e5e7eb",
    },
    link: {
      display: "block",
      padding: "10px 12px",
      margin: "6px",
      borderRadius: "6px",
      textDecoration: "none",
      color: "#111827",
    },
    active: {
      background: "#f3f4f6",
      fontWeight: "600",
    },
    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.3)",
      zIndex: 90,
    },
  };

  return (
    <>
      {isMobile && open && (
        <div style={styles.overlay} onClick={closeSidebar} />
      )}

      <aside style={styles.sidebar}>
        <div style={styles.header}>
          <h3>Admin Panel</h3>
        </div>

        <NavLink
          to="/admin/products"
          onClick={closeSidebar}
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.active : {}),
          })}
        >
          🛒 Products
        </NavLink>

        <NavLink
          to="/admin/upload"
          onClick={closeSidebar}
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.active : {}),
          })}
        >
          ⬆️ Upload Products
        </NavLink>
        
        <NavLink
          to="/admin/message"
          onClick={closeSidebar}
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.active : {}),
          })}
        >
          📝 Message
        </NavLink>
        
        <NavLink
          to="/admin/gallery"
          onClick={closeSidebar}
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.active : {}),
          })}
        >
          📝 Gallery
        </NavLink>
      </aside>
    </>
  );
};

export default AdminSidebar;
