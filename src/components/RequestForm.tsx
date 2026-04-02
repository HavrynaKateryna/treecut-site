import { useState } from "react";
import "../styles/form.css";

type Props = {
  serviceName?: string;
  onSuccess?: () => void;
};

export default function RequestForm({
  serviceName,
  onSuccess,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] =
    useState(false);

  const validate = () => {
    const newErrors: any = {};

    if (
      !form.name.trim() ||
      form.name.length < 2
    ) {
      newErrors.name = "Введите имя";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        form.email,
      )
    ) {
      newErrors.email = "Некорректный email";
    }

    if (
      !/^\d{10,}$/.test(
        form.phone.replace(/\D/g, ""),
      )
    ) {
      newErrors.phone = "Некорректный телефон";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    await new Promise((r) => setTimeout(r, 1200));

    console.log({
      ...form,
      service: serviceName || "general",
    });

    setLoading(false);
    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    onSuccess?.();
  };

  if (submitted) {
    return (
      <div className="success-box">
        <div className="checkmark">✔</div>
        <h3>Заявка отправлена!</h3>
        <p>
          Мы свяжемся с вами в ближайшее время
        </p>
      </div>
    );
  }

  return (
    <div className="form-wrapper">
      <h2>
        {serviceName
          ? `Заказать: ${serviceName}`
          : "Оставить заявку"}
      </h2>

      <form
        className="form"
        onSubmit={handleSubmit}
      >
        {/* NAME */}
        <div className="input-group">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder=" "
          />
          <label>Имя</label>
          {errors.name && (
            <span className="error">
              {errors.name}
            </span>
          )}
        </div>

        {/* EMAIL */}
        <div className="input-group">
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder=" "
          />
          <label>Email</label>
          {errors.email && (
            <span className="error">
              {errors.email}
            </span>
          )}
        </div>

        {/* PHONE */}
        <div className="input-group">
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder=" "
          />
          <label>Телефон</label>
          {errors.phone && (
            <span className="error">
              {errors.phone}
            </span>
          )}
        </div>

        {/* MESSAGE */}
        <div className="input-group">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder=" "
          />
          <label>Комментарий</label>
        </div>

        <button
          type="submit"
          className="btn-primary"
          disabled={loading}
        >
          {loading ? "Отправка..." : "Отправить"}
        </button>
      </form>
    </div>
  );
}
