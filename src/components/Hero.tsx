type Props = {
  openModal: () => void;
};

export default function Hero({ openModal }: Props) {
  return (
    <section className="hero">
      <img
        src="/hero.webp"
        alt=""
        className="hero__bg"
        decoding="async"
        fetchPriority="high"
      />

      <div className="hero__overlay" />

      <div className="hero__content">
        <h1>
          Removal's <span>Trees</span> Jacksonville
        </h1>

        <p>
          Safe. Fast. Insured. We handle everything from small cuts to
          large hazardous tree removals across Jacksonville.
        </p>

        <div className="hero__buttons">
          <button className="btn btn-primary" onClick={openModal}>
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}