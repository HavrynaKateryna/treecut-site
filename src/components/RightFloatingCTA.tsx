import { createPortal } from "react-dom";

export default function RightFab() {
  return createPortal(
    <div className="right-fab">
      <a className="fab call" href="tel:+15596804185">
        📞
      </a>

      <a
        className="fab whatsapp"
        href="https://wa.me/15596804185"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>
    </div>,
    document.body
  );
}