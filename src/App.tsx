import { useState } from "react";
import { Helmet } from "react-helmet-async";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function App() {
  const [modalOpen, setModalOpen] =
    useState(false);

  return (
    <>
      <Helmet>
        <title>TreeCut</title>
        <link
          rel="icon"
          type="image/png"
          href="/favicon.png"
        />
        <meta
          name="description"
          content="Описание моего лендинга"
        />
      </Helmet>

      <Header />

      {/* важно — структура */}
      <main>
        <Hero
          openModal={() => setModalOpen(true)}
        />
        <About />
        <Services />
        <Gallery />
        <FAQ />
      </main>

      <Footer />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
