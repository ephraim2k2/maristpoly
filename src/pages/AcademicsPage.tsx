import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { ScrollSection, itemVariants } from '../components/ScrollSection';

const ndPrograms = [
  {
    name: 'ND Biomedical Engineering',
    desc: 'Engineering/Tech/Env faculty — 2-year National Diploma in biomedical engineering technology. Learn to maintain, calibrate, and design medical equipment.',
    icon: <><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" /></>,
  },
  {
    name: 'ND Computer Engineering',
    desc: 'Engineering/Tech/Env faculty — practical training in computer hardware, systems engineering, and digital circuit design.',
    icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
  },
  {
    name: 'ND Electrical/Electronics',
    desc: 'Engineering/Tech/Env faculty — 2-year diploma in electrical and electronics engineering with power systems and control training.',
    icon: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
  },
  {
    name: 'ND Estate Management',
    desc: 'Engineering/Tech/Env faculty — National Diploma in Estate Management and Valuation with practical property law.',
    icon: <><circle cx="13.5" cy="6.5" r="3.5" /><path d="M9.5 20.5a3.5 3.5 0 0 1 7 0H9.5z" /><path d="M9 12H4a2 2 0 0 0-2 2v6h7" /><path d="M15 12h5a2 2 0 0 1 2 2v6h-7" /></>,
  },
  {
    name: 'ND Science Lab Technology',
    desc: 'Health Sciences faculty — 2-year ND in Science Laboratory Technology with modern lab equipment training.',
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  {
    name: 'ND Computer Science',
    desc: 'Sciences faculty — software development, programming, algorithms, and computing fundamentals.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    name: 'ND Business Administration',
    desc: 'Social Sciences faculty — 2-year ND in Business Administration and Management with entrepreneurship training.',
    icon: <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 0 0 6.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 0 0 6.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />,
  },
];

const hndPrograms = [
  { name: 'HND SLT (Microbiology)', desc: 'Advanced microbiology training with laboratory research and diagnostic techniques.' },
  { name: 'HND Artificial Intelligence', desc: 'Machine learning, data science, neural networks, and AI systems development.' },
  { name: 'HND Cyber Security', desc: 'Network security, ethical hacking, digital forensics, and information assurance.' },
  { name: 'HND Business Administration', desc: 'Advanced management, strategic planning, and corporate governance.' },
  { name: 'HND Electrical Engineering (Power & Machines)', desc: 'Power systems, electrical machines, control systems, and renewable energy.' },
];

const tvetPrograms = [
  { num: '01', name: 'Networking & Installation', desc: 'Learn network setup, configuration, and system installation for enterprise environments.' },
  { num: '02', name: 'Computer Hardware & GSM Repairs', desc: 'Hands-on training in computer hardware maintenance and mobile device repair.' },
  { num: '03', name: 'Fashion Design & Garment Making', desc: 'Develop skills in pattern drafting, sewing, and garment production techniques.' },
  { num: '04', name: 'Livestock & Beekeeping', desc: 'Training in animal husbandry, poultry management, and commercial beekeeping.' },
  { num: '05', name: 'Woodwork & Carpentry', desc: 'Master carpentry, joinery, and furniture making with modern tools and techniques.' },
  { num: '06', name: 'Brick Laying & Concreting', desc: 'Construction skills in block laying, brickwork, and concrete finishing.' },
  { num: '07', name: 'Piping & Plumbing', desc: 'Installation and maintenance of water supply, drainage, and sanitation systems.' },
  { num: '08', name: 'Floor Tiling & Interlocking', desc: 'Surface finishing skills including tiling, cladding, and interlocking block installation.' },
];

export const AcademicsPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Our"
        titleAccent="Programs"
        subtitle="NBTE-accredited National and Higher National Diploma programs across Engineering, Sciences, and Social Sciences faculties. Plus FME-approved TVET skill training."
        backgroundImage="/img/backgrund.png"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        }
      />

      {/* ── ND PROGRAMS ── */}
      <ScrollSection className="acad-nd">
        <div className="acad-section__inner">
          <motion.div className="section-eyebrow" variants={itemVariants}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            </svg>
            National Diploma
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants}>
            ND <em>Programs</em>
          </motion.h2>
          <motion.p className="section-body" variants={itemVariants}>
            Our 2-year National Diploma programs provide foundational knowledge and practical skills across three faculties.
          </motion.p>
          <motion.div className="acad-grid" variants={itemVariants}>
            {ndPrograms.map((prog, i) => (
              <div className="prog-card prog-card--light" key={i}>
                <div className="prog-icon prog-icon--light">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="1.8" strokeLinecap="round">
                    {prog.icon}
                  </svg>
                </div>
                <div className="prog-name" style={{ color: 'var(--text)' }}>{prog.name}</div>
                <div className="prog-desc" style={{ color: 'var(--text2)' }}>{prog.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </ScrollSection>

      {/* ── HND PROGRAMS ── */}
      <ScrollSection className="acad-hnd" style={{ background: 'var(--crimson)', color: '#fff' }}>
        <div className="acad-section__inner">
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ color: 'rgba(255,255,255,0.6)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Higher National Diploma
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants} style={{ color: '#fff' }}>
            HND <em style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>Programs</em>
          </motion.h2>
          <motion.p className="section-body" variants={itemVariants} style={{ color: 'rgba(255,255,255,0.6)' }}>
            Advanced 2-year programs building on ND foundations with specialised training and industry focus.
          </motion.p>
          <motion.div className="acad-grid acad-grid--hnd" variants={itemVariants}>
            {hndPrograms.map((prog, i) => (
              <div className="prog-card" key={i} style={{ background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.35)' }}>
                <div className="prog-icon" style={{ background: 'rgba(201,168,76,0.15)', borderColor: 'rgba(201,168,76,0.3)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="prog-name" style={{ color: '#fff' }}>{prog.name}</div>
                <div className="prog-desc" style={{ color: 'rgba(255,255,255,0.65)' }}>{prog.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </ScrollSection>

      {/* ── TVET PROGRAMS ── */}
      <ScrollSection className="acad-tvet" style={{ background: 'var(--off)' }}>
        <div className="acad-section__inner">
          <motion.div className="section-eyebrow" variants={itemVariants}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            TVET Skill Training
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants}>
            Vocational <em>Programs</em>
          </motion.h2>
          <motion.p className="section-body" variants={itemVariants}>
            FME-approved 6-month skill training programs. Get certified and industry-ready.
          </motion.p>
          <motion.div className="tvet-grid" variants={itemVariants}>
            {tvetPrograms.map((prog, i) => (
              <div className="tvet-card" key={i} style={{ background: 'rgba(139,0,0,0.04)', borderColor: 'rgba(139,0,0,0.12)' }}>
                <div className="tvet-card-num" style={{ color: 'var(--crimson)' }}>{prog.num}</div>
                <div className="tvet-card-title" style={{ color: 'var(--text)' }}>{prog.name}</div>
                <div className="tvet-card-desc" style={{ color: 'var(--text2)' }}>{prog.desc}</div>
              </div>
            ))}
          </motion.div>
          <motion.div className="tvet-note" variants={itemVariants} style={{ background: 'rgba(139,0,0,0.04)', borderColor: 'rgba(139,0,0,0.12)' }}>
            <div className="tvet-note-icon" style={{ background: 'rgba(139,0,0,0.08)', borderColor: 'rgba(139,0,0,0.15)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
                <line x1="12" y1="8" x2="12" y2="12" />
              </svg>
            </div>
            <div className="tvet-note-text" style={{ color: 'var(--text2)' }}>
              All TVET programs are <strong style={{ color: 'var(--crimson)' }}>6 months</strong> in duration and approved by the <strong style={{ color: 'var(--crimson)' }}>Federal Ministry of Education</strong>. Marist Polytechnic Enugu is an accredited FME-TVET Skill Training Centre.
            </div>
          </motion.div>
        </div>
      </ScrollSection>

      {/* ── ACADEMIC RESOURCES ── */}
      <ScrollSection className="acad-resources" style={{ background: 'var(--white)' }}>
        <div className="acad-section__inner" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Downloads & Documents
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants}>
            Academic<br /><em>Resources</em>
          </motion.h2>
          <motion.p className="section-body" variants={itemVariants}>
            Download the latest student handbook and the academic calendar for the current session.
          </motion.p>
          <motion.div className="resources-grid" variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '36px' }}>
            
            {/* Student Handbook Card */}
            <div className="resource-card">
              <div className="resource-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <div className="resource-info">
                <h4>Student Handbook</h4>
                <p>Comprehensive guide to campus life, rules, and regulations.</p>
              </div>
              <a href="/img/Student Handbook (Ready for Printing - December, 2023).pdf" target="_blank" rel="noopener noreferrer" className="resource-download">
                Download PDF
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>

            {/* Academic Calendar Card */}
            <div className="resource-card">
              <div className="resource-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="resource-info">
                <h4>Academic Calendar</h4>
                <p>Important dates and schedules for the current academic session.</p>
              </div>
              <Link to="/calendar" className="resource-download">
                View Calendar
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* School Fees Breakdown Card */}
            <div className="resource-card">
              <div className="resource-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="resource-info">
                <h4>School Fees Breakdown</h4>
                <p>Detailed breakdown of tuition and other fees across programs.</p>
              </div>
              <a href="/img/School FEES BREAKDOWN.docx" target="_blank" rel="noopener noreferrer" className="resource-download" download>
                Download Document
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>

          </motion.div>
        </div>
      </ScrollSection>

      {/* ── ADMISSIONS CTA ── */}
      <ScrollSection className="acad-admissions">
        <div className="acad-section__inner" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            Admissions
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants}>
            Start Your<br /><em>Journey Today</em>
          </motion.h2>
          <motion.div className="admissions-steps" variants={itemVariants}>
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-title">Check Eligibility</div>
              <div className="step-desc">Candidates must have sat for the latest UTME and obtained minimum cut-off marks, or possess equivalent qualifications.</div>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-title">Apply Online</div>
              <div className="step-desc">Fill out the application form on our admissions portal. Pay the application fee and upload your O'Level/UTME results.</div>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-title">Screening & Admission</div>
              <div className="step-desc">Attend the physical screening exercise at our campus in Emene. Successful candidates will receive admission letters.</div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
            <Link to="/contact" className="btn-crimson">
              Contact Admissions{' '}
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
