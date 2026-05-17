import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/servicesData";

import Modal from "../components/Modal";
import RequestForm from "../components/RequestForm";

export default function ServicePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.id === id);

  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!service) return <h2>Not found</h2>;

  const close = () => {
    setOpen(false);
    setSuccess(false);
  };

  return (
    <div className="service-page container">

      <button onClick={() => navigate(-1)}>
        ← Back
      </button>

      <img src={service.image} />
      <h1>{service.title}</h1>
      <p>{service.full}</p>

      {/* 🔥 КНОПКА */}
      <button onClick={() => setOpen(true)}>
        Request this service
      </button>

      {/* 🔥 МОДАЛКА */}
      <Modal open={open} onClose={close}>
        {!success ? (
          <RequestForm
            serviceName={service.title}
            onSuccess={() => setSuccess(true)}
          />
        ) : (
          <div className="success-box">✔ Sent!</div>
        )}
      </Modal>
    </div>
  );
}