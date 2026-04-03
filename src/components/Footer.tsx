import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <h3>TIM'S TREE SERVICE</h3>
          <p>
            Professional Tree Removal Services
          </p>
        </div>

        <div className="footer__col">
          <h4>Contact Us</h4>

          <p>📍 Jacksonville, FL</p>

          <p>
            📞{" "}
            <a href="tel:+15596804185">
              559-680-4185 Tim
            </a>
          </p>
          <p>
            📞{" "}
            <a href="tel:+15596804208">
              559-680-4208 Dasha
            </a>
          </p>
          <p>📧 info@treecut.com</p>
        </div>

        <div className="footer__col">
          <h4>Follow Us</h4>

          <div className="footer__socials">
            <a
              href="https://instagram.com/tim.tree_service"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com/removal.s.trees"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="https://wa.me/15596804185"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        © 2026 tree_service_jax
      </div>
    </footer>
  );
}
