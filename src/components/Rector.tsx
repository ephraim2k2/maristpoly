import React from 'react';

export const Rector: React.FC = () => {
  return (
    <section id="rector">
      <div className="rector-img-side reveal-left">
        <div className="rector-img-placeholder">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>
      <div className="rector-content">
        <div className="section-eyebrow reveal">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          From the Rector
        </div>
        <h2 className="section-title reveal delay-1">
          A Word From<br />
          <em>Our Rector</em>
        </h2>
        <div className="rector-quote reveal delay-2">
          "It is with great honour and pleasure that I welcome all our esteemed past, present and future students to Marist Polytechnic. This is a website with a difference — bringing you face to face with the happenings in and around our campus."
        </div>
        <p className="rector-body reveal delay-3">
          Marist Polytechnic Enugu has magnificent facilities that drive polytechnic education to greater heights. When NBTE came for resource inspection, the team marvelled at the quality and quantity of facilities and equipment in the institution. We lay emphasis on practical skills and hands-on training to equip students with industry-ready skills.
        </p>
        <p className="rector-body reveal delay-3">
          We have reached advanced talks with Alex Ekwueme Federal University, Ndufu-Alike (AEFUNAI) for degree program affiliation. Once through, Marist Polytechnic will start running degree programs in affiliation with AEFUNAI.
        </p>
        <div className="rector-signature reveal delay-4">
          <div className="rector-name">The Rector</div>
          <div className="rector-title">Marist Polytechnic, Enugu</div>
        </div>
        <div className="rector-affil reveal delay-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
          <span>Affiliation with AEFUNAI in progress — degree programs coming soon</span>
        </div>
      </div>
    </section>
  );
};
export default Rector;
