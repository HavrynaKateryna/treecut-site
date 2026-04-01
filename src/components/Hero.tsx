type Props = {
  openModal: () => void;
};

export default function Hero({
  openModal,
}: Props) {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <h1>Removal's Trees Jacksonville</h1>
        <p>Crane & Large Tree Specialists</p>

        <div className="hero__buttons">
          <button
            className="btn btn-primary"
            onClick={openModal}
          >
            Request a quote
          </button>
        </div>
      </div>
    </section>
  );
}
