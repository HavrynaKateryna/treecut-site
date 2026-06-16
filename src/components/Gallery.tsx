import { useEffect, useMemo, useRef, useState } from "react";
import OptimizedImage from "../components/OptimizedImage";
import "../styles/gallery.css";

export default function Gallery() {
  const images = useMemo(
    () => [
      "/2.webp",
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
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const len = images.length;

  // =========================
  // DRAG STATE (TikTok style)
  // =========================
  const startX = useRef<number | null>(null);
  const currentX = useRef<number>(0);
  const lastMoveTime = useRef<number>(0);
  const velocity = useRef<number>(0);
  const dragging = useRef(false);

  const next = () => setIndex((p) => (p + 1) % len);
  const prev = () => setIndex((p) => (p - 1 + len) % len);

  // =========================
  // OPEN LIGHTBOX
  // =========================
  const openImage = (i: number) => {
    setIndex(i);
    setIsOpen(true);
  };

  // =========================
  // TOUCH START
  // =========================
  const onStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    currentX.current = e.touches[0].clientX;
    lastMoveTime.current = Date.now();
    dragging.current = true;
  };

  // =========================
  // TOUCH MOVE (velocity calc)
  // =========================
  const onMove = (e: React.TouchEvent) => {
    if (!dragging.current || startX.current === null) return;

    const x = e.touches[0].clientX;
    const now = Date.now();

    const dx = x - currentX.current;
    const dt = now - lastMoveTime.current;

    velocity.current = dx / (dt || 1);

    currentX.current = x;
    lastMoveTime.current = now;
  };

  // =========================
  // TOUCH END (TikTok swipe logic)
  // =========================
  const onEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX.current;

    const v = velocity.current;

    dragging.current = false;
    startX.current = null;

    const SWIPE_THRESHOLD = 50;

    const shouldNext = diff < -SWIPE_THRESHOLD || v < -0.5;
    const shouldPrev = diff > SWIPE_THRESHOLD || v > 0.5;

    if (shouldNext) next();
    else if (shouldPrev) prev();
  };

  // =========================
  // KEYBOARD NAVIGATION
  // =========================
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
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const visible = [
    (index - 1 + len) % len,
    index,
    (index + 1) % len,
  ];

  return (
    <>
      <section id="gallery" className="gallery">
        <div className="container">

          <h2 className="gallery-title">Gallery</h2>

          <div
            className="carousel"
            onTouchStart={onStart}
            onTouchMove={onMove}
            onTouchEnd={onEnd}
          >

            <button className="gallery-arrow left-arrow" onClick={prev}>
              ‹
            </button>

            <div className="slider">

              {visible.map((i, pos) => {
                const isCenter = i === index;

                return (
                  <div
                    key={i}
                    className={`slide ${isCenter ? "active" : ""} ${
                      pos === 0 ? "left" : ""
                    } ${pos === 2 ? "right" : ""}`}
                    onClick={() => openImage(i)}
                  >
                    <OptimizedImage
                      src={images[i]}
                      alt={`gallery-${i}`}
                      priority={isCenter ? "high" : "low"}
                    />
                  </div>
                );
              })}

            </div>

            <button className="gallery-arrow right-arrow" onClick={next}>
              ›
            </button>

            {/* DOTS (desktop only via CSS) */}
            <div className="gallery-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {isOpen && (
        <div className="lightbox" onClick={() => setIsOpen(false)}>
          <img
            src={images[index]}
            alt="preview"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}