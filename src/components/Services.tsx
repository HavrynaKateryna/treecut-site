import { useNavigate } from "react-router-dom";
import { services } from "../data/servicesData";
import { useEffect, useRef, useState } from "react";
import "../styles/services.css";

export default function Services() {
  const navigate = useNavigate();
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      className={`services-section ${show ? "show" : ""}`}
    >
      <div className="container">

        <h2 className="services-title">Services</h2>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.id} className="service-card">

              <h3>{s.title}</h3>

              <p>{s.description}</p>

              <button
                className="service-btn"
                onClick={() => navigate(`/services/${s.id}`)}
              >
                View details
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}