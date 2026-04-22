import { useState } from "react";
import type {
  ChangeEvent,
  FormEvent,
} from "react";
import "../styles/form.css";

type Props = {
  serviceName?: string;
  onSuccess?: () => void;
  showTitle?: boolean;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  hiddenField: string; // антиспам
};

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
};

export default function RequestForm({
  serviceName,
  onSuccess,
  showTitle = true,
}: Props) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
    hiddenField: "", // антиспам
  });

  const [errors, setErrors] = useState<Errors>(
    {},
  );
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] =
    useState(false);

  // ✅ ВАЛИДАЦИЯ
  const validate = () => {
    const newErrors: Errors = {};

    if (
      !form.name.trim() ||
      form.name.length < 2
    ) {
      newErrors.name = "Enter your name";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        form.email,
      )
    ) {
      newErrors.email = "Invalid email";
    }

    if (
      !/^\d{10,}$/.test(
        form.phone.replace(/\D/g, ""),
      )
    ) {
      newErrors.phone = "Invalid phone";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ INPUT CHANGE
  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 🚀 ОТПРАВКА
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:3000/api/lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            service: serviceName || "general",
          }),
        },
      );

      const data = await res.json();

      if (!data.success) {
        throw new Error("Ошибка");
      }

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        hiddenField: "",
      });

      onSuccess?.();

      // ✅ WhatsApp переход
      setTimeout(() => {
        window.location.href =
          "https://wa.me/79001234567?text=Я оставил заявку на сайте";
      }, 1500);
    } catch (err) {
      alert("Ошибка отправки заявки");
    }

    setLoading(false);
  };

  // ✅ SUCCESS UI
  if (submitted) {
    return (
      <div className="success-box">
        <div className="checkmark">✔</div>
        <h3>Заявка отправлена!</h3>
        <p>Мы скоро свяжемся с вами</p>
      </div>
    );
  }

  return (
    <div className="form-wrapper">
      {showTitle && (
        <h2>
          {serviceName
            ? `Get a quote for: ${serviceName}`
            : "Request a free consultation"}
        </h2>
      )}

      <form
        className="form"
        onSubmit={handleSubmit}
      >
        {/* АНТИСПАМ */}
        <input
          type="text"
          name="hiddenField"
          value={form.hiddenField}
          onChange={handleChange}
          style={{ display: "none" }}
        />

        {/* NAME */}
        <div className="input-group">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder=" "
          />
          <label>Full Name</label>
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
          <label>Email Address</label>
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
          <label>Phone Number</label>
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
          <label>Project Details / Message</label>
        </div>

        <button type="submit" disabled={loading}>
          {loading
            ? "Sending..."
            : "Get Free Quote"}
        </button>
      </form>
    </div>
  );
}
