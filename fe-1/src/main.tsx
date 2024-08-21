import React from "react";
import { createRoot } from "react-dom/client";
import "flowbite";
import "./assets/global.css";
import HomePage from "./pages/home/home.pages";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
