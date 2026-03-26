import { useState, useEffect } from "react";
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneInput, setPhoneInput] =
    useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState<{
    [key: string]: string;
  }>({});

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
      description: "Формируем крону.",
      full: "Обрезка деревьев для здоровья растения.",
      image: "/images/branches.jpg",
    },
    {
      title: "Корчевание пней",
      description: "Удаление пней.",
      full: "Полное удаление пней с участка.",
      image: "/images/stump.jpg",
    },
  ];

  // Закрытие модалки по Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (selectedService) {
      document.body.style.overflow = "hidden";
      window.addEventListener(
        "keydown",
        handleEsc,
      );
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener(
        "keydown",
        handleEsc,
      );
    };
  }, [selectedService]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } =
      {};
    if (!name || name.trim().length < 2)
      newErrors.name = "Введите корректное имя";
    if (
      !email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    )
      newErrors.email =
        "Введите корректный email";
    if (
      !phoneInput ||
      !/^\d{10,}$/.test(
        phoneInput.replace(/\D/g, ""),
      )
    )
      newErrors.phone =
        "Введите корректный телефон";
    return newErrors;
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhoneInput("");
    setComment("");
    setErrors({});
    setShowForm(false);
  };

  const handleClose = () => {
    setSelectedService(null);
    clearForm();
    setShowMessage(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);
      return;
    }

    // Здесь можно добавить отправку на EmailJS / WhatsApp

    clearForm();
    setShowMessage(true); // показываем сообщение о успешной отправке
  };

  return (
    <section
      id="services"
      className="services-section"
    >
      <div className="container">
        <h2 className="services-title">Услуги</h2>
        <div className="services-grid">
          {services.map((item, i) => (
            <div
              className="card"
              key={i}
              onClick={() => {
                setSelectedService(item);
                setShowForm(false);
                setShowMessage(false);
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div
          className="modal-overlay"
          onClick={handleClose}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={handleClose}
            >
              ✕
            </button>

            <img
              src={selectedService.image}
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
              <form
                className="order-form"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />
                {errors.name && (
                  <span className="error">
                    {errors.name}
                  </span>
                )}

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />
                {errors.email && (
                  <span className="error">
                    {errors.email}
                  </span>
                )}

                <input
                  type="tel"
                  placeholder="Телефон"
                  value={phoneInput}
                  onChange={(e) =>
                    setPhoneInput(e.target.value)
                  }
                />
                {errors.phone && (
                  <span className="error">
                    {errors.phone}
                  </span>
                )}

                <textarea
                  placeholder="Комментарий"
                  value={comment}
                  onChange={(e) =>
                    setComment(e.target.value)
                  }
                />

                <button
                  type="submit"
                  className="order-btn"
                >
                  Отправить заявку
                </button>
              </form>
            )}

            {showMessage && (
              <div className="success-message">
                ✅ Ваша заявка отправлена! Мы
                свяжемся с вами в ближайшее время.
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
