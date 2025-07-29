import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Register GSAP plugins
if (typeof window !== 'undefined' && window.gsap) {
  window.gsap.registerPlugin(window.ScrollTrigger);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
