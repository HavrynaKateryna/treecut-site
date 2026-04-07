import { useState } from "react";
import type {
  ChangeEvent,
  FormEvent,
} from "react";
import "../styles/form.css";

type Props = {
  serviceName?: string;
  onSuccess?: () => void;
  showTitle?: boolean; // 👈 новый проп
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
};

export default function RequestForm({
  serviceName,
  onSuccess,
  showTitle = true, // 👈 по умолчанию заголовок показываем
}: Props) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>(
    {},
  );
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] =
    useState(false);

  const validate = () => {
    const newErrors: Errors = {};

    if (
      !form.name.trim() ||
      form.name.length < 2
    ) {
      newErrors.name =
        "Please enter your full name";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        form.email,
      )
    ) {
      newErrors.email =
        "Please enter a valid email address";
    }

    if (
      !/^\d{10,}$/.test(
        form.phone.replace(/\D/g, ""),
      )
    ) {
      newErrors.phone =
        "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

  const handleSubmit = async (e: FormEvent) => {
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
        <h3>
          Your request has been successfully
          submitted!
        </h3>
        <p>
          Our team will contact you shortly to
          discuss the details
        </p>
      </div>
    );
  }

  return (
    <div className="form-wrapper">
      {/* 👇 заголовок теперь условный */}
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
          <label>
            Project Details / Your Message
          </label>
        </div>

        <button
          type="submit"
          className="btn-primary"
          disabled={loading}
        >
          {loading
            ? "Submitting your request..."
            : "Get Free Quote"}
        </button>
      </form>
    </div>
  );
}
