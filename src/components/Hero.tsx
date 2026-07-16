import "../styles/hero.css";

type Props = {
  openModal: () => void;
};

export default function Hero({ openModal }: Props) {
  return (
    <section className="hero">

      <div className="container hero__container">

        {/* LEFT */}

        <div className="hero__left">

          <div className="hero__badge">
            Licensed & Insured Tree Service
          </div>


          <h1>
            Fast & Safe <span>Tree Removal Services</span>
          </h1>


          <p className="hero__text">
            Professional tree removal, trimming and emergency tree services
            for residential and commercial properties throughout the area.
            Fast response and free estimates.
          </p>


          <div className="hero__trust">

            <div className="trust-item">
              ✓ Licensed & Insured
            </div>

            <div className="trust-item">
              ✓ Emergency Service
            </div>

            <div className="trust-item">
              ✓ Free Estimates
            </div>

            <div className="trust-item">
              ✓ Residential & Commercial
            </div>

          </div>


          <div className="hero__buttons">

            <button
              className="btn-primary"
              onClick={openModal}
            >
              Free Estimate
            </button>


            <a
              href="tel:+15596804185"
              className="btn-secondary"
            >
              Call Now
            </a>

          </div>


        </div>



        {/* RIGHT IMAGE */}

        <div className="hero__right">

          <div className="hero__image-wrap">

            <img
              src="/hero.png"
              alt="Tree service team"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />

          </div>

        </div>


      </div>

    </section>
  );
}