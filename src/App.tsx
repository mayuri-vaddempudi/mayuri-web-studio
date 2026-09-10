import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import FreshCleanStockholm from './pages/FreshCleanStockholm';

function AppContent() {
  const location = useLocation();
  const { i18n } = useTranslation();

  const isFreshCleanDemo =
    location.pathname === '/portfolio/fresh-clean-stockholm';

  // Update the HTML language attribute when the user
  // switches between English and Swedish.
  useEffect(() => {
    document.documentElement.lang =
      i18n.language.startsWith('sv') ? 'sv' : 'en';
  }, [i18n.language]);

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
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />

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