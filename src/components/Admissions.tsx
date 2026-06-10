import React from 'react';

export const Admissions: React.FC = () => {
  return (
    <section id="admissions">
      <div className="section-eyebrow reveal" style={{ justifyContent: 'center' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
        Admissions
      </div>
      <h2 className="section-title reveal delay-1" style={{ textAlign: 'center' }}>
        Start Your<br />
        <em>Journey Today</em>
      </h2>
      <div className="admissions-steps">
        <div className="step reveal delay-1">
          <div className="step-num">01</div>
          <div className="step-title">Check Eligibility</div>
          <div className="step-desc">
            Candidates must have sat for the latest UTME and obtained minimum cut-off marks, or possess equivalent qualifications.
          </div>
        </div>
        <div className="step reveal delay-2">
          <div className="step-num">02</div>
          <div className="step-title">Apply Online</div>
          <div className="step-desc">
            Fill out the application form on our admissions portal. Pay the application fee and upload your O'Level/UTME results.
          </div>
        </div>
        <div className="step reveal delay-3">
          <div className="step-num">03</div>
          <div className="step-title">Screening &amp; Admission</div>
          <div className="step-desc">
            Attend the physical screening exercise at our campus in Emene. Successful candidates will receive admission letters.
          </div>
        </div>
      </div>
      <div className="admissions-cta reveal delay-4" style={{ textAlign: 'center', marginTop: '48px' }}>
        <button className="nav-cta" style={{ padding: '14px 36px', fontSize: '14px' }}>
          Access Admissions Portal
        </button>
      </div>
    </section>
  );
};
