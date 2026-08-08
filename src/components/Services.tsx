import { useNavigate } from "react-router-dom";
import { services } from "../data/servicesData";
import "../styles/services.css";

export default function Services() {
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="section services-section"
    >
      <div className="container">
        <div className="services-header">
          <h2>Our Tree Services</h2>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div
              key={s.id}
              className="service-card"
            >
              <div className="service-head">
                <div className="service-image">
                  <img
                    src={s.image}
                    srcSet={`
                      ${s.image.replace(".webp", "-mobile.webp")} 180w,
                      ${s.image} 600w
                    `}
                    sizes="(max-width: 767px) 91px, 300px"
                    alt={s.title}
                  />
                </div>

                <div className="service-title">
                  <div className="service-top">
                    <span className="service-number">
                      {s.number}
                    </span>

                    {s.tag && (
                      <span className="service-tag">
                        {s.tag}
                      </span>
                    )}
                  </div>

                  <h3>{s.title}</h3>
                </div>
              </div>

              <div className="service-content">
                <p>{s.description}</p>

                <div className="service-actions">
                  <button
                    className="service-btn"
                    onClick={() =>
                      navigate(
                        `/services/${s.id}`,
                      )
                    }
                  >
                    View details →
                  </button>

                  <a
                    href="tel:+15596804185"
                    className="service-call"
                  >
                    Call now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
