import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setOpen(false);

  const handleScrollTo = (id: string) => {
    navigate("/");

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          {/* Logo */}
          <div
            className="logo"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          >
            <div className="logo-circle">
              <img src="/logo.jpg" alt="logo" />
            </div>
            <span>TIM'S TREE SERVICE</span>
          </div>

          {/* Desktop nav */}
          <nav className="nav">
            <span
              onClick={() =>
                handleScrollTo("about")
              }
            >
              About
            </span>
            <span
              onClick={() =>
                handleScrollTo("services")
              }
            >
              Services
            </span>
            <span
              onClick={() =>
                handleScrollTo("gallery")
              }
            >
              Gallery
            </span>
            <span
              onClick={() =>
                handleScrollTo("faq")
              }
            >
              Questions & Answers
            </span>
            <span
              onClick={() =>
                handleScrollTo("contact")
              }
            >
              Contact
            </span>
          </nav>

          {/* Burger */}
          <div
            className="burger"
            onClick={() => setOpen(true)}
          >
            ☰
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
        >
          <div
            className="menu-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="menu-close"
              onClick={closeMenu}
            >
              ✕
            </button>

            <span
              onClick={() => {
                handleScrollTo("about");
                closeMenu();
              }}
            >
              About
            </span>

            <span
              onClick={() => {
                handleScrollTo("services");
                closeMenu();
              }}
            >
              Services
            </span>

            <span
              onClick={() => {
                handleScrollTo("gallery");
                closeMenu();
              }}
            >
              Gallery
            </span>

            <span
              onClick={() => {
                handleScrollTo("faq");
                closeMenu();
              }}
            >
              FAQ
            </span>

            <span
              onClick={() => {
                handleScrollTo("contact");
                closeMenu();
              }}
            >
              Contact
            </span>
          </div>
        </div>
      )}
    </>
  );
}
