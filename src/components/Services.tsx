import { useNavigate } from "react-router-dom";
import { services } from "../data/servicesData";
import "../styles/services.css";

export default function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="services-section">

      <div className="container">

        <div className="services-header">
          <h2>Our Tree Services</h2>

          <p>
            Safe, fast and professional tree care for residential and commercial properties.
          </p>
        </div>

        <div className="services-grid">

          {services.map((s) => (
            <div key={s.id} className="service-card">

              <h3>{s.title}</h3>

              <p>{s.description}</p>

              <div className="service-actions">

                <button
                  className="service-btn"
                  onClick={() => navigate(`/services/${s.id}`)}
                >
                  View details
                </button>

                <a href="tel:+15596804185" className="service-call">
                  Call now
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}