import React from 'react';

export const Tvet: React.FC = () => {
  return (
    <section id="tvet">
      <div className="tvet-header">
        <div>
          <div className="section-eyebrow reveal" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            TVET Centre
          </div>
          <h2 className="section-title reveal delay-1" style={{ color: '#fff', marginBottom: 0 }}>
            Skill Training <em style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>Programs</em>
          </h2>
        </div>
        <a href="#contact" className="btn-hero reveal delay-2" style={{ whiteSpace: 'nowrap' }} onClick={(e) => {
          e.preventDefault();
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          Apply for TVET{' '}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
      <div className="tvet-grid">
        <div className="tvet-card reveal delay-1">
          <div className="tvet-card-num">01</div>
          <div className="tvet-card-title">Networking & Installation</div>
          <div className="tvet-card-desc">Learn network setup, configuration, and system installation for enterprise environments.</div>
        </div>
        <div className="tvet-card reveal delay-2">
          <div className="tvet-card-num">02</div>
          <div className="tvet-card-title">Computer Hardware & GSM Repairs</div>
          <div className="tvet-card-desc">Hands-on training in computer hardware maintenance and mobile device repair.</div>
        </div>
        <div className="tvet-card reveal delay-3">
          <div className="tvet-card-num">03</div>
          <div className="tvet-card-title">Fashion Design & Garment Making</div>
          <div className="tvet-card-desc">Develop skills in pattern drafting, sewing, and garment production techniques.</div>
        </div>
        <div className="tvet-card reveal delay-4">
          <div className="tvet-card-num">04</div>
          <div className="tvet-card-title">Livestock & Beekeeping</div>
          <div className="tvet-card-desc">Training in animal husbandry, poultry management, and commercial beekeeping.</div>
        </div>
        <div className="tvet-card reveal delay-1">
          <div className="tvet-card-num">05</div>
          <div className="tvet-card-title">Woodwork & Carpentry</div>
          <div className="tvet-card-desc">Master carpentry, joinery, and furniture making with modern tools and techniques.</div>
        </div>
        <div className="tvet-card reveal delay-2">
          <div className="tvet-card-num">06</div>
          <div className="tvet-card-title">Brick Laying & Concreting</div>
          <div className="tvet-card-desc">Construction skills in block laying, brickwork, and concrete finishing for the building industry.</div>
        </div>
        <div className="tvet-card reveal delay-3">
          <div className="tvet-card-num">07</div>
          <div className="tvet-card-title">Piping & Plumbing</div>
          <div className="tvet-card-desc">Installation and maintenance of water supply, drainage, and sanitation systems.</div>
        </div>
        <div className="tvet-card reveal delay-4">
          <div className="tvet-card-num">08</div>
          <div className="tvet-card-title">Floor Tiling & Interlocking</div>
          <div className="tvet-card-desc">Surface finishing skills including tiling, cladding, and interlocking block installation.</div>
        </div>
      </div>
      <div className="tvet-note reveal delay-3">
        <div className="tvet-note-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
            <line x1="12" y1="8" x2="12" y2="12" />
          </svg>
        </div>
        <div className="tvet-note-text">
          All TVET programs are <strong>6 months</strong> in duration and approved by the <strong>Federal Ministry of Education</strong>. Marist Polytechnic Enugu is an accredited FME-TVET Skill Training Centre.
        </div>
      </div>
    </section>
  );
};
