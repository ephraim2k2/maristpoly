import React from 'react';

export const Programs: React.FC = () => {
  return (
    <section id="programs">
      <div className="programs-header">
        <div>
          <div className="section-eyebrow reveal" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            Academics
          </div>
          <h2 className="section-title reveal delay-1" style={{ color: '#fff', marginBottom: 0 }}>
            Our <em style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>Programs</em>
          </h2>
        </div>
        <a href="#admissions" className="btn-hero reveal delay-2" style={{ whiteSpace: 'nowrap' }} onClick={(e) => {
          e.preventDefault();
          document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          View All{' '}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
      <div className="programs-grid">
        <div className="prog-card reveal delay-1">
          <div className="prog-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
            </svg>
          </div>
          <div className="prog-name">ND Biomedical Engineering</div>
          <div className="prog-desc">Engineering/Tech/Env faculty — 2-year National Diploma in biomedical engineering technology.</div>
          <a href="#" className="prog-link" onClick={(e) => e.preventDefault()}>
            Learn more{' '}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
        <div className="prog-card reveal delay-2">
          <div className="prog-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" strokeLinecap="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <div className="prog-name">ND Computer Engineering</div>
          <div className="prog-desc">Engineering/Tech/Env faculty — practical training in computer hardware and systems engineering.</div>
          <a href="#" className="prog-link" onClick={(e) => e.preventDefault()}>
            Learn more{' '}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
        <div className="prog-card reveal delay-3">
          <div className="prog-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="prog-name">ND Electrical/Electronics</div>
          <div className="prog-desc">Engineering/Tech/Env faculty — 2-year diploma in electrical and electronics engineering.</div>
          <a href="#" className="prog-link" onClick={(e) => e.preventDefault()}>
            Learn more{' '}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
        <div className="prog-card reveal delay-4">
          <div className="prog-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="13.5" cy="6.5" r="3.5" />
              <path d="M9.5 20.5a3.5 3.5 0 0 1 7 0H9.5z" />
              <path d="M9 12H4a2 2 0 0 0-2 2v6h7" />
              <path d="M15 12h5a2 2 0 0 1 2 2v6h-7" />
            </svg>
          </div>
          <div className="prog-name">ND Estate Management</div>
          <div className="prog-desc">Engineering/Tech/Env faculty — National Diploma in Estate Management and Valuation.</div>
          <a href="#" className="prog-link" onClick={(e) => e.preventDefault()}>
            Learn more{' '}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
        <div className="prog-card reveal delay-1">
          <div className="prog-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" strokeLinecap="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="prog-name">ND Science Lab Technology</div>
          <div className="prog-desc">Health Sciences faculty — 2-year ND in Science Laboratory Technology.</div>
          <a href="#" className="prog-link" onClick={(e) => e.preventDefault()}>
            Learn more{' '}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
        <div className="prog-card reveal delay-2">
          <div className="prog-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="prog-name">ND Computer Science</div>
          <div className="prog-desc">Sciences faculty — software development, programming, and computing fundamentals.</div>
          <a href="#" className="prog-link" onClick={(e) => e.preventDefault()}>
            Learn more{' '}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
        <div className="prog-card reveal delay-3">
          <div className="prog-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" strokeLinecap="round">
              <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 0 0 6.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 0 0 6.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
          <div className="prog-name">ND Business Administration</div>
          <div className="prog-desc">Social Sciences faculty — 2-year ND in Business Administration and Management.</div>
          <a href="#" className="prog-link" onClick={(e) => e.preventDefault()}>
            Learn more{' '}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
        <div className="prog-card reveal delay-4" style={{ background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.35)' }}>
          <div className="prog-icon" style={{ background: 'rgba(201,168,76,0.15)', borderColor: 'rgba(201,168,76,0.3)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="prog-name" style={{ color: '#fff' }}>HND Programs</div>
          <div className="prog-desc" style={{ color: 'rgba(255,255,255,0.65)' }}>
            HND in SLT (Microbiology), AI, Cyber Security, Business Admin, and Electrical Engineering (Power & Machines).
          </div>
          <a href="#" className="prog-link" style={{ color: 'var(--gold-light)' }} onClick={(e) => e.preventDefault()}>
            View all HNDs{' '}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold-light)" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
