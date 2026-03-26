import { useState } from "react";

export default function Gallery() {
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
  ];

  const [page, setPage] = useState(1);
  const perPage = 3; // три картинки на странице
  const start = (page - 1) * perPage;
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

        <div className="pagination">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Назад
          </button>
          <span>{page}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={
              start + perPage >= images.length
            }
          >
            Вперед
          </button>
        </div>
      </div>
    </section>
  );
}
