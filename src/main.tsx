import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/global.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/services.css";
import "./styles/gallery.css";
import "./styles/faq.css";
import "./styles/footer.css";
import "./styles/modal.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
