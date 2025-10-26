import React from "react";
import { StrictMode } from "react";
import { createRoot, } from "react-dom/client";
import "./index.css";
import AppRoute from "./Routes/AppRoute.jsx";

createRoot(document.getElementById("root")).render(
 
    <AppRoute />
 
);
