import { useState } from "react";
import Modal from "../components/Modal";
import RequestForm from "../components/RequestForm";
import "../styles/services.css";

type Service = {
  title: string;
  description: string;
  full: string;
  image: string;
};

export default function Services() {
  const [selectedService, setSelectedService] =
    useState<Service | null>(null);

  const [showForm, setShowForm] = useState(false);

  const [showMessage, setShowMessage] =
    useState(false);

  const services: Service[] = [
    {
      title: "Спил деревьев",
      description:
        "Профессиональный спил деревьев любой сложности.",
      full: "Выполняем спил деревьев с использованием спецтехники и альпинистского снаряжения.",
      image: "/images/tree-cut.jpg",
    },
    {
      title: "Удаление аварийных деревьев",
      description:
        "Удаляем опасные деревья рядом с домами.",
      full: "Аккуратно удаляем аварийные деревья без повреждений имущества.",
      image: "/images/danger-tree.jpg",
    },
    {
      title: "Обрезка веток",
      description: "Формируем крону деревьев.",
      full: "Обрезка деревьев для здоровья растения и эстетики участка.",
      image: "/images/branches.jpg",
    },
    {
      title: "Корчевание пней",
      description: "Удаление пней с участка.",
      full: "Полное удаление пней с помощью спецтехники.",
      image: "/images/stump.jpg",
    },
  ];

  const handleClose = () => {
    setSelectedService(null);
    setShowForm(false);
    setShowMessage(false);
  };

  return (
    <section
      className="services-section"
      id="services"
    >
      <div className="container">
        <h2 className="services-title">Услуги</h2>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className="card"
              onClick={() =>
                setSelectedService(s)
              }
            >
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={!!selectedService}
        onClose={handleClose}
      >
        {selectedService && (
          <>
            <img
              src={selectedService.image}
              className="modal-img"
              alt={selectedService.title}
            />

            <h2>{selectedService.title}</h2>

            <p className="modal-description">
              {selectedService.full}
            </p>

            {!showForm && !showMessage && (
              <button
                className="order-btn"
                onClick={() => setShowForm(true)}
              >
                Заказать услугу
              </button>
            )}

            {showForm && !showMessage && (
              <RequestForm
                serviceName={
                  selectedService.title
                }
                onSuccess={() => {
                  setShowForm(false);
                  setShowMessage(true);
                }}
              />
            )}

            {showMessage && (
              <div className="success-message">
                ✅ Ваша заявка отправлена! Мы
                свяжемся с вами.
              </div>
            )}
          </>
        )}
      </Modal>
    </section>
  );
}
