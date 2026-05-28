import { useEffect, useMemo, useState } from "react";
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

  const next = () => setIndex((p) => (p + 1) % len);
  const prev = () => setIndex((p) => (p - 1 + len) % len);

  // preload ONLY 3 images (critical fix)
  useEffect(() => {
    const load = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    load(images[index]);
    load(images[(index + 1) % len]);
    load(images[(index - 1 + len) % len]);
  }, [index, images, len]);

  const getClass = (i: number) => {
    if (i === index) return "slide active";
    if (i === (index - 1 + len) % len) return "slide left";
    if (i === (index + 1) % len) return "slide right";
    return "slide hidden";
  };

  const visible = [
    (index - 1 + len) % len,
    index,
    (index + 1) % len,
  ];

  return (
    <motion.section
      id="gallery"
      className="gallery section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2 className="gallery-title">Gallery</h2>

        <div className="carousel">
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

      {/* LIGHTBOX */}
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