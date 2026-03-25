import { useState } from "react";
import { Helmet } from "react-helmet";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function App() {
  const [modalOpen, setModalOpen] =
    useState<boolean>(false);

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
      <Hero
        openModal={() => setModalOpen(true)}
      />
      <FloatingButtons />
      <About />
      <Services />
      <Gallery />
      <FAQ />
      <Footer />
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
