import { useState, useEffect } from "react";
import "../styles/rightFloatingCta.css";

export default function RightFloatingCTA() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const phone = "+15596804185";
  const whatsapp = "15596804185";

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 👉 MOBILE VERSION (НЕ ПАНЕЛЬ)
  if (isMobile) {
    return (
      <div className="mobile-fab">
        <a href={`tel:${phone}`} className="fab call">📞</a>
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fab whatsapp"
        >
          💬
        </a>
      </div>
    );
  }

  // 👉 DESKTOP VERSION
  return (
    <div className={`right-cta ${open ? "open" : ""}`}>
      <button className="cta-toggle" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

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