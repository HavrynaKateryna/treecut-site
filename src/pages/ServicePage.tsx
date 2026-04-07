import {
  useParams,
  useNavigate,
} from "react-router-dom";
import { services } from "../data/servicesData";
import RequestForm from "../components/RequestForm";
import "../styles/servicePage.css";

export default function ServicePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services.find(
    (s) => s.id === id,
  );

  if (!service) return <h2>Услуга не найдена</h2>;

  return (
    <div className="container service-page">
      {/* BACK BUTTON */}
      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      {/* IMAGE */}
      <img
        src={service.image}
        alt={service.title}
        className="service-image"
      />

      {/* TITLE */}
      <h1>{service.title}</h1>

      {/* DESCRIPTION */}
      <p>{service.full}</p>

      {/* FORM (без заголовка) */}
      <RequestForm
        serviceName={service.title}
        showTitle={false}
      />
    </div>
  );
}
