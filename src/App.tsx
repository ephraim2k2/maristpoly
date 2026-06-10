import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CustomCursor } from './components/CustomCursor';
import { NewsTicker } from './components/NewsTicker';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { CampusPage } from './pages/CampusPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <NewsTicker />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/campus" element={<CampusPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
