import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Helmet>
          <title>TreeCut</title>
          <meta
            name="description"
            content="Спил деревьев, обрезка и вывоз мусора"
          />
        </Helmet>

        <div className="app-layout">
          <Header />

          <main className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/:id" element={<ServicePage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}