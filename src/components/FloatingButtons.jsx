import {
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a
        href="tel:+79999999999"
        className="float-btn call"
        aria-label="Call us"
      >
        <FaPhone />
      </a>

      <a
        href="https://wa.me/79999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
