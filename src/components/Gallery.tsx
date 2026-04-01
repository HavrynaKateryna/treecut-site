import { useState, useEffect } from "react";
import "../styles/gallery.css";

export default function Gallery() {
  const images = [
    "/1.jpg",
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

  const [isMobile, setIsMobile] = useState(false);
  const [perPage, setPerPage] = useState(3);
  const [page, setPage] = useState(0);
  const [index, setIndex] = useState<
    number | null
  >(null);

  // определяем устройство
  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;

      if (width <= 600) {
        setIsMobile(true);
        setPerPage(images.length); // без пагинации
      } else if (width <= 1024) {
        setIsMobile(false);
        setPerPage(4);
      } else {
        setIsMobile(false);
        setPerPage(3);
      }
    };

    update();
    window.addEventListener("resize", update);

    return () =>
      window.removeEventListener(
        "resize",
        update,
      );
  }, []);

  const totalPages = Math.ceil(
    images.length / perPage,
  );

  const start = page * perPage;

  const visible = isMobile
    ? images
    : images.slice(start, start + perPage);

  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setPage((prev) =>
      prev === 0 ? totalPages - 1 : prev - 1,
    );
  };

  const openImage = (i: number) => {
    setIndex(isMobile ? i : start + i);
  };

  const closeModal = () => {
    setIndex(null);
  };

  return (
    <section
      id="gallery"
      className="gallery-section"
    >
      <div className="container">
        <h2 className="gallery-title">Gallery</h2>

        <div className="gallery-wrapper">
          {/* стрелки только не на мобилке */}
          {!isMobile && (
            <>
              <button
                className="gallery-arrow left"
                onClick={prevPage}
              >
                ‹
              </button>

              <button
                className="gallery-arrow right"
                onClick={nextPage}
              >
                ›
              </button>
            </>
          )}

          <div className="gallery-grid">
            {visible.map((img, i) => (
              <div
                key={i}
                className="gallery-card"
                onClick={() => openImage(i)}
              >
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* modal */}
      {index !== null && (
        <div
          className="modal-fullscreen"
          onClick={closeModal}
        >
          <img
            src={images[index]}
            className="modal-img"
          />
        </div>
      )}
    </section>
  );
}
