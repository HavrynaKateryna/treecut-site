import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Main text font
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

// Headings font
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";

// Natural / accent font
import "@fontsource/lora/400.css";
import "@fontsource/lora/500.css";
import "@fontsource/lora/600.css";

import "./styles/global.css";
import "./styles/layout.css";

import "./styles/header.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/services.css";
import "./styles/gallery.css";
import "./styles/faq.css";
import "./styles/footer.css";
import "./styles/modal.css";
import "./styles/form.css";
import "./styles/reviews.css";
import "./styles/rightFloatingCta.css";

const root = document.getElementById("root");

if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);