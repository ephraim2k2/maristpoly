import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Academics', to: '/academics' },
    { label: 'Campus', to: '/campus' },
    { label: 'Events', to: '/events' },
    { label: 'Contact', to: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        setScrollWidth((scrollTop / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div id="scrollProgress" style={{ width: `${scrollWidth}%` }} />
      <nav className={`site-nav ${isScrolled ? 'scrolled' : ''}`} id="siteNav">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <img src="/img/maristlogo.png" alt="Marist Logo" />
          <div className="nav-logo-text">
            <div className="brand">MARIST</div>
            <div className="sub">Polytechnic Enugu</div>
          </div>
        </Link>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={location.pathname === link.to ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="nav-cta" onClick={() => window.open('#', '_self')}>School Portal</button>
          <button
            className="hamburger"
            id="hamburger"
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
          <Link to="/">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            Home
          </Link>
          <Link to="/about">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            About
          </Link>
          <Link to="/academics">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            </svg>
            Academics
          </Link>
          <Link to="/campus">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="7" width="20" height="14" rx="2" />
            </svg>
            Campus
          </Link>
          <Link to="/events">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
            </svg>
            Events
          </Link>
          <Link to="/contact">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            </svg>
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};
