import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials">
      <div className="testi-header">
        <div>
          <div className="section-eyebrow reveal">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Testimonials
          </div>
          <h2 className="section-title reveal delay-1" style={{ marginBottom: 0 }}>
            What Our <em style={{ fontWeight: 300 }}>Students Say</em>
          </h2>
        </div>
      </div>
      <div className="testi-grid">
        <div className="testi-card reveal delay-1">
          <div className="testi-stars">★★★★★</div>
          <p className="testi-quote">
            "Marist Polytechnic has changed my view on technical education. The workshops are fully equipped and the lecturers are highly supportive. I developed actual building engineering skills that got me a job right after graduation."
          </p>
          <div className="testi-author">
            <div className="testi-avatar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <div className="testi-name">Chinedu Okafor</div>
              <div className="testi-role">Alumnus, Computer Engineering</div>
            </div>
          </div>
        </div>
        <div className="testi-card reveal delay-2">
          <div className="testi-stars">★★★★★</div>
          <p className="testi-quote">
            "The hostel facilities here are top-notch. We have constant water and electricity, which makes studying in the evening very comfortable. The serene campus environment in Emene is perfect for learning."
          </p>
          <div className="testi-author">
            <div className="testi-avatar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <div className="testi-name">Blessing Nwachukwu</div>
              <div className="testi-role">ND II, Science Lab Tech</div>
            </div>
          </div>
        </div>
        <div className="testi-card reveal delay-3">
          <div className="testi-stars">★★★★★</div>
          <p className="testi-quote">
            "The 6-month TVET skill training at Marist Poly was extremely practical. I enrolled in Networking &amp; Installation, and today I run my own freelance computer repair and networking services in Enugu."
          </p>
          <div className="testi-author">
            <div className="testi-avatar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <div className="testi-name">Emmanuel Egwu</div>
              <div className="testi-role">TVET Graduate, Networking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
