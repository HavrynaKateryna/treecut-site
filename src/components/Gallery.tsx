import {
  useState,
  useEffect,
  useRef,
} from "react";
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

  const perPage = 3;
  const totalPages = Math.ceil(
    images.length / perPage,
  );

  const [page, setPage] = useState(0);
  const [index, setIndex] = useState<
    number | null
  >(null);
  const [scale, setScale] = useState(1);

  const start = page * perPage;
  const visible = images.slice(
    start,
    start + perPage,
  );

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setPage((prev) =>
      prev === 0 ? totalPages - 1 : prev - 1,
    );
  };

  const openImage = (i: number) => {
    setIndex(start + i);
    setScale(1);
  };

  const closeModal = () => {
    setIndex(null);
    setScale(1);
  };

  const next = () => {
    if (index === null) return;
    setIndex((index + 1) % images.length);
  };

  const prev = () => {
    if (index === null) return;
    setIndex(
      index === 0 ? images.length - 1 : index - 1,
    );
  };

  // клавиатура
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (index === null) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () =>
      window.removeEventListener(
        "keydown",
        handleKey,
      );
  }, [index]);

  // свайп
  const handleTouchStart = (
    e: React.TouchEvent,
  ) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (
    e: React.TouchEvent,
  ) => {
    touchEndX.current =
      e.changedTouches[0].clientX;

    const diff =
      touchStartX.current - touchEndX.current;

    if (diff > 50) next();
    if (diff < -50) prev();
  };

  // zoom колесиком
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    if (e.deltaY < 0) {
      setScale((prev) => Math.min(prev + 0.2, 3));
    } else {
      setScale((prev) => Math.max(prev - 0.2, 1));
    }
  };

  // клик по экрану
  const handleScreenClick = (
    e: React.MouseEvent,
  ) => {
    const clickX = e.clientX;
    const width = window.innerWidth;

    if (clickX < width / 2) prev();
    else next();
  };

  return (
    <section
      id="gallery"
      className="gallery-section"
    >
      <div className="container">
        <h2 className="gallery-title">Галерея</h2>

        <div className="gallery-wrapper">
          {/* стрелка влево */}
          <button
            className="gallery-arrow left"
            onClick={prevPage}
          >
            ‹
          </button>

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

          {/* стрелка вправо */}
          <button
            className="gallery-arrow right"
            onClick={nextPage}
          >
            ›
          </button>
        </div>
      </div>

      {/* MODAL */}
      {index !== null && (
        <div
          className="modal-fullscreen"
          onClick={handleScreenClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
          >
            <button
              className="modal-close"
              onClick={closeModal}
            >
              ✕
            </button>

            <img
              src={images[index]}
              className="modal-img"
              style={{
                transform: `scale(${scale})`,
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
