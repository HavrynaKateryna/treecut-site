import { useState } from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";

import Modal from "../components/Modal";
import RequestForm from "../components/RequestForm";

export default function Home() {
  const [modalOpen, setModalOpen] =
    useState(false);
  const [formSuccess, setFormSuccess] =
    useState(false);

  return (
    <>
      <main>
        <Hero
          openModal={() => setModalOpen(true)}
        />
        <About />
        <Services />
        <Gallery />
        <FAQ />
      </main>

      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setFormSuccess(false);
        }}
      >
        {!formSuccess ? (
          <RequestForm
            onSuccess={() => setFormSuccess(true)}
          />
        ) : (
          <div className="success-message">
            ✅ Заявка отправлена!
          </div>
        )}
      </Modal>
    </>
  );
}
