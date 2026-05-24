import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/gallery.css";

export default function Gallery() {
  const images = [
    "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg",
    "/7.jpg", "/8.jpg", "/9.jpg", "/10.jpg", "/11.jpg",
    "/12.jpg", "/13.jpg", "/14.jpg", "/15.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  const startX = useRef<number | null>(null);
  const len = images.length;

  const next = () => setIndex((prev) => (prev + 1) % len);
  const prev = () => setIndex((prev) => (prev - 1 + len) % len);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (zoom && e.key === "Escape") setZoom(false);

      if (!zoom) {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

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

  const getClass = (i: number) => {
    if (i === index) return "slide active";

    if (i === (index - 1 + len) % len) return "slide left";

    if (i === (index + 1) % len) return "slide right";

    return "slide hidden";
  };

  return (
    <motion.section
      id="gallery"
      className="gallery section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container">

        <h2 className="gallery-title">Gallery</h2>

        <div className="carousel">

          <button className="gallery-arrow left-arrow" onClick={prev}>
            ‹
          </button>

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
                  if (i === index) setZoom(true);
                  else setIndex(i);
                }}
              >
                <img src={img} alt="" />
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
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}