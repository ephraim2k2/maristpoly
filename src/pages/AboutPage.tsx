import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { ScrollSection, itemVariants, itemVariantsLeft } from '../components/ScrollSection';

export const AboutPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Shaping Minds,"
        titleAccent="Building Futures"
        subtitle="Commissioned on 22nd October 2016, Marist Polytechnic Enugu is an NBTE-accredited institution located in a serene and conducive environment in Emene, Enugu State."
        backgroundImage="/img/backgrund.png"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        }
      />

      {/* ── HISTORY & MISSION ── */}
      <ScrollSection className="about-history">
        <div className="about-history__inner">
          <motion.div className="about-history__img" variants={itemVariantsLeft}>
            <img src="/img/abtsecti.png" alt="Marist Campus" className="loaded" />
            <div className="about-img-overlay" />
            <div className="about-img-badge">
              <div className="num">2016</div>
              <div className="lbl">Commissioned in Enugu</div>
            </div>
          </motion.div>
          <div className="about-history__text">
            <motion.div className="section-eyebrow" variants={itemVariants}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Our History
            </motion.div>
            <motion.h2 className="section-title" variants={itemVariants}>
              A Legacy of<br /><em>Excellence</em>
            </motion.h2>
            <motion.p className="section-body" variants={itemVariants}>
              Marist Polytechnic Enugu was commissioned on 22nd October 2016 and approved by the National Board for Technical Education (NBTE). Located in a serene and conducive environment in Emene, Enugu, we are a recognised National and Higher National Diploma awarding institution.
            </motion.p>
            <motion.p className="section-body" variants={itemVariants}>
              On 27th August 2025, the Federal Ministry of Education approved us as a Skill Training Centre for TVET programs, expanding our commitment to practical, hands-on education that prepares students for the real world.
            </motion.p>
            <motion.div className="about-stats-row" variants={itemVariants}>
              <div className="about-stat">
                <span className="about-stat-num counted">2016</span>
                <div className="about-stat-label">Year Established</div>
              </div>
              <div className="about-stat">
                <span className="about-stat-num counted">NBTE</span>
                <div className="about-stat-label">Fully Accredited</div>
              </div>
              <div className="about-stat">
                <span className="about-stat-num counted">13+</span>
                <div className="about-stat-label">Programs Offered</div>
              </div>
            </motion.div>
          </div>
        </div>
      </ScrollSection>

      {/* ── CORE VALUES & FEATURES ── */}
      <ScrollSection className="about-values" style={{ background: 'var(--off)' }}>
        <div className="about-values__inner">
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
            </svg>
            What Sets Us Apart
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants} style={{ textAlign: 'center' }}>
            Our Core<br /><em>Strengths</em>
          </motion.h2>
          <motion.div className="about-values__grid" variants={itemVariants}>
            {[
              {
                title: 'NBTE Accredited',
                desc: 'Fully accredited ND and HND programs since 2016 by the National Board for Technical Education.',
                icon: <><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></>,
              },
              {
                title: 'Hands-On Training',
                desc: 'First-class workshops and laboratories for practical skills development across all programs.',
                icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>,
              },
              {
                title: 'TVET Skill Centre',
                desc: 'FME-approved Skill Training Centre for vocational education — 6-month certified programs.',
                icon: <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />,
              },
              {
                title: 'Affordable Hostels',
                desc: 'Well-furnished accommodation with 24/7 power and water supply at no extra cost.',
                icon: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>,
              },
              {
                title: 'ICT/CBT Centre',
                desc: 'JAMB-approved centre for UTME and third-party examinations with high-speed internet.',
                icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
              },
              {
                title: 'Serene Environment',
                desc: 'Located in the peaceful neighbourhood of Emene, Enugu — ideal for focused learning.',
                icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
              },
            ].map((feat, i) => (
              <motion.div className="feat-card feat-card--large" key={i} variants={itemVariants}>
                <div className="ic" style={{ color: 'var(--crimson)' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    {feat.icon}
                  </svg>
                </div>
                <div className="feat-title">{feat.title}</div>
                <div className="feat-desc">{feat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ScrollSection>

      {/* ── RECTOR'S MESSAGE ── */}
      <ScrollSection className="about-rector">
        <div className="about-rector__inner">
          <motion.div className="about-rector__img" variants={itemVariantsLeft}>
            <div className="rector-img-placeholder">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </motion.div>
          <div className="about-rector__text">
            <motion.div className="section-eyebrow" variants={itemVariants}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Rector's Message
            </motion.div>
            <motion.h2 className="section-title" variants={itemVariants}>
              A Word From<br /><em>Our Rector</em>
            </motion.h2>
            <motion.blockquote className="rector-quote" variants={itemVariants}>
              "At Marist Polytechnic, we believe that <em>education transforms lives</em>. Our mission is to equip every student with practical skills, academic excellence, and moral values that prepare them for a meaningful future."
            </motion.blockquote>
            <motion.p className="rector-body" variants={itemVariants}>
              Since our commissioning in 2016, we have remained committed to providing world-class technical education at affordable rates. Our NBTE-accredited programs, modern facilities, and dedicated faculty ensure that every student receives the attention and training they need to succeed.
            </motion.p>
            <motion.div className="rector-signature" variants={itemVariants}>
              <div className="rector-name">Rev. Br. Anochie Okechukwu Venatius </div>
              <div className="rector-title">Rector, Marist Polytechnic Enugu</div>
            </motion.div>
            <motion.div className="rector-affil" variants={itemVariants}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Affiliated with AEFUNAI — Alex Ekwueme Federal University
            </motion.div>
          </div>
        </div>
      </ScrollSection>

      {/* ── TESTIMONIALS ── */}
      <ScrollSection className="about-testimonials" style={{ background: 'var(--off)' }}>
        <div className="about-testimonials__inner">
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Testimonials
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants} style={{ textAlign: 'center', marginBottom: '48px' }}>
            What Our <em style={{ fontWeight: 300 }}>Students Say</em>
          </motion.h2>
          <motion.div className="testi-grid" variants={itemVariants}>
            {[
              {
                quote: "Marist Polytechnic has changed my view on technical education. The workshops are fully equipped and the lecturers are highly supportive. I developed actual building engineering skills that got me a job right after graduation.",
                name: 'Chinedu Okafor',
                role: 'Alumnus, Computer Engineering',
              },
              {
                quote: "The hostel facilities here are top-notch. We have constant water and electricity, which makes studying in the evening very comfortable. The serene campus environment in Emene is perfect for learning.",
                name: 'Blessing Nwachukwu',
                role: 'ND II, Science Lab Tech',
              },
              {
                quote: "The 6-month TVET skill training at Marist Poly was extremely practical. I enrolled in Networking & Installation, and today I run my own freelance computer repair and networking services in Enugu.",
                name: 'Emmanuel Egwu',
                role: 'TVET Graduate, Networking',
              },
            ].map((t, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">"{t.quote}"</p>
                <div className="testi-author">
                  <div className="testi-avatar">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </ScrollSection>

      {/* ── CTA ── */}
      <ScrollSection className="about-cta" fullHeight={false}>
        <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            Ready to Join<br /><em>Our Community?</em>
          </h2>
          <p className="section-body" style={{ maxWidth: '500px', margin: '0 auto 32px' }}>
            Applications are now open for the next academic session. Take the first step toward your future.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-crimson">
              Contact Admissions{' '}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/academics" className="btn-outline">
              View Programs{' '}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </ScrollSection>
    </>
  );
};
