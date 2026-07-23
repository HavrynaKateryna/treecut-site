import { useState, useEffect } from "react";
import {
  useParams,
  useNavigate,
  Link,
} from "react-router-dom";

import { services } from "../data/servicesData";
import { serviceGallery } from "../data/serviceGallery";

import { Helmet } from "react-helmet-async";

import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Modal from "../components/Modal";
import RequestForm from "../components/RequestForm";

import "../styles/servicePage.css";

export default function ServicePage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const service = services.find(
    (s) => s.id === id,
  );

  const gallery = serviceGallery.find(
    (item) => item.id === id,
  );

  const [open, setOpen] = useState(false);

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove(
        "modal-open",
      );
    }

    return () => {
      document.body.classList.remove(
        "modal-open",
      );
    };
  }, [open]);

  if (!service) {
    navigate("/services", {
      replace: true,
    });

    return null;
  }

  const close = () => {
    setOpen(false);

    setSuccess(false);
  };

  return (
    <div className="service-premium">
      <div className="container">
        <Helmet>
          <title>
            {service.title} | Tree Service
            Jacksonville
          </title>

          <meta
            name="description"
            content={service.full}
          />

          <link
            rel="canonical"
            href={`https://timtreeremoval.vercel.app/services/${service.id}`}
          />
        </Helmet>

        <section className="service-hero">
          <Link
            to="/#services"
            className="btn btn-back"
          >
            ← All Services
          </Link>

          <div className="hero-grid">
            <div className="hero-image">
              <BeforeAfterSlider
                before={
                  gallery?.before ??
                  "/images/default-before.webp"
                }
                after={
                  gallery?.after ??
                  "/images/default-after.webp"
                }
                title={service.title}
              />
            </div>

            <div className="hero-content">
              <h1>{service.title}</h1>

              <button
                className="btn btn-primary service-btn"
                onClick={() => setOpen(true)}
              >
                Request service
              </button>

              <p className="service-description">
                {service.full}
              </p>

              <div className="hero-meta">
                {service.highlights.map(
                  (item) => (
                    <div
                      className="meta-card"
                      key={item}
                    >
                      ✔ {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="service-info">
          <div className="info-grid">
            <div className="info-card">
              <h3>Inspection & Planning</h3>

              <p className="service-process-text">
                {service.beforeWork}
              </p>
            </div>

            <div className="info-card">
              <h3>Safe Tree Service</h3>

              <p className="service-process-text">
                {service.execution}
              </p>
            </div>

            <div className="info-card">
              <h3>Cleanup & Final Result</h3>

              <p className="service-process-text">
                {service.afterWork}
              </p>
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
            <div className="success-box">
              ✔ Request sent
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
