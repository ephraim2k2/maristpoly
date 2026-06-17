import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const hubProducts = [
  {
    name: 'Pixpay',
    desc: 'Pay Fees Easily',
    image: '/img/pixpay-removebg-preview.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    color: 'rgba(201,168,76,0.12)',
    borderColor: 'rgba(201,168,76,0.3)',
    link: '#',
  },
  {
    name: 'Smart ID',
    desc: 'Digital Smart Cards',
    image: '/img/Ellipse_8-removebg-preview.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <circle cx="8" cy="12" r="2" />
        <path d="M14 10h4M14 14h4" />
      </svg>
    ),
    color: 'rgba(139,0,0,0.08)',
    borderColor: 'rgba(139,0,0,0.25)',
    link: '#',
  },
  {
    name: 'Zora Care',
    desc: 'Unified Student Portal',
    image: '/img/zora-removebg-preview.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: 'rgba(76,175,80,0.1)',
    borderColor: 'rgba(76,175,80,0.3)',
    link: '#',
  },
  {
    name: 'School Portal',
    desc: 'Access Academic Records',
    image: '/img/maristlogo.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    color: 'rgba(33,150,243,0.1)',
    borderColor: 'rgba(33,150,243,0.3)',
    link: '#',
  },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [isTansianOpen, setIsTansianOpen] = useState(false);
  const [isMobileTansianOpen, setIsMobileTansianOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isMobileAcademicsOpen, setIsMobileAcademicsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const academicsDropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

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

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsTansianOpen(false);
      }
      if (academicsDropdownRef.current && !academicsDropdownRef.current.contains(e.target as Node)) {
        setIsAcademicsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsTansianOpen(false);
    setIsMobileTansianOpen(false);
    setIsAcademicsOpen(false);
    setIsMobileAcademicsOpen(false);
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
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Link>
          </li>
          <li className="nav-dropdown-li" ref={academicsDropdownRef}>
            <button
              className={`nav-dropdown-toggle ${isAcademicsOpen ? 'active' : ''} ${location.pathname.startsWith('/academics') ? 'active-page' : ''}`}
              onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
            >
              Academics
              <svg
                className={`tansian-hub-chevron ${isAcademicsOpen ? 'open' : ''}`}
                width="12" height="12" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div className={`nav-dropdown-menu ${isAcademicsOpen ? 'open' : ''}`}>
              <ul className="nav-dropdown-list">
                <li>
                  <Link to="/academics" className="nav-dropdown-item font-semibold">
                    Academics Overview
                  </Link>
                </li>
                <li className="dropdown-divider" />
                <li>
                  <a href="#" className="nav-dropdown-item" onClick={(e) => { e.preventDefault(); alert("E-library coming soon!"); }}>
                    E-library
                  </a>
                </li>
                <li>
                  <Link to="/organigram" className="nav-dropdown-item">
                    Organigram & Job Description
                  </Link>
                </li>
                <li>
                  <Link to="/academics#resources" className="nav-dropdown-item">
                    Handbook on Condition of Service
                  </Link>
                </li>
                <li>
                  <Link to="/strategic-plan" className="nav-dropdown-item">
                    Strategic Development Plan
                  </Link>
                </li>
                <li>
                  <Link to="/campus#dresscode" className="nav-dropdown-item">
                    Departmental Wears
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/campus" className={location.pathname === '/campus' ? 'active' : ''}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="/events" className={location.pathname === '/events' ? 'active' : ''}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </li>
          <li className="tansian-hub-li" ref={dropdownRef}>
            <button
              className={`tansian-hub-toggle ${isTansianOpen ? 'active' : ''}`}
              onClick={() => setIsTansianOpen(!isTansianOpen)}
            >
              <span className="tansian-hub-dot" />
              Digital services
              <svg
                className={`tansian-hub-chevron ${isTansianOpen ? 'open' : ''}`}
                width="12" height="12" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div className={`tansian-mega-dropdown ${isTansianOpen ? 'open' : ''}`}>
              <div className="tansian-mega-inner">
                {/* Removed mega header as requested */}
                <div className="tansian-mega-cards">
                  {hubProducts.map((product) => (
                    <a
                      key={product.name}
                      href={product.link}
                      className="tansian-product-card"
                      style={{
                        '--card-bg': product.color,
                        '--card-border': product.borderColor,
                      } as React.CSSProperties}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
                        {product.image ? (
                          <div className="tansian-product-image-small" style={{ width: '56px', height: '56px', borderRadius: '3px', overflow: 'hidden', flexShrink: 0 }}>
                            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                        ) : (
                          <div className="tansian-product-icon">
                            {product.icon}
                          </div>
                        )}
                        <div className="tansian-product-info">
                          <h4 className="tansian-product-name" style={{ fontSize: '15px', fontWeight: 700, margin: '0 0 4px 0', color: 'var(--text)' }}>{product.name}</h4>
                          <p className="tansian-product-desc" style={{ fontSize: '13px', color: 'var(--text3)', margin: 0, lineHeight: 1.4 }}>{product.desc}</p>
                        </div>
                      </div>
                      <svg className="tansian-product-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </li>
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
          {/* Mobile Academics Dropdown Accordion */}
          <button
            className="mobile-tansian-toggle"
            onClick={() => setIsMobileAcademicsOpen(!isMobileAcademicsOpen)}
            style={{ borderBottom: '1px solid var(--border)', borderRadius: 0, width: '100%', textAlign: 'left', padding: '14px 0' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              </svg>
              Academics
            </span>
            <svg
              className={`mobile-tansian-chevron ${isMobileAcademicsOpen ? 'open' : ''}`}
              width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className={`mobile-tansian-items ${isMobileAcademicsOpen ? 'open' : ''}`} style={{ background: 'rgba(0,0,0,0.02)', borderBottom: isMobileAcademicsOpen ? '1px solid var(--border)' : 'none' }}>
            <Link to="/academics" className="mobile-tansian-item" style={{ paddingLeft: '26px' }}>
              <div>
                <div className="mobile-tansian-name" style={{ fontSize: '14px', fontWeight: 600 }}>Academics Overview</div>
              </div>
            </Link>
            <a href="#" className="mobile-tansian-item" style={{ paddingLeft: '26px' }} onClick={(e) => { e.preventDefault(); alert("E-library coming soon!"); }}>
              <div>
                <div className="mobile-tansian-name" style={{ fontSize: '14px' }}>E-library</div>
              </div>
            </a>
            <Link to="/organigram" className="mobile-tansian-item" style={{ paddingLeft: '26px' }}>
              <div>
                <div className="mobile-tansian-name" style={{ fontSize: '14px' }}>Organigram & Job Description</div>
              </div>
            </Link>
            <Link to="/academics#resources" className="mobile-tansian-item" style={{ paddingLeft: '26px' }}>
              <div>
                <div className="mobile-tansian-name" style={{ fontSize: '14px' }}>Handbook on Condition of Service</div>
              </div>
            </Link>
            <Link to="/strategic-plan" className="mobile-tansian-item" style={{ paddingLeft: '26px' }}>
              <div>
                <div className="mobile-tansian-name" style={{ fontSize: '14px' }}>Strategic Development Plan</div>
              </div>
            </Link>
            <Link to="/campus#dresscode" className="mobile-tansian-item" style={{ paddingLeft: '26px' }}>
              <div>
                <div className="mobile-tansian-name" style={{ fontSize: '14px' }}>Departmental Wears</div>
              </div>
            </Link>
          </div>
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

          {/* Mobile Tansian Hub accordion */}
          <button
            className="mobile-tansian-toggle"
            onClick={() => setIsMobileTansianOpen(!isMobileTansianOpen)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8M12 8v8" />
            </svg>
            Digital services
            <svg
              className={`mobile-tansian-chevron ${isMobileTansianOpen ? 'open' : ''}`}
              width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className={`mobile-tansian-items ${isMobileTansianOpen ? 'open' : ''}`}>
            {hubProducts.map((product) => (
              <a key={product.name} href={product.link} className="mobile-tansian-item">
                {product.image ? (
                  <div className="mobile-tansian-image" style={{ width: '48px', height: '48px', borderRadius: '3px', overflow: 'hidden', flexShrink: 0 }}>
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ) : (
                  <div className="mobile-tansian-icon">{product.icon}</div>
                )}
                <div>
                  <div className="mobile-tansian-name">{product.name}</div>
                  <div className="mobile-tansian-desc">{product.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
