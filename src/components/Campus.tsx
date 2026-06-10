import React from 'react';

export const Campus: React.FC = () => {
  return (
    <section id="campus">
      <div className="campus-content">
        <div className="section-eyebrow reveal">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          Campus Life
        </div>
        <h2 className="section-title reveal delay-1">
          More Than Just<br />
          <em>a Classroom</em>
        </h2>
        <div className="campus-items">
          <div className="campus-item reveal delay-1">
            <div className="campus-item-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="1.8" strokeLinecap="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <div>
              <div className="campus-item-title">ICT/CBT Centre</div>
              <div className="campus-item-desc">
                Functional ICT/CBT Centre approved by JAMB for UTME and third-party examinations. High-speed internet across campus.
              </div>
            </div>
          </div>
          <div className="campus-item reveal delay-2">
            <div className="campus-item-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="1.8" strokeLinecap="round">
                <path d="M3 11l19-9-9 19-2-8-8-2z" />
              </svg>
            </div>
            <div>
              <div className="campus-item-title">Workshops & Laboratories</div>
              <div className="campus-item-desc">
                Well-equipped laboratories, workshops, and library/e-library facilities. NBTE resource inspection team marvelled at our facilities.
              </div>
            </div>
          </div>
          <div className="campus-item reveal delay-3">
            <div className="campus-item-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="1.8" strokeLinecap="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <div className="campus-item-title">Hostel Accommodation</div>
              <div className="campus-item-desc">
                Well-furnished and affordable hostels for male and female students with 24/7 power and water supply at no extra cost.
              </div>
            </div>
          </div>
          <div className="campus-item reveal delay-4">
            <div className="campus-item-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <div className="campus-item-title">TVET Skill Centre</div>
              <div className="campus-item-desc">
                FME-approved Skill Training Centre offering 6-month programs in networking, fashion design, livestock, and more.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="campus-mosaic">
        <div className="mosaic-cell" data-label="">
          <img src="/img/img1.jpeg" alt="Campus 1" className="loaded" />
          <div className="overlay" />
        </div>
        <div className="mosaic-cell" data-label="">
          <img src="/img/img2.jpeg" alt="Campus 2" className="loaded" />
          <div className="overlay" />
        </div>
        <div className="mosaic-cell" data-label="">
          <img src="/img/img3.jpeg" alt="Campus 3" className="loaded" />
          <div className="overlay" />
        </div>
        <div className="mosaic-cell" data-label="">
          <img src="/img/img4.jpeg" alt="Campus 4" className="loaded" />
          <div className="overlay" />
        </div>
      </div>
    </section>
  );
};
