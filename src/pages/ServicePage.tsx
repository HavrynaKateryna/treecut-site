import { useEffect, useState } from "react";

import {
  useParams,
  useNavigate,
  Link,
} from "react-router-dom";

import { Helmet } from "react-helmet-async";

import { services } from "../data/servicesData";

import { serviceGallery } from "../data/serviceGallery";

import BeforeAfterSlider from "../components/BeforeAfterSlider";

import Modal from "../components/Modal";

import RequestForm from "../components/RequestForm";

import "../styles/servicePage.css";

export default function ServicePage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const service = services.find(
    (item) => item.id === id,
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

  const schema = {
    "@context": "https://schema.org",

    "@type": "Service",

    name: service.h1,

    description: service.seoDescription,

    image: `https://timtreeremoval.vercel.app${service.image}`,

    provider: {
      "@type": "LocalBusiness",

      name: "Tim's Tree Service",

      areaServed: {
        "@type": "City",

        name: "Jacksonville, Florida",
      },
    },

    serviceType: service.title,
  };

  return (
    <div className="service-premium">
      <div className="container">
        <Helmet>
          <title>{service.seoTitle}</title>

          <meta
            name="description"
            content={service.seoDescription}
          />

          <meta
            name="keywords"
            content={service.seoKeywords.join(
              ", ",
            )}
          />

          <meta
            property="og:title"
            content={service.seoTitle}
          />

          <meta
            property="og:description"
            content={service.seoDescription}
          />

          <meta
            property="og:image"
            content={`https://timtreeremoval.vercel.app${service.image}`}
          />

          <link
            rel="canonical"
            href={`https://timtreemoval.vercel.app/services/${service.id}`}
          />

          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
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
                beforeAlt={`${service.title} before tree service Jacksonville Florida`}
                afterAlt={`${service.title} after professional tree service Jacksonville Florida`}
              />
            </div>

            <div className="hero-content">
              <h1>{service.h1}</h1>

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

        <section className="areas-section">
          <h2>Areas We Serve</h2>

          <p>
            {service.serviceAreasText ??
              "Tim's Tree Service proudly serves Jacksonville Florida and surrounding areas."}
          </p>
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
