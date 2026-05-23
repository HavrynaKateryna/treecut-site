import { useEffect, useRef, useState } from "react";
import "../styles/gallery.css";

export default function Gallery() {
  const images = [
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/11.jpg",
    "/12.jpg",
    "/13.jpg",
    "/14.jpg",
    "/15.jpg",
  ];

  const [index, setIndex] = useState<number>(0);
  const [zoom, setZoom] = useState<boolean>(false);

  const startX = useRef<number | null>(null);

  const len = images.length;

  /* ========================================
     NEXT / PREV
  ======================================== */

  const next = () => {
    setIndex((prev) => (prev + 1) % len);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + len) % len);
  };

  /* ========================================
     KEYBOARD
  ======================================== */

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (zoom && e.key === "Escape") {
        setZoom(false);
      }

      if (!zoom) {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [zoom]);

  /* ========================================
     SWIPE
  ======================================== */

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX.current === null) return;

    const diff = e.changedTouches[0].clientX - startX.current;

    if (diff > 60) prev();
    if (diff < -60) next();

    startX.current = null;
  };

  /* ========================================
     POSITION
  ======================================== */

  const getClass = (i: number) => {
    if (i === index) return "slide active";

    if (i === (index - 1 + len) % len) {
      return "slide left";
    }

    if (i === (index + 1) % len) {
      return "slide right";
    }

    return "slide hidden";
  };

  return (
    <section id="gallery" className="gallery section">

      <div className="container">

        <h2 className="gallery-title">
          Gallery
        </h2>

        <div className="carousel">

          {/* LEFT */}
          <button
            className="gallery-arrow left-arrow"
            onClick={prev}
            aria-label="Previous"
          >
            ‹
          </button>

          {/* SLIDER */}
          <div
            className="slider"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className={getClass(i)}
                onClick={() => {
                  if (i === index) {
                    setZoom(true);
                  } else {
                    setIndex(i);
                  }
                }}
              >
                <img src={img} alt="" />
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <button
            className="gallery-arrow right-arrow"
            onClick={next}
            aria-label="Next"
          >
            ›
          </button>

        </div>

      </div>

      {/* LIGHTBOX */}
      {zoom && (
        <div
          className="lightbox"
          onClick={() => setZoom(false)}
        >
          <img
            src={images[index]}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </section>
  );
}