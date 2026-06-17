import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { ScrollSection, itemVariants, scaleIn } from '../components/ScrollSection';

const facilities = [
  {
    title: 'ICT/CBT Centre',
    desc: 'Functional ICT/CBT Centre approved by JAMB for UTME and third-party examinations. High-speed internet across campus for research and learning.',
    icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
  },
  {
    title: 'Workshops & Laboratories',
    desc: 'Well-equipped laboratories, workshops, and library/e-library facilities. The NBTE resource inspection team marvelled at our facilities.',
    icon: <path d="M3 11l19-9-9 19-2-8-8-2z" />,
  },
  {
    title: 'Hostel Accommodation',
    desc: 'Well-furnished and affordable hostels for male and female students with 24/7 power and water supply at no extra cost.',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    title: 'TVET Skill Centre',
    desc: 'FME-approved Skill Training Centre offering 6-month programs in networking, fashion design, livestock, and more vocational skills.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: 'Library & E-Library',
    desc: 'Modern library with digital resources, e-books, journals, and research databases for comprehensive academic support.',
    icon: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>,
  },
  {
    title: 'Sports & Recreation',
    desc: 'Athletic facilities and recreational spaces for student wellbeing, including football pitch and indoor games area.',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></>,
  },
];

const galleryImages = [
  { src: '/img/img2.jpeg', label: 'Administrative Block' },
  { src: '/img/img4.jpeg', label: 'Lecture Hall' },
  { src: '/img/news.jpeg', label: 'Hostel Facilities' },
  { src: '/img/bi.jpeg', label: 'Physics Lab' },
  { src: '/img/garden.jpeg', label: 'Biological garden' },
  { src: '/img/img3.jpeg', label: 'Laboratory Building' },
];

export const CampusPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Campus Life"
        title="More Than Just"
        titleAccent="a Classroom"
        subtitle="Explore our world-class facilities, vibrant student life, and the serene Emene campus environment that makes Marist Polytechnic unique."
        backgroundImage="/img/backgrund.png"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        }
      />

      {/* ── FACILITIES ── */}
      <ScrollSection className="campus-facilities">
        <div className="campus-facilities__inner">
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            Our Facilities
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants} style={{ textAlign: 'center' }}>
            World-Class<br /><em>Infrastructure</em>
          </motion.h2>
          <motion.div className="campus-facilities__grid" variants={itemVariants}>
            {facilities.map((f, i) => (
              <div className="campus-item campus-item--card" key={i}>
                <div className="campus-item-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="1.8" strokeLinecap="round">
                    {f.icon}
                  </svg>
                </div>
                <div>
                  <div className="campus-item-title">{f.title}</div>
                  <div className="campus-item-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </ScrollSection>

      {/* ── PHOTO GALLERY ── */}
      <ScrollSection className="campus-gallery" style={{ background: 'var(--off)' }}>
        <div className="campus-gallery__inner">
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            Gallery
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants} style={{ textAlign: 'center', marginBottom: '48px' }}>
            Campus <em>Gallery</em>
          </motion.h2>
          <motion.div className="campus-mosaic campus-mosaic--page" variants={scaleIn}>
            {galleryImages.map((img, i) => (
              <div className="mosaic-cell" data-label={img.label} key={i}>
                <img src={img.src} alt={img.label} className="loaded" />
                <div className="overlay" />
              </div>
            ))}
          </motion.div>
        </div>
      </ScrollSection>

      {/* ── DEPARTMENTAL WEAR ── */}
      <ScrollSection id="dresscode" className="campus-dresscode" style={{ background: 'var(--off)' }}>
        <div className="campus-facilities__inner">
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M20.38 3.46L16 7.83l-1.42-1.42 4.38-4.38a1 1 0 0 1 1.42 0l0.01 0.01a1 1 0 0 1 0 1.42z" />
              <path d="M12.18 7.28L4.62 14.84a2 2 0 0 0-.58 1.41V20h3.76a2 2 0 0 0 1.41-.58l7.56-7.56-4.59-4.58z" />
            </svg>
            Student Affairs
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants} style={{ textAlign: 'center' }}>
            Departmental <em>Wear</em>
          </motion.h2>
          <motion.p className="section-body" variants={itemVariants} style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px' }}>
            Official guidelines from the Office of the Dean of Student Affairs. Departmental wears must be worn on a daily basis for lectures and other official activities of the Polytechnic.
          </motion.p>

          <motion.div className="table-responsive" variants={itemVariants}>
            <table className="modern-table">
              <thead>
                <tr>
                  <th className="sn-col">S/No</th>
                  <th>Programme</th>
                  <th>Down</th>
                  <th>Top (Shirt)</th>
                  <th>Footwear</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    no: 1,
                    programme: 'Science Laboratory Technology',
                    down: 'A pair of Black Trousers/Skirt',
                    top: 'White Shirt',
                    color: '#ffffff',
                    border: '#dcdcdc',
                    footwear: 'A pair of Black Shoes',
                    remarks: 'Well tucked in, and with a groomed hairstyle'
                  },
                  {
                    no: 2,
                    programme: 'Computer Science',
                    down: 'A pair of Black Trousers/Skirt',
                    top: 'Green Shirt',
                    color: '#2e7d32',
                    footwear: 'A pair of Black Shoes',
                    remarks: 'Well tucked in, and with a groomed hairstyle'
                  },
                  {
                    no: 3,
                    programme: 'Computer Engineering Technology',
                    down: 'A pair of Black Trousers/Skirt',
                    top: 'Pink Shirt',
                    color: '#ec407a',
                    footwear: 'A pair of Black Shoes',
                    remarks: 'Well tucked in, and with a groomed hairstyle'
                  },
                  {
                    no: 4,
                    programme: 'Electrical/ Electronic Engineering Technology',
                    down: 'A pair of Black Trousers/Skirt',
                    top: 'Wine Red (Maroon) Shirt',
                    color: '#800020',
                    footwear: 'A pair of Black Shoes',
                    remarks: 'Well tucked in, and with a groomed hairstyle'
                  },
                  {
                    no: 5,
                    programme: 'Business Administration and Management',
                    down: 'A pair of Black Trousers/Skirt',
                    top: 'Sky Blue Shirt',
                    color: '#87ceeb',
                    footwear: 'A pair of Black Shoes',
                    remarks: 'Well tucked in, and with a groomed hairstyle'
                  }
                ].map((row) => (
                  <tr key={row.no}>
                    <td className="sn-col">{row.no}</td>
                    <td style={{ fontWeight: 600 }}>{row.programme}</td>
                    <td>{row.down}</td>
                    <td>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ 
                          width: '12px', 
                          height: '12px', 
                          borderRadius: '50%', 
                          background: row.color, 
                          border: row.border ? `1px solid ${row.border}` : 'none',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.15)'
                        }} />
                        {row.top}
                      </span>
                    </td>
                    <td>{row.footwear}</td>
                    <td style={{ fontSize: '13px', color: 'var(--text3)' }}>{row.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div className="tvet-note" variants={itemVariants} style={{ marginTop: '30px', background: 'rgba(139,0,0,0.03)', borderColor: 'rgba(139,0,0,0.1)' }}>
            <div className="tvet-note-icon" style={{ background: 'rgba(139,0,0,0.06)', borderColor: 'rgba(139,0,0,0.12)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <div className="tvet-note-text" style={{ fontSize: '13.5px', color: 'var(--text2)' }}>
              <strong>Motto:</strong> Science and Technology for Holistic Human Development
            </div>
          </motion.div>
        </div>
      </ScrollSection>


      {/* ── STUDENT LIFE ── */}
      <ScrollSection className="campus-life">
        <div className="campus-life__inner">
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Student Life
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants} style={{ textAlign: 'center' }}>
            A Vibrant<br /><em>Community</em>
          </motion.h2>
          <motion.div className="campus-life__grid" variants={itemVariants}>
            {[
              { title: 'Academic Clubs', desc: 'Engineering, Science, and Business clubs for peer learning and collaboration.' },
              { title: 'Student Government', desc: 'An active student union that organises events, resolves issues, and represents student interests.' },
              { title: 'Religious Activities', desc: 'As a Marist institution, spiritual development is encouraged alongside academic growth.' },
              { title: 'Career Services', desc: 'SIWES placement support, career counselling, and industry networking opportunities.' },
            ].map((item, i) => (
              <div className="campus-life__card" key={i}>
                <div className="campus-life__card-num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/contact" className="btn-crimson">
              Visit Our Campus{' '}
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
