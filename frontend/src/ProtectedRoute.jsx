import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "./context/authContext"; // adjust path if needed

const ProtectedRoutes = () => {
  const { isAuth, loading } = useContext(AuthContext);

  // ⏳ Wait until auth check completes
  if (loading) {
    return null; // or <Loader />
  }

  return isAuth ? <Outlet /> : <Navigate to="/AdminLogin" replace />;
};

export default ProtectedRoutes;
