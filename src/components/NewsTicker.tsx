import React from 'react';

export const NewsTicker: React.FC = () => {
  const announcements = [
    "2026/2027 Admission Forms Now Available — Apply Online",
    "Marist Polytechnic wins Best Tech College Award 2025",
    "New Engineering & ICT Department Opens This Semester",
    "Orientation for New Students: Monday 14th January, 9am",
    "Scholarship Applications Open — Deadline 31st January 2026",
    "Staff Development Workshop: Creative Arts & Design — Register Now"
  ];

  return (
    <div className="news-ticker">
      <div className="ticker-label">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3a1a00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        NEWS
      </div>
      <div className="ticker-track-wrap">
        <div className="ticker-track">
          {[...announcements, ...announcements].map((item, idx) => (
            <span key={idx} className="ticker-item">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
