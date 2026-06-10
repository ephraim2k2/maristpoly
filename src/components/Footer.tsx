import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <h2>
          Join 12,000+ students<br />
          <em>growing their future with us</em>
        </h2>
        <p>
          NBTE-accredited National and Higher National Diploma programs. Low school fees payable in instalments. Serene environment in Emene, Enugu.
        </p>
        <div className="footer-trust-row">
          <div className="footer-trust-item">
            <div className="footer-trust-dot" />
            NBTE Accredited
          </div>
          <div className="footer-trust-item">
            <div className="footer-trust-dot" />
            Est. 2016
          </div>
          <div className="footer-trust-item">
            <div className="footer-trust-dot" />
            FME TVET Centre
          </div>
          <div className="footer-trust-item">
            <div className="footer-trust-dot" />
            13 Programs
          </div>
          <div className="footer-trust-item">
            <div className="footer-trust-dot" />
            AEFUNAI Affiliation
          </div>
        </div>
      </div>
      <div className="footer-big-text">
        <span>MARIST POLYTECHNIC</span>
      </div>
      <div className="footer-sep" />
      <div className="footer-body">
        <div className="footer-col">
          <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
            <img src="/img/maristlogo.png" alt="Marist Logo" />
            <div className="nav-logo-text">
              <div className="brand" style={{ color: '#fff' }}>MARIST</div>
              <div className="sub">Polytechnic Enugu</div>
            </div>
          </Link>
          <p className="footer-brand-desc">
            Empowering future leaders through quality technical education, industry-ready skills, and hands-on training since 2016 — located in a serene environment in Emene, Enugu.
          </p>
          <div className="footer-accr" style={{ gap: '14px' }}>
            <img
              src="/img/download.jpeg"
              alt="NBTE Logo"
              style={{
                width: '48px',
                height: '48px',
                objectFit: 'contain',
                borderRadius: '50%',
                backgroundColor: '#fff',
                padding: '3px',
                flexShrink: 0,
              }}
            />
            <span>
              <strong>NBTE Fully Accredited</strong>National Board for Technical Education, Nigeria
            </span>
          </div>
          <div className="footer-social-label">Follow Us</div>
          <div className="footer-socials-row">
            <div className="fsoc-btn" title="Facebook">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
            <div className="fsoc-btn" title="Twitter/X">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </div>
            <div className="fsoc-btn" title="Instagram">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div className="fsoc-btn" title="YouTube">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
              </svg>
            </div>
            <div className="fsoc-btn" title="LinkedIn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-heading">Academics</div>
          <ul className="footer-link-list">
            <li><Link to="/academics">ND Programs <span className="arr">→</span></Link></li>
            <li><Link to="/academics">HND Programs <span className="arr">→</span></Link></li>
            <li><Link to="/academics">TVET Skills <span className="arr">→</span></Link></li>
            <li><Link to="/academics">Admissions <span className="arr">→</span></Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-heading">Pages</div>
          <ul className="footer-link-list">
            <li><Link to="/">Home <span className="arr">→</span></Link></li>
            <li><Link to="/about">About <span className="arr">→</span></Link></li>
            <li><Link to="/academics">Academics <span className="arr">→</span></Link></li>
            <li><Link to="/campus">Campus Life <span className="arr">→</span></Link></li>
            <li><Link to="/events">News & Events <span className="arr">→</span></Link></li>
            <li><Link to="/contact">Contact <span className="arr">→</span></Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-heading">Quick Links</div>
          <ul className="footer-link-list">
            <li><Link to="/contact">Apply Online <span className="arr">→</span></Link></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Scholarships <span className="arr">→</span></a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Student Portal <span className="arr">→</span></a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Staff Directory <span className="arr">→</span></a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Download Prospectus <span className="arr">→</span></a></li>
            <li><Link to="/campus">Campus Map <span className="arr">→</span></Link></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>FAQ <span className="arr">→</span></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© 2026 Marist Polytechnic Enugu. All rights reserved.</p>
          <ul className="footer-bottom-links">
            <li><a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Terms of Use</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Sitemap</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Accessibility</a></li>
          </ul>
        </div>
        <div className="footer-nbte-badge">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span>NBTE Accredited Institution</span>
        </div>
      </div>
    </footer>
  );
};
