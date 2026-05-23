import { useEffect, useRef, useState } from "react";
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
  const [reviews, setReviews] = useState<Review[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        setReviews(data.reviews || []);
      })
      .catch((err) => console.log(err));
  }, []);

  // ⭐ animation on scroll (re-trigger every time)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".review-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            card.classList.add("active");
          } else {
            card.classList.remove("active"); // allows re-animation
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [reviews]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 })
      .map((_, i) => (i < rating ? "★" : "☆"))
      .join("");
  };

  return (
    <section className="reviews" id="reviews" ref={sectionRef}>
      <div className="container">

        <div className="section-header">
          <h2>What clients say</h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-top">
                <div className="avatar">
                  {r.author_name?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <div className="name">{r.author_name}</div>
                  <div className="stars">{renderStars(r.rating)}</div>
                </div>
              </div>

              <p className="text">"{r.text}"</p>

              <div className="time">{r.relative_time_description}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}