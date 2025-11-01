import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutUs from "../components/Aboutpage/AboutUs.jsx";
import Home from "../Home.jsx";
import Industries from "../components/Industries/Industries.jsx";
import ContactUs from "../components/ContactUs/ContactUs.jsx";
import Products from "../components/OverProducts/Products.jsx";
import LoginPage from "../components/Login/LoginPage.jsx";
import Dashboard from "../Dashboard/dashBoard.jsx";
import ProtectedRoutes from "../ProtectedRoute.jsx";
import Loader from "../loader/Loader.jsx";

const AppRoute = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/AdminLogin" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
