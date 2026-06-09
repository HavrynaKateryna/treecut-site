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
  const len = images.length;

  const startX = useRef<number | null>(null);

  const next = () => setIndex((p) => (p + 1) % len);
  const prev = () => setIndex((p) => (p - 1 + len) % len);

  /* =========================
     PRELOAD 3 IMAGES ONLY
  ========================= */
  useEffect(() => {
    const load = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    load(images[index]);
    load(images[(index + 1) % len]);
    load(images[(index - 1 + len) % len]);
  }, [index, images, len]);

  /* =========================
     SWIPE
  ========================= */
  const onStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;

    const diff = e.changedTouches[0].clientX - startX.current;

    if (diff > 60) prev();
    if (diff < -60) next();

    startX.current = null;
  };

  /* =========================
     VISIBLE ITEMS (3 only)
  ========================= */
  const visible = [
    (index - 1 + len) % len,
    index,
    (index + 1) % len,
  ];

  return (
    <section id="gallery" className="gallery section gallery-reveal">
      <div className="container">

        <h2 className="gallery-title">Gallery</h2>

        <div className="carousel" onTouchStart={onStart} onTouchEnd={onEnd}>

          {/* LEFT ARROW */}
          <button className="gallery-arrow left-arrow" onClick={prev}>
            ‹
          </button>

          {/* SLIDER */}
          <div className="slider">

            {visible.map((i, pos) => {
              const isCenter = i === index;

              return (
                <div
                  key={i}
                  className={`slide ${isCenter ? "active" : ""} ${
                    pos === 0 ? "left" : ""
                  } ${pos === 2 ? "right" : ""}`}
                  onClick={() => setIndex(i)}
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

          {/* RIGHT ARROW */}
          <button className="gallery-arrow right-arrow" onClick={next}>
            ›
          </button>

        </div>
      </div>
    </section>
  );
}