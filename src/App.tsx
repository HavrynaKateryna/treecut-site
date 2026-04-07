import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Helmet>
        <title>TreeCut</title>
      </Helmet>

      {/* 👇 теперь всегда отображаются */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/services/:id"
          element={<ServicePage />}
        />
      </Routes>

      {/* 👇 тоже всегда */}
      <Footer />
    </BrowserRouter>
  );
}
