import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/servicesData";

import { Helmet } from "react-helmet-async";

import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Modal from "../components/Modal";
import RequestForm from "../components/RequestForm";

import "../styles/servicePage.css";

export default function ServicePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.id === id);

  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  /* =========================
     HIDE HEADER ON MODAL
  ========================= */
  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [open]);

  if (!service) {
    return <h1>Service not found</h1>;
  }

  const close = () => {
    setOpen(false);
    setSuccess(false);
  };

  return (
    <div className="service-premium">

      <Helmet>
        <title>{service.title} | Tree Service Jacksonville</title>
        <meta name="description" content={service.full} />

        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.full} />

        <link
          rel="canonical"
          href={`https://timtreeremoval.vercel.app/services/${service.id}`}
        />
      </Helmet>

      <section className="service-hero">

        <button className="btn btn-back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="hero-grid">

          <div className="hero-image">
            <BeforeAfterSlider
              before="/before.webp"
              after="/after.webp"
            />
          </div>

          <div className="hero-content">
            <h1>{service.title}</h1>
            <p>{service.full}</p>

            <div className="hero-meta">
              <div className="meta-card">✔ Licensed team</div>
              <div className="meta-card">✔ Fully insured</div>
              <div className="meta-card">✔ Fast response</div>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => setOpen(true)}
            >
              Request service
            </button>
          </div>

        </div>
      </section>

      <section className="service-info">
        <div className="info-grid">

          <div className="info-card">
            <h3>Before work</h3>
            <p>We inspect the tree, terrain and safety risks before starting.</p>
          </div>

          <div className="info-card">
            <h3>Execution</h3>
            <p>Professional removal with modern equipment and full safety control.</p>
          </div>

          <div className="info-card">
            <h3>After work</h3>
            <p>Full cleanup, debris removal and site restoration.</p>
          </div>

        </div>
      </section>

      <Modal open={open} onClose={close}>
        {!success ? (
          <RequestForm
            serviceName={service.title}
            onSuccess={() => setSuccess(true)}
            onClose={close}
          />
        ) : (
          <div className="success-box">✔ Request sent</div>
        )}
      </Modal>

    </div>
  );
}