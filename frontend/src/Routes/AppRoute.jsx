import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../Home.jsx";
import AboutUs from "../components/Aboutpage/AboutUs.jsx";
import Industries from "../components/Industries/Industries.jsx";
import ContactUs from "../components/ContactUs/ContactUs.jsx";
import Products from "../components/OverProducts/Products.jsx";
import LoginPage from "../components/Login/LoginPage.jsx";
import Dashboard from "../Dashboard/dashBoard.jsx";
import Loader from "../loader/Loader.jsx";
import NotFound from "../components/NotFound.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import Test from "../Test.jsx";
import MainHome from "../home/MainHome.jsx";
import Gallery from "../Gallery/Gallery.jsx";
// import ScrollToTop from "./components/ScrollToTop";
import ScrollToTop from "../components/ScrollToTop.jsx";
const AppRoute = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* 🌍 PUBLIC ROUTES WITH LAYOUT */}
        <Route element={<MainLayout />}>
          <Route index element={<MainHome />} />
          <Route path="/home" element={<MainHome />} />
          {/* <Route path="/hero" element={<MainHome />} /> */}

          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>

        {/* 🔐 ADMIN ROUTES */}
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* ❌ 404 (ALWAYS LAST, OUTSIDE LAYOUT) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
