import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import OptimizedImage from "../components/OptimizedImage";

import "../styles/gallery.css";

export default function Gallery() {
  const images = useMemo(
    () => [
      "/19.jpg",
      "/22.jpg",
      "/17.jpg",
      "/20.jpg",

      "/3.webp",
      "/4.webp",
      "/5.webp",
      "/6.webp",
      "/7.webp",
      "/8.webp",
      "/9.webp",
      "/10.webp",
      "/11.webp",
      "/12.webp",
      "/13.webp",
      "/14.webp",

      "/15.webp",
      "/16.jpg",
      "/18.jpg",
      "/21.jpg",

      "/2.webp",
    ],
    [],
  );

  const [index, setIndex] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const len = images.length;

  const startX = useRef<number | null>(null);

  const currentX = useRef(0);

  const lastMoveTime = useRef(0);

  const velocity = useRef(0);

  const dragging = useRef(false);

  const next = () => {
    setIndex((prev) => (prev + 1) % len);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + len) % len);
  };

  const openImage = (i: number) => {
    setIndex(i);

    setIsOpen(true);
  };

  const onStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;

    currentX.current = e.touches[0].clientX;

    lastMoveTime.current = Date.now();

    dragging.current = true;
  };

  const onMove = (e: React.TouchEvent) => {
    if (
      !dragging.current ||
      startX.current === null
    )
      return;

    const x = e.touches[0].clientX;

    const now = Date.now();

    const dx = x - currentX.current;

    const dt = now - lastMoveTime.current;

    velocity.current = dx / (dt || 1);

    currentX.current = x;

    lastMoveTime.current = now;
  };

  const onEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;

    const diff =
      e.changedTouches[0].clientX -
      startX.current;

    const v = velocity.current;

    dragging.current = false;

    startX.current = null;

    if (diff < -50 || v < -0.5) {
      next();
    } else if (diff > 50 || v > 0.5) {
      prev();
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isOpen && e.key === "Escape") {
        setIsOpen(false);

        return;
      }

      if (e.key === "ArrowRight") next();

      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKey);

    return () =>
      window.removeEventListener(
        "keydown",
        onKey,
      );
  }, [isOpen]);

  const visible = [
    (index - 1 + len) % len,

    index,

    (index + 1) % len,
  ];

  return (
    <>
      <section
        id="gallery"
        className="section gallery"
      >
        <div className="container">
          <div className="section-header">
            <h2 className="gallery-title">
              Professional Tree Care in Action
            </h2>

            <p className="gallery-subtitle">
              Every project is completed using
              professional equipment, safe
              techniques, and careful attention to
              every detail. From tree removal to
              the final cleanup, we take pride in
              delivering reliable results our
              customers can trust.
            </p>
          </div>

          <div
            className="carousel"
            onTouchStart={onStart}
            onTouchMove={onMove}
            onTouchEnd={onEnd}
          >
            <button
              className="gallery-arrow left-arrow"
              onClick={prev}
            >
              ‹
            </button>

            <div className="slider">
              {visible.map((i, pos) => {
                const active = i === index;

                return (
                  <div
                    key={i}
                    className={`
slide
${active ? "active" : ""}
${pos === 0 ? "left" : ""}
${pos === 2 ? "right" : ""}
`}
                    onClick={() => openImage(i)}
                  >
                    <OptimizedImage
                      src={images[i]}
                      alt={`Tree service project ${i + 1}`}
                      priority={
                        active ? "high" : "low"
                      }
                    />
                  </div>
                );
              })}
            </div>

            <button
              className="gallery-arrow right-arrow"
              onClick={next}
            >
              ›
            </button>

            <div className="gallery-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${
                    i === index ? "active" : ""
                  }`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <div
          className="lightbox"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={images[index]}
            alt="Tree service work"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
