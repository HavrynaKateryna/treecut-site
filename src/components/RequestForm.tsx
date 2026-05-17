import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "../styles/form.css";

type Props = {
  serviceName?: string;
  onSuccess?: () => void;
  onClose?: () => void;
  showTitle?: boolean;
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
  onClose,
  showTitle = true,
}: Props) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Errors = {};

    if (!form.name || form.name.length < 2) {
      e.name = "Enter name";
    }

    if (!form.email.includes("@")) {
      e.email = "Enter valid email";
    }

    if (form.phone.replace(/\D/g, "").length < 10) {
      e.phone = "Enter valid phone";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

    try {
      const res = await fetch("http://localhost:3000/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          service: serviceName || "general",
        }),
      });

      const data = await res.json();

      if (!data.success) throw new Error();

      setSubmitted(true);

      setTimeout(() => {
        onSuccess?.();
        onClose?.();
      }, 1000);
    } catch {
      alert("Error sending form");
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="form-wrapper">
        <h2>Request sent!</h2>
      </div>
    );
  }

  return (
    <div className="form-wrapper form--modal">

      {/* 🔥 КРЕСТИК */}
      <button
        type="button"
        className="form-close"
        onClick={onClose}
      >
        ×
      </button>

      {/* 🔥 НАЗВАНИЕ (как было) */}
      {showTitle && (
        <h2>
          {serviceName
            ? `Get quote: ${serviceName}`
            : "Request a free consultation"}
        </h2>
      )}

      <form className="form" onSubmit={handleSubmit}>
        <input
          className={errors.name ? "input-error" : ""}
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          className={errors.email ? "input-error" : ""}
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          className={errors.phone ? "input-error" : ""}
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
        />

        <button
          type="submit"
          disabled={loading}
          className="form-submit"
        >
          {loading ? "Sending..." : "Send Request"}
        </button>
      </form>
    </div>
  );
}