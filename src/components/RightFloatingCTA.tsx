import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { createPortal } from "react-dom";

export default function FloatingContact() {
  return createPortal(
    <div className="floating-contact">

      <a
        className="floating-contact__btn floating-contact__btn--call"
        href="tel:+15596804185"
        aria-label="Call now"
      >
        <FaPhone />
      </a>

      <a
        className="floating-contact__btn floating-contact__btn--whatsapp"
        href="https://wa.me/15596804185"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

    </div>,
    document.body
  );
}