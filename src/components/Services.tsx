import { useNavigate } from "react-router-dom";
import { services } from "../data/servicesData";
import "../styles/services.css";

export default function Services() {
  const navigate = useNavigate();

  return (
    <section
      className="services-section"
      id="services"
    >
      <div className="container">
        <h2 className="services-title">
          Services
        </h2>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.id} className="card">
              <h3>{s.title}</h3>
              <p>{s.description}</p>

              <button
                className="details-btn"
                onClick={() =>
                  navigate(`/services/${s.id}`)
                }
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
