import { useState } from "react";
import type {
  ChangeEvent,
  FormEvent,
} from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormData = {
  name: string;
  phone: string;
  email: string;
  question: string;
};

type FormErrors = Partial<
  Record<keyof FormData, string>
>;

export default function Modal({
  open,
  onClose,
}: ModalProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    question: "",
  });

  const [errors, setErrors] =
    useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (
      !form.name.trim() ||
      form.name.trim().length < 2
    )
      newErrors.name =
        "Enter a valid name (min 2 characters)";

    const phoneRegex = /^[0-9+\-\s()]{7,}$/;
    if (!phoneRegex.test(form.phone))
      newErrors.phone =
        "Enter a valid phone number";

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email))
      newErrors.email =
        "Enter a valid email address";

    const wordCount = form.question.trim()
      ? form.question.trim().split(/\s+/).length
      : 0;
    if (wordCount < 3)
      newErrors.question =
        "Question must contain at least 3 words";
    if (wordCount > 50)
      newErrors.question =
        "Question is too long (max 50 words)";

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

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    await new Promise((resolve) =>
      setTimeout(resolve, 1500),
    );

    console.log(form);

    setForm({
      name: "",
      phone: "",
      email: "",
      question: "",
    });
    setErrors({});
    setLoading(false);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        {!success ? (
          <>
            <h2>Submit a request</h2>
            <form
              className="form"
              onSubmit={handleSubmit}
              noValidate
            >
              <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="error">
                  {errors.name}
                </span>
              )}

              <input
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="error">
                  {errors.phone}
                </span>
              )}

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error">
                  {errors.email}
                </span>
              )}

              <textarea
                name="question"
                placeholder="Your question"
                value={form.question}
                onChange={handleChange}
              />
              <small>
                Words:{" "}
                {form.question.trim()
                  ? form.question
                      .trim()
                      .split(/\s+/).length
                  : 0}{" "}
                / 50
              </small>
              {errors.question && (
                <span className="error">
                  {errors.question}
                </span>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h2>Request successfully sent ✅</h2>
          </div>
        )}
        <button
          className="modal-close"
          onClick={onClose}
        >
          ✖
        </button>
      </div>
    </div>
  );
}
