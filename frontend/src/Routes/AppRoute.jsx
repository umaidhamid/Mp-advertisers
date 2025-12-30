import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../Home.jsx";
import AboutUs from "../components/Aboutpage/AboutUs.jsx";
import Industries from "../components/Industries/Industries.jsx";
import ContactUs from "../components/ContactUs/ContactUs.jsx";
import Products from "../components/OverProducts/Products.jsx";
import LoginPage from "../components/Login/LoginPage.jsx";
import Dashboard from "../Dashboard/dashBoard.jsx";
import ProtectedRoutes from "../ProtectedRoute.jsx";
import Loader from "../loader/Loader.jsx";
import NotFound from "../components/NotFound.jsx";
import MainLayout from "../layouts/MainLayout.jsx";

const AppRoute = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <Routes>
        {/* 🌍 PUBLIC ROUTES WITH NAVBAR */}
        <Route element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/AdminLogin" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
