import { useEffect, useState } from "react";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Phone } from "lucide-react";
import "../styles/header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
  }, []);

  useEffect(() => {
    document.body.classList.toggle(
      "menu-open",
      open,
    );

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey,
      );
  }, []);

  const getHeaderOffset = () => {
    const header = document.querySelector(
      ".header",
    ) as HTMLElement | null;

    return header?.offsetHeight ?? 84;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const top =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      getHeaderOffset();

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const handleScrollTo = (id: string) => {
    setOpen(false);

    if (location.pathname === "/") {
      requestAnimationFrame(() => {
        scrollToSection(id);
      });

      return;
    }

    sessionStorage.setItem("scroll-target", id);

    navigate("/");
  };

  useEffect(() => {
    const target = sessionStorage.getItem(
      "scroll-target",
    );

    if (!target) return;

    const timer = setTimeout(() => {
      scrollToSection(target);

      sessionStorage.removeItem("scroll-target");
    }, 250);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const goHome = () => {
    setOpen(false);

    sessionStorage.removeItem("scroll-target");

    navigate("/");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className={`header ${scrolled ? "scrolled" : ""}`}
      >
        <div className="header__inner">
          <button
            className="logo"
            onClick={goHome}
          >
            <div className="logo-circle">
              <img
                src="/logo.webp"
                alt="Tim's Tree Service"
              />
            </div>

            <span>TIM'S TREE SERVICE</span>
          </button>

          <nav className="nav">
            <button
              onClick={() =>
                handleScrollTo("about")
              }
            >
              About Us
            </button>

            <button
              onClick={() =>
                handleScrollTo("services")
              }
            >
              Services
            </button>

            <button
              onClick={() =>
                handleScrollTo("how-it-works")
              }
            >
              How It Works
            </button>

            <button
              onClick={() =>
                handleScrollTo("gallery")
              }
            >
              Gallery
            </button>

            <button
              onClick={() =>
                handleScrollTo("faq")
              }
            >
              Questions & Answers
            </button>

            <button
              onClick={() =>
                handleScrollTo("reviews")
              }
            >
              Reviews
            </button>
          </nav>

          <div className="header-contact">
            <a
              href="tel:+15596804185"
              className="header-phone"
            >
              <span className="phone-icon">
                <Phone size={17} />
              </span>

              <span>(559) 680-4185</span>
            </a>
          </div>

          <button
            className="burger"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {open && (
        <div
          className="menu-overlay"
          onClick={() => setOpen(false)}
        >
          <div
            className="menu-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="menu-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <button
              onClick={() =>
                handleScrollTo("about")
              }
            >
              About Us
            </button>

            <button
              onClick={() =>
                handleScrollTo("services")
              }
            >
              Services
            </button>

            <button
              onClick={() =>
                handleScrollTo("how-it-works")
              }
            >
              How It Works
            </button>

            <button
              onClick={() =>
                handleScrollTo("gallery")
              }
            >
              Gallery
            </button>

            <button
              onClick={() =>
                handleScrollTo("faq")
              }
            >
              Questions & Answers
            </button>

            <button
              onClick={() =>
                handleScrollTo("reviews")
              }
            >
              Reviews
            </button>

            <a
              href="tel:+15596804185"
              className="mobile-phone"
            >
              <Phone size={18} />
              (559) 680-4185
            </a>
          </div>
        </div>
      )}
    </>
  );
}
