import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { ScrollSection, itemVariants } from '../components/ScrollSection';

const newsItems = [
  {
    date: '14 Dec 2025',
    category: 'Announcement',
    title: 'Approved FME-TVET Skill Training Center: Enrollment Starts Soon',
    desc: 'Marist Polytechnic Enugu is officially approved as a vocational skill centre. Applications open for 6-month specialized programs with hands-on practice in modern labs.',
    image: '/img/carousel-1.jpg',
    featured: true,
  },
  {
    date: '08 Dec 2025',
    category: 'Academic',
    title: 'JAMB CBT Centre UTME Registration Assistance',
    desc: "Marist Polytechnic's JAMB-accredited CBT Centre will assist candidates with UTME registrations, updates, and mock practices.",
    image: '/img/news.jpeg',
    featured: false,
  },
  {
    date: '30 Nov 2025',
    category: 'Campus Life',
    title: 'Hostel Space Allocation for the 2026/2027 Academic Session',
    desc: 'Newly admitted and returning students can now book space in the male/female hostels. Rooms are allocated on a first-come, first-serve basis.',
    image: '/img/news3.jpeg.jpeg',
    featured: false,
  },
];

const upcomingEvents = [
  {
    date: 'Jan 2026',
    title: 'New Student Orientation',
    desc: 'Welcome ceremony and campus tour for newly admitted students of the 2026/2027 session.',
  },
  {
    date: 'Feb 2026',
    title: 'TVET Enrollment Deadline',
    desc: 'Last date to register for the 6-month TVET skill training programs in the current cohort.',
  },
  {
    date: 'Mar 2026',
    title: 'Inter-Polytechnic Sports Festival',
    desc: 'Annual sporting event bringing polytechnics together for athletics, football, and indoor games.',
  },
  {
    date: 'Apr 2026',
    title: 'Career Fair & SIWES Placement',
    desc: 'Industry partners visit campus for recruitment drives and SIWES placement arrangements.',
  },
];

export const EventsPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="News &"
        titleAccent="Events"
        subtitle="Stay up to date with the latest announcements, academic news, and upcoming events at Marist Polytechnic Enugu."
        backgroundImage="/img/backgrund.png"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        }
      />

      {/* ── FEATURED NEWS ── */}
      <ScrollSection className="events-featured">
        <div className="events-section__inner">
          <motion.div className="section-eyebrow" variants={itemVariants}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Featured
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants}>
            Latest <em>Announcement</em>
          </motion.h2>
          <motion.div className="events-featured__card" variants={itemVariants}>
            <div className="events-featured__img">
              <img src={newsItems[0].image} alt={newsItems[0].title} className="loaded" />
            </div>
            <div className="events-featured__body">
              <div className="news-card-meta">
                <span>{newsItems[0].date}</span>
                <span>·</span>
                <span>{newsItems[0].category}</span>
              </div>
              <h3 className="news-card-title" style={{ fontSize: '24px', marginBottom: '16px' }}>{newsItems[0].title}</h3>
              <p className="news-card-desc" style={{ fontSize: '15px', lineHeight: '1.75', color: 'var(--text2)' }}>
                {newsItems[0].desc}
              </p>
              <a href="#" className="news-card-link" onClick={(e) => e.preventDefault()} style={{ marginTop: '24px' }}>
                Read full article{' '}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </ScrollSection>

      {/* ── NEWS GRID ── */}
      <ScrollSection className="events-grid-section" style={{ background: 'var(--off)' }}>
        <div className="events-section__inner">
          <motion.div className="section-eyebrow" variants={itemVariants}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Recent News
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants}>
            More <em>Updates</em>
          </motion.h2>
          <motion.div className="news-grid news-grid--page" variants={itemVariants}>
            {newsItems.map((item, i) => (
              <div className="news-card" key={i}>
                <div className="news-card-img">
                  <img src={item.image} alt={item.title} className="loaded" />
                </div>
                <div className="news-card-body">
                  <div className="news-card-meta">
                    <span>{item.date}</span>
                    <span>·</span>
                    <span>{item.category}</span>
                  </div>
                  <h3 className="news-card-title">{item.title}</h3>
                  <p className="news-card-desc" style={{ fontSize: '13px', color: 'var(--text3)', lineHeight: '1.6', marginBottom: '12px' }}>
                    {item.desc}
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
            ))}
          </motion.div>
        </div>
      </ScrollSection>

      {/* ── UPCOMING EVENTS ── */}
      <ScrollSection className="events-upcoming">
        <div className="events-section__inner">
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Coming Up
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants} style={{ textAlign: 'center', marginBottom: '48px' }}>
            Upcoming <em>Events</em>
          </motion.h2>
          <motion.div className="events-upcoming__list" variants={itemVariants}>
            {upcomingEvents.map((ev, i) => (
              <div className="events-upcoming__item" key={i}>
                <div className="events-upcoming__date">{ev.date}</div>
                <div className="events-upcoming__info">
                  <h3>{ev.title}</h3>
                  <p>{ev.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/contact" className="btn-crimson">
              Get Event Updates{' '}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </ScrollSection>
    </>
  );
};
