import React from 'react';

export const News: React.FC = () => {
  return (
    <section id="news">
      <div className="news-header">
        <div>
          <div className="section-eyebrow reveal">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            News &amp; Events
          </div>
          <h2 className="section-title reveal delay-1" style={{ marginBottom: 0 }}>
            Latest <em style={{ fontWeight: 300 }}>Announcements</em>
          </h2>
        </div>
      </div>
      <div className="news-grid">
        <div className="news-card reveal delay-1">
          <div className="news-card-img">
            <img src="/img/news2.jpeg" alt="Featured News" className="loaded" />
          </div>
          <div className="news-card-body">
            <div className="news-card-meta">
              <span>14 Dec 2025</span>
              <span>·</span>
              <span>Announcement</span>
            </div>
            <h3 className="news-card-title">Approved FME-TVET Skill Training Center: Enrollment Starts Soon</h3>
            <p className="news-card-desc">
              Marist Polytechnic Enugu is officially approved as a vocational skill centre. Applications open for 6-month specialized programs with hands-on practice in modern labs.
            </p>
            <a href="#" className="news-card-link" onClick={(e) => e.preventDefault()}>
              Read full article{' '}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
        <div className="news-card reveal delay-2">
          <div className="news-card-img">
            <img src="/img/news.jpeg" alt="News 2" className="loaded" />
          </div>
          <div className="news-card-body">
            <div className="news-card-meta">
              <span>08 Dec 2025</span>
              <span>·</span>
              <span>Academic</span>
            </div>
            <h3 className="news-card-title">JAMB CBT Centre UTME Registration Assistance</h3>
            <p className="news-card-desc">
              Marist Polytechnic's JAMB-accredited CBT Centre will assist candidates with UTME registrations, updates, and mock practices.
            </p>
            <a href="#" className="news-card-link" onClick={(e) => e.preventDefault()}>
              Read article{' '}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
        <div className="news-card reveal delay-3">
          <div className="news-card-img">
            <img src="/img/news3.jpeg.jpeg" alt="News 3" className="loaded" />
          </div>
          <div className="news-card-body">
            <div className="news-card-meta">
              <span>30 Nov 2025</span>
              <span>·</span>
              <span>Campus Life</span>
            </div>
            <h3 className="news-card-title">Hostel Space Allocation for the 2026/2027 Academic Session</h3>
            <p className="news-card-desc">
              Newly admitted and returning students can now book space in the male/female hostels. Rooms are allocated on a first-come, first-serve basis.
            </p>
            <a href="#" className="news-card-link" onClick={(e) => e.preventDefault()}>
              Read article{' '}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
