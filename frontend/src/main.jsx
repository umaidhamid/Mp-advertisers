import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import AppRoute from "./Routes/AppRoute.jsx";
import { AuthProvider } from "./context/AuthContext";
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AppRoute />
  </AuthProvider>
);
