export default function Services() {
  const services = [
    "Спил деревьев",
    "Удаление аварийных деревьев",
    "Обрезка веток",
    "Корчевание пней",
  ];

  return (
    <section
      id="services"
      className="services-section"
    >
      <div className="container">
        <h2 className="services-title">Услуги</h2>

        <div className="services-grid">
          {services.map((item, i) => (
            <div className="card" key={i}>
              <h3>{item}</h3>
              <p>
                Профессиональное выполнение работы
                с гарантией качества и соблюдением
                техники безопасности.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
