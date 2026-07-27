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
};

export default function RequestForm({
  serviceName,
  onSuccess,
  onClose,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  /* =====================================================
     HANDLE CHANGE
  ===================================================== */

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* =====================================================
     VALIDATION
  ===================================================== */

  const validateForm = () => {
    if (!form.name.trim()) {
      alert("Please enter your name");

      return false;
    }

    if (
      !form.email.trim() ||
      !form.email.includes("@")
    ) {
      alert("Please enter a valid email");

      return false;
    }

    if (
      !form.phone.trim() ||
      form.phone.length < 7
    ) {
      alert("Please enter a valid phone number");

      return false;
    }

    if (!form.message.trim()) {
      alert("Please enter your message");

      return false;
    }

    return true;
  };

  /* =====================================================
     SUBMIT
  ===================================================== */

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    if (loading) return;

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/lead`,
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

      if (!res.ok || data?.success === false) {
        throw new Error(
          data?.error || "Request failed",
        );
      }

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setLoading(false);

      /*
        Give the user time to see
        the success message.
      */

      setTimeout(() => {
        onSuccess?.();

        onClose?.();
      }, 1200);
    } catch (error) {
      console.error("Form error:", error);

      setLoading(false);

      alert(
        "Something went wrong. Try again later.",
      );
    }
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <div className="form-wrapper">
      {/* CLOSE */}

      <button
        type="button"
        className="form-close"
        onClick={onClose}
        aria-label="Close form"
      >
        ×
      </button>

      {/* TITLE */}

      <h2 className="form-title">
        {serviceName
          ? `Get quote: ${serviceName}`
          : "Request service"}
      </h2>

      {/* SUCCESS */}

      {success && (
        <div
          className="success-message"
          role="status"
          aria-live="polite"
        >
          Request sent successfully
        </div>
      )}

      {/* FORM */}

      <form
        className="form"
        onSubmit={handleSubmit}
      >
        {/* NAME */}

        <input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          required
        />

        {/* EMAIL */}

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />

        {/* PHONE */}

        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          autoComplete="tel"
          required
        />

        {/* MESSAGE */}

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        {/* SUBMIT */}

        <button
          className="form-submit"
          disabled={loading}
          type="submit"
        >
          {loading
            ? "Sending..."
            : "Send Request"}
        </button>
      </form>
    </div>
  );
}
