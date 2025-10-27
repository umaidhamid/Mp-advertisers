import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutUs from "../components/Aboutpage/AboutUs.jsx";
import Home from "../Home.jsx";
import Industries from "../components/Industries/Industries.jsx";
import ContactUs from "../components/ContactUs/ContactUs.jsx";
import Products from "../components/OverProducts/Products.jsx";
const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
        <Route path="/Products" element={<Products />} />

        {/* <Route element={<ProtectedRoutes />}> */}
        {/* <Route path="/home" element={<Home />} /> */}
        {/* </Route> */}

        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="*" element={<div>Not Found 404</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
