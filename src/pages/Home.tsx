import { useState } from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Reviews from "../components/Reviews";
import Modal from "../components/Modal";
import RequestForm from "../components/RequestForm";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const close = () => {
    setOpen(false);
    setSuccess(false);
  };

  return (
    <>
      {/* ❌ НЕ main здесь — он уже есть в App.tsx */}

      <Hero openModal={() => setOpen(true)} />
      <About />
      <Services />
      <Gallery />
      <FAQ />
<Reviews/>
      <Modal open={open} onClose={close}>
        {!success ? (
          <RequestForm onSuccess={() => setSuccess(true)} />
        ) : (
          <div className="success-box">✔ Sent!</div>
        )}
      </Modal>
    </>
  );
}