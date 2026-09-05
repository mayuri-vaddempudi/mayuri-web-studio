import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import FreshCleanStockholm from './pages/FreshCleanStockholm';

function AppContent() {
  const location = useLocation();

  const isFreshCleanDemo =
    location.pathname === '/portfolio/fresh-clean-stockholm';

  return (
    <>
      <ScrollToTop />

      {!isFreshCleanDemo && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/portfolio/fresh-clean-stockholm"
          element={<FreshCleanStockholm />}
        />
      </Routes>

      {!isFreshCleanDemo && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;