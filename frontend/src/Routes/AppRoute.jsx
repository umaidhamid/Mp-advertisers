import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutUs from "../components/AboutUs.jsx";
import Home from "../Home.jsx";
const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />

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
