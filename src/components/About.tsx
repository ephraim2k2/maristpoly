import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about">
      <div className="about-img-side reveal-left">
        <img src="/img/abtsecti.png" alt="About Marist" className="loaded" />
        <div className="about-img-overlay" />
        <div className="about-img-badge reveal delay-3">
          <div className="num">2016</div>
          <div className="lbl">Commissioned in Enugu</div>
        </div>
      </div>
      <div className="about-content">
        <div className="section-eyebrow reveal">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          About Us
        </div>
        <h2 className="section-title reveal delay-1">
          Shaping Minds,<br />
          <em>Building Futures</em>
        </h2>
        <p className="section-body reveal delay-2">
          Marist Polytechnic Enugu was commissioned on 22nd October 2016 and approved by the National Board for Technical Education (NBTE). Located in a serene and conducive environment in Emene, Enugu, we are a recognised National and Higher National Diploma awarding institution. On 27th August 2025, the Federal Ministry of Education approved us as a Skill Training Centre for TVET programs.
        </p>
        <div className="about-features reveal delay-3">
          <div className="feat-card">
            <div className="ic" style={{ color: 'var(--crimson)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <div className="feat-title">NBTE Accredited</div>
            <div className="feat-desc">Fully accredited ND and HND programs since 2016</div>
          </div>
          <div className="feat-card">
            <div className="ic" style={{ color: 'var(--crimson)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <div className="feat-title">Hands-On Training</div>
            <div className="feat-desc">First-class workshops and laboratories for practical skills</div>
          </div>
          <div className="feat-card">
            <div className="ic" style={{ color: 'var(--crimson)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
              </svg>
            </div>
            <div className="feat-title">TVET Centre</div>
            <div className="feat-desc">FME-approved Skill Training Centre for vocational education</div>
          </div>
          <div className="feat-card">
            <div className="ic" style={{ color: 'var(--crimson)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <div className="feat-title">Affordable Hostels</div>
            <div className="feat-desc">Well-furnished accommodation with 24/7 power and water supply</div>
          </div>
        </div>
        <a href="#programs" className="btn-crimson reveal delay-4" onClick={(e) => {
          e.preventDefault();
          document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          Discover Our Story{' '}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <div className="about-stats-row reveal delay-5">
          <div className="about-stat">
            <span className="about-stat-num counted">2016</span>
            <div className="about-stat-label">Year Established</div>
          </div>
          <div className="about-stat">
            <span className="about-stat-num counted">NBTE</span>
            <div className="about-stat-label">Fully Accredited</div>
          </div>
        </div>
      </div>
    </section>
  );
};
