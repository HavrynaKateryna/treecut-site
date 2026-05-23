import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("active");
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className="about__card">

          <div className="about__text">
            <h2>Welcome to Tim’s Tree Service!</h2>

            <p>A family-owned company with over 8 years of experience in professional tree removal.</p>

            <p>We help homeowners safely and effortlessly handle any tree removal needs. From assessment to cleanup — everything is fully managed.</p>

            <p>We focus on reliability, precision, and safety using professional equipment and an experienced team.</p>

            <p>Every property is treated with care and respect as if it were our own.</p>
          </div>

          <div className="about__image">
            <img src="/1.jpg" alt="Our team" />
          </div>

        </div>
      </div>
    </section>
  );
}