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

          <p>Licensed & Insured Tree Care</p>
        </div>

        <div className="footer__col">
          <h4>Contact Us</h4>

          <a
            href="https://maps.app.goo.gl/HDfGGPkAKxNw6X3D8"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Get Directions
          </a>

          <a href="tel:+15596804185">
            📞 559-680-4185 Tim
          </a>

          <a href="tel:+15596804208">
            📞 559-680-4208 Dasha
          </a>

          <p>📧 info@treecut.com</p>
        </div>

        <div className="footer__col">
          <h4>Follow Us</h4>
          <div className="footer__socials">
            <a
              href="https://instagram.com/tim.tree_service"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Tim's Tree Service Instagram page"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com/removal.s.trees"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Tim's Tree Service Facebook page"
            >
              <FaFacebook />
            </a>

            <a
              href="https://wa.me/15596804185"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Tim's Tree Service on WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        © 2026 Tim's Tree Service
      </div>
    </footer>
  );
}
