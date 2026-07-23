import { useEffect, useState } from "react";
import "../styles/reviews.css";

type Review = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
};

type ApiResponse = {
  reviews: Review[];
  rating: number;
};

export default function Reviews() {
  const [reviews, setReviews] = useState<
    Review[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        setReviews(
          (data.reviews || []).slice(0, 3),
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const renderStars = (rating: number) =>
    Array.from({ length: 5 })
      .map((_, i) => (i < rating ? "★" : "☆"))
      .join("");

  return (
    <section
      id="reviews"
      className="section reviews"
    >
      <div className="container">
        {/* TITLE */}
        <div className="section-header">
          <h2>What clients say</h2>
        </div>

        {/* GRID */}
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-top">
                <div className="avatar">
                  {r.author_name
                    ?.charAt(0)
                    .toUpperCase()}
                </div>

                <div>
                  <div className="name">
                    {r.author_name}
                  </div>

                  <div className="stars">
                    {renderStars(r.rating)}
                  </div>
                </div>
              </div>

              <p className="text">"{r.text}"</p>

              <div className="time">
                {r.relative_time_description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
