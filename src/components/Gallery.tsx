import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [zoom, setZoom] = useState(false);

  const len = images.length;

  const startX = useRef<number | null>(null);

  const next = () => setIndex((p) => (p + 1) % len);
  const prev = () => setIndex((p) => (p - 1 + len) % len);

  // preload 3 images
  useEffect(() => {
    const load = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    load(images[index]);
    load(images[(index + 1) % len]);
    load(images[(index - 1 + len) % len]);
  }, [index, images, len]);

  // =========================
  // SWIPE LOGIC (MOBILE FIX)
  // =========================

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;

    const diff = e.changedTouches[0].clientX - startX.current;

    if (diff > 60) prev();   // swipe right
    if (diff < -60) next();  // swipe left

    startX.current = null;
  };

  const visible = [
    (index - 1 + len) % len,
    index,
    (index + 1) % len,
  ];

  const getClass = (i: number) => {
    if (i === index) return "slide active";
    if (i === (index - 1 + len) % len) return "slide left";
    if (i === (index + 1) % len) return "slide right";
    return "slide hidden";
  };

  return (
    <motion.section className="gallery section">
      <div className="container">
        <h2 className="gallery-title">Gallery</h2>

        <div
          className="carousel"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button className="gallery-arrow left-arrow" onClick={prev}>
            ‹
          </button>

          <div className="slider">
            {visible.map((i) => (
              <div
                key={i}
                className={getClass(i)}
                onClick={() => {
                  if (i === index) setZoom(true);
                  else setIndex(i);
                }}
              >
                <img
                  src={images[i]}
                  alt=""
                  loading={i === index ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <button className="gallery-arrow right-arrow" onClick={next}>
            ›
          </button>
        </div>
      </div>

      <AnimatePresence>
        {zoom && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoom(false)}
          >
            <motion.img
              src={images[index]}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              decoding="async"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}