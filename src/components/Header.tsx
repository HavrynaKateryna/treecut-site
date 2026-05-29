import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import "../styles/header.css";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  /* =========================
     MENU
  ========================= */

  const closeMenu = () => {
    setOpen(false);
  };

  /* =========================
     LOCK BODY
  ========================= */

  useEffect(() => {
    if (open) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }

    return () => {
      document.body.classList.remove("lock");
    };
  }, [open]);

  /* =========================
     ESC CLOSE
  ========================= */

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  /* =========================
     SCROLL
  ========================= */

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (!el) return;

    const headerOffset = 130;

    const top =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      headerOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const handleScrollTo = (id: string) => {
    closeMenu();

    // already on homepage
    if (location.pathname === "/") {
      requestAnimationFrame(() => {
        scrollToSection(id);
      });

      return;
    }

    // save target section
    sessionStorage.setItem("scroll-target", id);

    navigate("/");
  };

  /* =========================
     SCROLL AFTER ROUTE CHANGE
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
    closeMenu();

    sessionStorage.removeItem("scroll-target");

    navigate("/");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="header">
        <div className="header__inner">

          {/* LOGO */}
          <button
            type="button"
            className="logo"
            onClick={goHomeTop}
            aria-label="Go to home page"
          >
            <div className="logo-circle">
              <img src="/logo.webp" alt="Tim Tree Service logo" />
            </div>

            <span>TIM'S TREE SERVICE</span>
          </button>

          {/* DESKTOP NAV */}
          <nav className="nav">

            <button onClick={() => handleScrollTo("about")}>
              About
            </button>

            <button onClick={() => handleScrollTo("services")}>
              Services
            </button>

            <button onClick={() => handleScrollTo("gallery")}>
              Gallery
            </button>

            <button onClick={() => handleScrollTo("reviews")}>
              Reviews
            </button>

            <button onClick={() => handleScrollTo("faq")}>
              Questions & Answers
            </button>

            <button onClick={() => handleScrollTo("contact")}>
              Contact
            </button>

          </nav>

          {/* PHONES */}
          <div className="header-contact">

            <a
              href="tel:+15596804185"
              className="header-phone"
              aria-label="Call main number"
            >
              <Phone size={18} />
              <span>(559) 680-4185</span>
            </a>

            <a
              href="tel:+15596804208"
              className="header-phone"
              aria-label="Call second number"
            >
              <Phone size={18} />
              <span>(559) 680-4208</span>
            </a>

          </div>

          {/* BURGER */}
          <button
            type="button"
            className="burger"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            ☰
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="menu-overlay" onClick={closeMenu}>
          <div
            className="menu-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              className="menu-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>

            <button onClick={() => handleScrollTo("about")}>About</button>
            <button onClick={() => handleScrollTo("services")}>Services</button>
            <button onClick={() => handleScrollTo("gallery")}>Gallery</button>
            <button onClick={() => handleScrollTo("reviews")}>Reviews</button>
            <button onClick={() => handleScrollTo("faq")}>Questions & Answers</button>
            <button onClick={() => handleScrollTo("contact")}>Contact</button>

            <a
              href="tel:+15596804185"
              className="mobile-phone"
              aria-label="Call main number"
            >
              <Phone size={18} />
              <span>(559) 680-4185</span>
            </a>

            <a
              href="tel:+15596804208"
              className="mobile-phone"
              aria-label="Call second number"
            >
              <Phone size={18} />
              <span>(559) 680-4208</span>
            </a>

          </div>
        </div>
      )}
    </>
  );
}