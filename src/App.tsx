import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingCTA from "./components/RightFloatingCTA";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Helmet>
          <title>TreeCut | Tree Removal Jacksonville FL</title>
          <meta
            name="description"
            content="Professional tree removal, trimming and stump grinding in Jacksonville Florida."
          />
          <meta name="theme-color" content="#ef6d14" />
        </Helmet>

        <div className="app-layout">
          <Header />

          <main className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/:id" element={<ServicePage />} />

              {/* ADMIN */}
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>

          <Footer />
        </div>

        <FloatingCTA />
      </BrowserRouter>
    </HelmetProvider>
  );
}