import React from "react";
import { createRoot } from "react-dom/client";
import "flowbite";
import "./assets/global.css";

import RoutingConfig from "./config/routing.config";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RoutingConfig />
  </React.StrictMode>
);
