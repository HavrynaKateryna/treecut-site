import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import "../styles/header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  /* =========================
     UI STATE SYSTEM (GLOBAL FIX)
  ========================= */

  const setUIState = (key: string, value: boolean) => {
    document.body.classList.toggle(key, value);
  };

  /* =========================
     MENU STATE
  ========================= */

  useEffect(() => {
    setUIState("menu-open", open);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  /* =========================
     ESC CLOSE
  ========================= */

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* =========================
     SCROLL HELPERS
  ========================= */

  const getHeaderOffset = () => {
    const header = document.querySelector(".header") as HTMLElement;
    return header ? header.offsetHeight : 92;
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top =
      el.getBoundingClientRect().top +
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
      requestAnimationFrame(() => scrollToSection(id));
      return;
    }

    sessionStorage.setItem("scroll-target", id);
    navigate("/");
  };

  /* =========================
     AFTER ROUTE SCROLL
  ========================= */

  useEffect(() => {
    const target = sessionStorage.getItem("scroll-target");

    if (!target) return;

    const timer = setTimeout(() => {
      scrollToSection(target);
      sessionStorage.removeItem("scroll-target");
    }, 250);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  /* =========================
     HOME
  ========================= */

  const goHomeTop = () => {
    setOpen(false);
    sessionStorage.removeItem("scroll-target");
    navigate("/");

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="header">
        <div className="header__inner">

          <button className="logo" onClick={goHomeTop}>
            <div className="logo-circle">
              <img src="/logo.webp" alt="logo" />
            </div>
            <span>TIM'S TREE SERVICE</span>
          </button>

          <nav className="nav">
            <button onClick={() => handleScrollTo("about")}>About</button>
            <button onClick={() => handleScrollTo("services")}>Services</button>
            <button onClick={() => handleScrollTo("gallery")}>Gallery</button>
            <button onClick={() => handleScrollTo("reviews")}>Reviews</button>
            <button onClick={() => handleScrollTo("faq")}>Questions & Answers</button>
            <button onClick={() => handleScrollTo("contact")}>Contact</button>
          </nav>

          <div className="header-contact">
            <a href="tel:+15596804185" className="header-phone">
              <Phone size={18} />
              (559) 680-4185
            </a>

            <a href="tel:+15596804208" className="header-phone">
              <Phone size={18} />
              (559) 680-4208
            </a>
          </div>

          <button
            className="burger"
            onClick={() => setOpen((p) => !p)}
          >
            ☰
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="menu-overlay" onClick={() => setOpen(false)}>
          <div className="menu-modal" onClick={(e) => e.stopPropagation()}>

            <button className="menu-close" onClick={() => setOpen(false)}>
              ✕
            </button>

            <button onClick={() => handleScrollTo("about")}>About</button>
            <button onClick={() => handleScrollTo("services")}>Services</button>
            <button onClick={() => handleScrollTo("gallery")}>Gallery</button>
            <button onClick={() => handleScrollTo("reviews")}>Reviews</button>
            <button onClick={() => handleScrollTo("faq")}>Questions & Answers</button>
            <button onClick={() => handleScrollTo("contact")}>Contact</button>

            <a href="tel:+15596804185" className="mobile-phone">
              <Phone size={18} /> (559) 680-4185
            </a>

            <a href="tel:+15596804208" className="mobile-phone">
              <Phone size={18} /> (559) 680-4208
            </a>

          </div>
        </div>
      )}
    </>
  );
}