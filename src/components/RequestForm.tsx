import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

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
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};

    if (form.name.trim().length < 2) {
      e.name = "Enter valid name";
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
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          service: serviceName || "general",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data?.error || "Request failed");
      }

      // ✅ SHOW SUCCESS FIRST
      setSuccess(true);
      setLoading(false);

      // clear form immediately
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // optional auto-close
      setTimeout(() => {
        onSuccess?.();
        onClose?.();
        setSuccess(false);
      }, 2500);

    } catch (err) {
      console.error("Form submit error:", err);
      setLoading(false);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="form-wrapper">

      <button
        type="button"
        className="form-close"
        onClick={() => onClose?.()}
      >
        ×
      </button>

      {showTitle && (
        <h2 className="form-title">
          {serviceName
            ? `Get quote: ${serviceName}`
            : "Request a free consultation"}
        </h2>
      )}

      {/* SUCCESS MESSAGE (now stable) */}
      {success && (
        <div className="success-message">
          ✅ Request sent successfully!
        </div>
      )}

      <form className="form" onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className={errors.phone ? "input-error" : ""}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit" className="form-submit" disabled={loading}>
          {loading ? "Sending..." : "Send Request"}
        </button>

      </form>
    </div>
  );
}