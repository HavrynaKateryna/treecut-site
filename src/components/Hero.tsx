export default function Hero({ openModal }) {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <h1>Спил деревьев</h1>
        <p>
          Быстро • Безопасно • Профессионально
        </p>

        <div className="hero__buttons">
          <button
            className="btn btn-primary"
            onClick={openModal}
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </section>
  );
}
