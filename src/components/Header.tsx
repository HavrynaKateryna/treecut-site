import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          {/* Logo */}
          <div className="logo">
            <div className="logo-circle">
              <img src="/logo.png" alt="logo" />
            </div>
            <span>TreeCut</span>
          </div>

          {/* Desktop nav */}
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#faq">Questions & Answers</a>
            <a href="#contact">Contact</a>
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

      {/* MODAL MENU */}
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

            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a
              href="#services"
              onClick={closeMenu}
            >
              Services
            </a>
            <a
              href="#gallery"
              onClick={closeMenu}
            >
              Gallery
            </a>
            <a href="#faq" onClick={closeMenu}>
              FAQ
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}
