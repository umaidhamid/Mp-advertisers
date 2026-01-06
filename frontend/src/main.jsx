import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ClickSpark from "../animation/ClickSpark";
import AppRoute from "./Routes/AppRoute.jsx";
createRoot(document.getElementById("root")).render(
  <ClickSpark
    sparkColor="#fff"
    sparkSize={10}
    sparkRadius={15}
    sparkCount={8}
    duration={400}
  >
    <AppRoute />
  </ClickSpark>
);
