import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./styles/global.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/services.css";
import "./styles/gallery.css";
import "./styles/faq.css";
import "./styles/footer.css";
import "./styles/modal.css";
import "./styles/form.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
