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
      {
        src: "/gallery/26.webp",
        alt: "Professional tree removal and tree care service in Jacksonville Florida",
      },
      {
        src: "/gallery/2.webp",
        alt: "Professional tree trimming and pruning service",
      },
      {
        src: "/gallery/3.webp",
        alt: "Tree removal service using professional equipment",
      },
      {
        src: "/gallery/4.webp",
        alt: "Professional tree cutting and removal project",
      },
      {
        src: "/gallery/5.webp",
        alt: "Tree trimming and branch removal service",
      },
      {
        src: "/gallery/6.webp",
        alt: "Professional tree removal work completed safely",
      },
      {
        src: "/gallery/7.webp",
        alt: "Tree cutting service performed by professional tree care team",
      },
      {
        src: "/gallery/8.webp",
        alt: "Professional tree pruning and trimming project",
      },
      {
        src: "/gallery/9.webp",
        alt: "Tree removal and cleanup service",
      },
      {
        src: "/gallery/10.webp",
        alt: "Professional tree care and maintenance service",
      },
      {
        src: "/gallery/11.webp",
        alt: "Tree removal project completed by professional tree service",
      },
      {
        src: "/gallery/12.webp",
        alt: "Professional tree trimming service with safe cutting techniques",
      },
      {
        src: "/gallery/13.webp",
        alt: "Tree removal and property cleanup after professional service",
      },
      {
        src: "/gallery/14.webp",
        alt: "Professional tree cutting and trimming work",
      },
      {
        src: "/gallery/15.webp",
        alt: "Tree care service performed with professional equipment",
      },
      {
        src: "/gallery/16.webp",
        alt: "Professional tree removal and branch cutting service",
      },
      {
        src: "/gallery/17.webp",
        alt: "Tree trimming and pruning project completed safely",
      },
      {
        src: "/gallery/18.webp",
        alt: "Professional tree removal service for residential property",
      },
      {
        src: "/gallery/19.webp",
        alt: "Tree cutting and cleanup service after tree removal",
      },
      {
        src: "/gallery/20.webp",
        alt: "Professional tree trimming and property maintenance",
      },
      {
        src: "/gallery/21.webp",
        alt: "Tree removal work completed by experienced tree care professionals",
      },
      {
        src: "/gallery/22.webp",
        alt: "Professional tree pruning and branch removal service",
      },
      {
        src: "/gallery/23.webp",
        alt: "Residential tree removal and cleanup project",
      },
      {
        src: "/gallery/24.webp",
        alt: "Professional tree care and tree removal service",
      },
      {
        src: "/gallery/25.webp",
        alt: "Tree trimming and removal project completed safely",
      },
      {
        src: "/gallery/27.webp",
        alt: "Professional tree service project completed in Jacksonville Florida",
      },
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
    ) {
      return;
    }

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
              aria-label="Previous gallery image"
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
                      src={images[i].src}
                      alt={images[i].alt}
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
              aria-label="Next gallery image"
            >
              ›
            </button>

            <div className="gallery-dots">
              {images.map((image, i) => (
                <button
                  key={i}
                  className={`dot ${
                    i === index ? "active" : ""
                  }`}
                  onClick={() => setIndex(i)}
                  aria-label={`View gallery image ${
                    i + 1
                  }`}
                  aria-current={
                    i === index
                      ? "true"
                      : undefined
                  }
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
            src={images[index].src}
            alt={images[index].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
