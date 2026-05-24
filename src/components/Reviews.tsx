import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  // 🔥 load only on page refresh / mount
  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        setReviews((data.reviews || []).slice(0, 3)); // only 3 reviews
      })
      .catch((err) => console.log(err));
  }, []);

  const renderStars = (rating: number) =>
    Array.from({ length: 5 })
      .map((_, i) => (i < rating ? "★" : "☆"))
      .join("");

  return (
    <section className="reviews" id="reviews">
      <div className="container">

        {/* TITLE */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2>What clients say</h2>
        </motion.div>

        {/* GRID */}
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <motion.div
              className="review-card"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
            >
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}