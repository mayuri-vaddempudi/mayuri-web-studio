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
import NordicBeautyStudio from './pages/NordicBeautyStudio';
import SpiceHouse from './pages/SpiceHouse';

function AppContent() {
  const location = useLocation();
  const { i18n } = useTranslation();


  const isPortfolioDemo =
    location.pathname === '/portfolio/fresh-clean-stockholm' ||
    location.pathname === '/portfolio/nordic-beauty-studio' ||
    location.pathname === '/portfolio/spice-house';

  // Update the HTML language attribute when the user
  // switches between English and Swedish.
  useEffect(() => {
    document.documentElement.lang =
      i18n.language.startsWith('sv') ? 'sv' : 'en';
  }, [i18n.language]);

  return (
    <>
      <ScrollToTop />

      {!isPortfolioDemo && <Header />}

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
        <Route
          path="/portfolio/nordic-beauty-studio"
          element={<NordicBeautyStudio />}
        />
        <Route
          path="/portfolio/spice-house"
          element={<SpiceHouse />}
        />
      </Routes>

      {!isPortfolioDemo && <Footer />}
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