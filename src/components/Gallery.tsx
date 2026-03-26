import { useState } from "react";
import "../styles/gallery.css";

export default function Gallery() {
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
  ];
  const perPage = 3;
  const totalPages = Math.ceil(
    images.length / perPage,
  );

  const [page, setPage] = useState(0);

  const start = page * perPage;
  const visible = images.slice(
    start,
    start + perPage,
  );

  return (
    <section
      id="gallery"
      className="gallery-section"
    >
      <div className="container">
        <h2 className="gallery-title">Галерея</h2>

        <div className="gallery-grid">
          {visible.map((img, i) => (
            <div className="gallery-card" key={i}>
              <img
                src={img}
                alt={`gallery-${i}`}
              />
            </div>
          ))}
        </div>

        <div className="pagination-dots">
          {Array.from({ length: totalPages }).map(
            (_, i) => (
              <span
                key={i}
                className={`dot ${i === page ? "active" : ""}`}
                onClick={() => setPage(i)}
              ></span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
