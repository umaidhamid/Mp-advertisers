import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutUs from "../components/Aboutpage/AboutUs.jsx";
import Home from "../Home.jsx";
import Industries from "../components/Industries/Industries.jsx";
import ContactUs from "../components/ContactUs/ContactUs.jsx";
import Products from "../components/OverProducts/Products.jsx";
import LoginPage from "../components/Login/LoginPage.jsx";
import Dashboard from "../components/Dashboard/dashBoard.jsx";
import ProtectedRoutes from "../ProtectedRoute.jsx";
import { AuthProvider } from "../context/authContext.jsx";

const AppRoute = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/AdminLogin" element={<LoginPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashBoard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRoute;
