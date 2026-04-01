import {
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <h3>TIM'S TREE SERVICE</h3>
          <p>TREE REMOVAL</p>
        </div>

        <div className="footer__col">
          <h4>Контакты</h4>

          <p>📍 г. Ваш город, ул. Пример 10</p>

          <p>
            📞{" "}
            <a href="tel:+79999999999">
              +7 999 999 99 99
            </a>
          </p>

          <p>📧 info@treecut.com</p>
        </div>

        <div className="footer__col">
          <h4>Мы в соцсетях</h4>

          <div className="footer__socials">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/79999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        © 2026 TREE REMOVAL.
      </div>
    </footer>
  );
}
