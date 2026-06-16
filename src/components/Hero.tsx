type Props = {
  openModal: () => void;
};

export default function Hero({ openModal }: Props) {
  return (
    <section className="hero">
      <img
        src="/hero.webp"
        alt="Tree removal services"
        className="hero__bg"
        fetchPriority="high"
        decoding="async"
      />

      <div className="hero__overlay" />

      <div className="hero__content container">
        <p className="hero__sub">Licensed & Insured Tree Service</p>

        <h1>
          Fast & Safe <span>Tree Removal Services</span>
        </h1>

        <p className="hero__text">
          Professional tree removal, trimming, and emergency services for residential and commercial properties.
          Fast response and free estimates.
        </p>

        <p className="hero__trust">
          Emergency & scheduled service • Residential & commercial • Fully insured
        </p>

        <div className="hero__buttons">
          <button className="btn-primary" onClick={openModal}>
            Get Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
}