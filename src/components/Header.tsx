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
        className={`header ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="header__inner">
          {/* LOGO */}

          <button
            className="logo"
            onClick={goHome}
            aria-label="Go to homepage"
          >
            <div className="logo-circle">
              <img
                src="/logo.webp"
                alt="Tree service company logo"
              />
            </div>

            <span>TIM'S TREE SERVICE</span>
          </button>

          {/* DESKTOP NAV */}

          <nav
            className="nav"
            aria-label="Main navigation"
          >
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
                handleScrollTo("about")
              }
            >
              Why Choose Us
            </button>

            <button
              onClick={() =>
                handleScrollTo("gallery")
              }
            >
              Our Work
            </button>

            <button
              onClick={() =>
                handleScrollTo("reviews")
              }
            >
              Reviews
            </button>

            <button
              onClick={() =>
                handleScrollTo("faq")
              }
            >
              Questions & Answers
            </button>
          </nav>

          {/* DESKTOP PHONE */}

          <div className="header-contact">
            <a
              href="tel:+15596804185"
              className="header-phone"
              aria-label="Call Tim's Tree Service"
            >
              <span className="phone-icon">
                <Phone size={17} />
              </span>

              <span>(559) 680-4185</span>
            </a>
          </div>

          {/* BURGER */}

          <button
            className={`burger ${
              open ? "active" : ""
            }`}
            onClick={() =>
              setOpen((prev) => !prev)
            }
            aria-label={
              open ? "Close menu" : "Open menu"
            }
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* MOBILE / TABLET MENU */}

      {open && (
        <div
          className="menu-overlay"
          onClick={() => setOpen(false)}
        >
          <div
            id="mobile-menu"
            className="menu-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="menu-close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ×
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
                handleScrollTo("about")
              }
            >
              Why Choose Us
            </button>

            <button
              onClick={() =>
                handleScrollTo("gallery")
              }
            >
              Our Work
            </button>

            <button
              onClick={() =>
                handleScrollTo("reviews")
              }
            >
              Reviews
            </button>

            <button
              onClick={() =>
                handleScrollTo("faq")
              }
            >
              Questions & Answers
            </button>

            <a
              href="tel:+15596804185"
              className="mobile-phone"
            >
              <Phone size={18} />

              <span>(559) 680-4185</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
