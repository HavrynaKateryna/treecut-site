import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// 🔥 CTA (floating buttons)
import FloatingCTA from "./components/RightFloatingCTA";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />

        {/* GLOBAL SEO */}
        <Helmet>
          <title>TreeCut | Tree Removal Jacksonville FL</title>
          <meta
            name="description"
            content="Professional tree removal, trimming and stump grinding in Jacksonville Florida. Fast, safe and insured service."
          />

          {/* mobile UX + branding */}
          <meta name="theme-color" content="#ef6d14" />
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

        {/* 🔥 GLOBAL CONVERSION LAYER (ВАЖНО: ВНЕ layout) */}
        <FloatingCTA />
      </BrowserRouter>
    </HelmetProvider>
  );
}