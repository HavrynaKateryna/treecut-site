import { useState } from "react";
import "../styles/rightFloatingCta.css";

export default function RightFloatingCTA() {
  const [open, setOpen] = useState(false);

  const phone = "+15596804185";
  const whatsapp = "15596804185";

  return (
    <div className={`right-cta ${open ? "open" : ""}`}>

      {/* TOGGLE BUTTON */}
      <button className="cta-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* PANEL */}
      <div className="cta-panel">

        <a href={`tel:${phone}`} className="cta-item call">
          📞 Call Now
        </a>

        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-item whatsapp"
        >
          💬 WhatsApp
        </a>

       

      </div>
    </div>
  );
}