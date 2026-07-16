import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

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

  const service = services.find((s) => s.id === id);

  const gallery = serviceGallery.find(
    (item) => item.id === id
  );

  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);


  // Hide header when modal open
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
    navigate("/services", { replace: true });
    return null;
  }


  const close = () => {
    setOpen(false);
    setSuccess(false);
  };


  return (
    <div className="service-premium">


      <Helmet>

        <title>
          {service.title} | Tree Service Jacksonville
        </title>


        <meta
          name="description"
          content={service.full}
        />


        <link
          rel="canonical"
          href={`https://timtreeremoval.vercel.app/services/${service.id}`}
        />


        {/* Open Graph */}

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content={service.title}
        />

        <meta
          property="og:description"
          content={service.full}
        />


        {gallery && (
          <meta
            property="og:image"
            content={`https://timtreeremoval.vercel.app${gallery.after}`}
          />
        )}


        {/* Twitter */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={service.title}
        />

        <meta
          name="twitter:description"
          content={service.full}
        />


        {gallery && (
          <meta
            name="twitter:image"
            content={`https://timtreeremoval.vercel.app${gallery.after}`}
          />
        )}


        {/* Schema.org */}

        <script type="application/ld+json">
          {JSON.stringify({

            "@context": "https://schema.org",

            "@type": "Service",

            serviceType: service.title,

            description: service.full,

            image: gallery
              ? `https://timtreeremoval.vercel.app${gallery.after}`
              : undefined,


            provider: {

              "@type": "LocalBusiness",

              name: "Tim Tree Removal",

              areaServed: "Jacksonville, Florida",

            },


            url:
              `https://timtreeremoval.vercel.app/services/${service.id}`

          })}
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


              title={service.title}

            />


          </div>




          <div className="hero-content">


            <h1>
              {service.title}
            </h1>


            <p>
              {service.full}
            </p>



            <div className="hero-meta">


              <div className="meta-card">
                ✔ Licensed team
              </div>


              <div className="meta-card">
                ✔ Fully insured
              </div>


              <div className="meta-card">
                ✔ Fast response
              </div>


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

            <h3>
              Before work
            </h3>

            <p>
              We inspect the tree, terrain and safety risks before starting.
            </p>

          </div>




          <div className="info-card">

            <h3>
              Execution
            </h3>

            <p>
              Professional removal with modern equipment and full safety control.
            </p>

          </div>





          <div className="info-card">

            <h3>
              After work
            </h3>

            <p>
              Full cleanup, debris removal and site restoration.
            </p>

          </div>



        </div>


      </section>





      <Modal
        open={open}
        onClose={close}
      >

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
  );
}