import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/Admin/AdminNavbar";
import AdminSidebar from "../components/Admin/AdminSidebar";
import api from "../api/axios.js";
const SIDEBAR_WIDTH = 230;

const AdminLayout = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [selected, setSelected] = useState(true);
  const navigate = useNavigate();
  // Check authentication from server cookie
  useEffect(() => {
    api
      .get("/api/owners/checkAuth", {
        withCredentials: true,
      })
      .then((res) => {
        setIsAuth(res.data.isAuthenticated); // Example: backend should return { isAuthenticated: true/false }
      })
      .catch(() => {
        setIsAuth(false);
        navigate("/Home");
      });
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar
        isMobile={isMobile}
        open={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      <div
        style={{
          marginLeft: isMobile ? 0 : SIDEBAR_WIDTH,
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AdminNavbar
          isMobile={isMobile}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main style={{ flex: 1, padding: "16px", overflowY: "auto" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
