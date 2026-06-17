import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { ScrollSection, itemVariants } from '../components/ScrollSection';

const coreValues = [
  { num: '01', name: 'Love of God' },
  { num: '02', name: 'Family Spirit' },
  { num: '03', name: 'Hard Work' },
  { num: '04', name: 'Innovative & Creative Services' },
  { num: '05', name: 'Integrity' },
  { num: '06', name: 'Work Ethics' },
  { num: '07', name: 'Self-Discipline' },
  { num: '08', name: 'Respect for Human Life' },
  { num: '09', name: 'Respect for the Environment' },
  { num: '10', name: 'Effective Leadership' },
];

const strengths = [
  'Serene environment',
  'Quality infrastructures',
  'Learning resource centre',
  'Qualified Staff',
  'Security consciousness',
  'Available land mass',
  'Regular water supply system',
];

const weaknesses = [
  'Low students\' enrolment',
  'Financial dependency',
  'Insufficient human and material resources',
  'Non-imposing infrastructures',
  'Absence of Marist symbol',
];

const opportunities = [
  'Location of the Polytechnic',
  'Technological facilities',
  'Ekulu River',
  'Diverse academic background and experience of the Management Committee',
  'Unified Tertiary Matriculation Examination (UTME) Computer Based Test (CBT) Centre',
];

const threats = [
  'Negative perception of Polytechnic Education',
  'Provincial funding policy',
  'Programme development policy ratio (70%:30%)',
  'Existence of many public and private Polytechnics',
];

interface ResultAction {
  action: string;
  responsible: string;
  timeframe: string;
}

interface ResultArea {
  area: string;
  objectives: string[];
  actions: ResultAction[];
}

const resultAreas: ResultArea[] = [
  {
    area: 'Administration',
    objectives: [
      'To enhance team work for the effective management of the Polytechnic.',
      'To achieve optimal delivery in the administration of the Polytechnic.',
      'To create an environment conducive to teaching and learning, research, and community service.',
      'To provide necessary training and appropriate vocation skills that will make the Marist Polytechnic student self-reliant and gainfully employed.',
      'To give the students the sense of Marist Brothers\' identity and vocation.',
    ],
    actions: [
      { action: 'Draw up a comprehensive Organigram of the Polytechnic.', responsible: 'Management Committee, Rector', timeframe: '2021' },
      { action: 'Organise a seminar for the principal officers of the Polytechnic on their job description.', responsible: 'Rector, Deputy Rector', timeframe: '2021' },
      { action: 'Develop student handbook.', responsible: 'Dean Student Affairs', timeframe: '2021–2022' },
      { action: 'Plant trees and flowers, and construct relaxation chairs around the Polytechnic environment.', responsible: 'Director of Works and Services', timeframe: '2021–2023' },
      { action: 'Employ more qualified staff according to the NBTE directives.', responsible: 'Registrar, Human Resource Manager', timeframe: '2021–2025' },
      { action: 'Lay much emphasis on practical work.', responsible: 'Deputy Rector, Director Academic Planning', timeframe: '2021–2025' },
      { action: 'Provide sports ground and facilities.', responsible: 'Director of Works, Dean Student Affairs, Bursar', timeframe: '2021–2023' },
      { action: 'Construct shrines of the Blessed Virgin Mary and St Marcellin Champagnat in the Polytechnic compound.', responsible: 'Director of Works, Bursar', timeframe: '2021–2024' },
      { action: 'Make Marist Education Course compulsory and examinable for all first-year students.', responsible: 'Deputy Rector, Registrar, Director Academic Planning', timeframe: '2021' },
      { action: 'Initiate compulsory daily common mid-day prayers for staff and students.', responsible: 'Rector, Chaplain, Dean Student Affairs', timeframe: '2021' },
    ],
  },
  {
    area: 'Enrolment & Programmes',
    objectives: [
      'To admit qualified students in the different programmes of the Institution.',
      'To upgrade existing ND programmes to HND status, add additional ND programmes, and invite NBTE for full accreditation.',
      'To create awareness in form of advertisement in order to attract students to the programmes of the Institution.',
    ],
    actions: [
      { action: 'Develop more market-driven and attractive programmes and accredit them with NBTE.', responsible: 'Deputy Rector, Registrar, Director Academic Planning', timeframe: '2021–2023' },
      { action: 'Provide and improve on the human and material resources needed for these programmes.', responsible: 'Rector, Registrar, Bursar, Management Committee', timeframe: '2021–2025' },
      { action: 'Contract a marketing specialist (Recruitment Personnel) with ICT skills.', responsible: 'Human Resource Manager', timeframe: '2021' },
      { action: 'Advertise the programmes in print and electronic media.', responsible: 'Recruitment Personnel', timeframe: '2021–2025 (monthly)' },
      { action: 'Create a functional website of the Institution.', responsible: 'Marist Polytechnic ICT specialist', timeframe: '2021' },
      { action: 'Visit schools and churches and discuss the programmes to prospective students.', responsible: 'Recruitment Personnel', timeframe: '2021–2025 (before UTME)' },
    ],
  },
  {
    area: 'Resources (Material & Human)',
    objectives: [
      'To provide state-of-the-art facilities to enhance teaching & learning and attract students.',
      'To enhance incentive and motivation for staff.',
      'To establish financial sustainability.',
    ],
    actions: [
      { action: 'Erect an imposing administrative block, and more lecture halls.', responsible: 'Rector, Bursar, Director of Works', timeframe: '2021–2025' },
      { action: 'Build a well-equipped and functional school clinic.', responsible: 'Rector, Bursar, Director of Works', timeframe: '2021–2023' },
      { action: 'Improve on classroom desks and chairs to reflect a world-class institution of higher learning.', responsible: 'Bursar, Director of Works', timeframe: '2021–2023' },
      { action: 'Fix modern ICT facilities in lecture halls.', responsible: 'Director of Works, Bursar', timeframe: '2021–2023' },
      { action: 'Employ permanent staff.', responsible: 'Registrar, Human Resource Manager', timeframe: '2021–2025' },
      { action: 'Furnish staff offices with modern teaching and learning facilities.', responsible: 'Director of Works, Bursar', timeframe: '2021–2025' },
      { action: 'Improve on the Ekulu River and supply water to Umuchigbo Iji-Nike and Emene environs. Embark on bakery business.', responsible: 'Director of Works, Bursar', timeframe: '2021–2025' },
      { action: 'Open business park in the campus.', responsible: 'Bursar, Director of Works, Dean Student Affairs', timeframe: '2021–2025' },
      { action: 'Establish a CBT centre in the campus.', responsible: 'Rector, Bursar, Director of Works', timeframe: '2021–2023' },
    ],
  },
];

export const StrategicPlanPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Strategic Plan"
        title="Strategic"
        titleAccent="Development Plan"
        subtitle="Charting our course for academic excellence, institutional growth, and societal transformation — 2021 to 2026."
        backgroundImage="/img/backgrund.png"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        }
      />

      {/* ── INTRODUCTION ── */}
      <ScrollSection className="sp-intro">
        <div className="sp-section__inner">
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Introduction
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants} style={{ textAlign: 'center' }}>
            Our <em>Foundation</em>
          </motion.h2>
          <motion.div className="sp-intro-content" variants={itemVariants}>
            <p className="section-body" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 24px' }}>
              The humanistic crises in contemporary Nigerian society and the world at large demand pedagogical interventions of making skill acquisition and development of citizenship integral parts of education at all levels. The progression of any human society depends largely on the curriculum content and its relevance to the needs of the learner and the society.
            </p>
            <p className="section-body" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 24px' }}>
              The Institute of the Marist Brothers of the Schools, Province of Nigeria (Catholic Mission), encouraged by the success registered so far in education at the primary and secondary school levels, took up the challenges and contributed their quota in providing quality and holistic education anchored on moral excellence and skill acquisition at the tertiary level. This rationale gave birth to <strong style={{ color: 'var(--crimson)' }}>Marist Polytechnic</strong>.
            </p>
            <p className="section-body" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
              Marist Polytechnic was formally approved by the Federal Ministry of Education on the <strong>14th July 2016</strong>. It was given the licence by the National Board for Technical Education (NBTE) to operate as a private Polytechnic. It is located at Umuchigbo Iji-Nike in Enugu East Local Government Area of Enugu State, Nigeria — a serene, befitting, easily accessible location conducive to effective research, community service, teaching and learning.
            </p>
          </motion.div>
        </div>
      </ScrollSection>

      {/* ── PHILOSOPHY, VISION, MISSION ── */}
      <ScrollSection className="sp-philosophy" style={{ background: 'var(--crimson)', color: '#fff' }}>
        <div className="sp-section__inner">
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.6)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Our Guiding Principles
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants} style={{ textAlign: 'center', color: '#fff' }}>
            Philosophy, Vision<br /><em style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>&amp; Mission</em>
          </motion.h2>

          <motion.div className="sp-pillars" variants={itemVariants}>
            <div className="sp-pillar">
              <div className="sp-pillar-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h3>Philosophy</h3>
              <p>Progression of the Nigerian society through environmental survival, social order and economic wellbeing — attained through the development of citizenry with right morals, values, positive attitudes, sustainable knowledge and skills.</p>
            </div>
            <div className="sp-pillar">
              <div className="sp-pillar-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3>Vision</h3>
              <p>To be a world-class Polytechnic that will pursue academic and moral excellence in science and technology for the wellbeing of the individual person and the society.</p>
            </div>
            <div className="sp-pillar">
              <div className="sp-pillar-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Mission</h3>
              <p>The holistic formation of students to be graduates of science and technology who are anchored on skill acquisition, moral excellence and discipline for the transformation of the society.</p>
            </div>
          </motion.div>

          <motion.div className="sp-motto-banner" variants={itemVariants}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
            </svg>
            <span><strong>Motto:</strong> "Science and Technology for Holistic Human Development"</span>
          </motion.div>
        </div>
      </ScrollSection>

      {/* ── CORE VALUES ── */}
      <ScrollSection className="sp-values" style={{ background: 'var(--off)' }}>
        <div className="sp-section__inner">
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            What We Stand For
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants} style={{ textAlign: 'center' }}>
            Core <em>Values</em>
          </motion.h2>
          <motion.div className="sp-values-grid" variants={itemVariants}>
            {coreValues.map((v) => (
              <div className="sp-value-card" key={v.num}>
                <span className="sp-value-num">{v.num}</span>
                <span className="sp-value-name">{v.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </ScrollSection>

      {/* ── SWOT ANALYSIS ── */}
      <ScrollSection className="sp-swot">
        <div className="sp-section__inner">
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="12" y1="3" x2="12" y2="21" />
            </svg>
            Institutional Analysis
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants} style={{ textAlign: 'center' }}>
            SWOT <em>Analysis</em>
          </motion.h2>

          <motion.div className="sp-swot-grid" variants={itemVariants}>
            <div className="sp-swot-card sp-swot-card--strengths">
              <div className="sp-swot-card-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3>Strengths</h3>
              </div>
              <ul>
                {strengths.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
            <div className="sp-swot-card sp-swot-card--weaknesses">
              <div className="sp-swot-card-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <h3>Weaknesses</h3>
              </div>
              <ul>
                {weaknesses.map((w, i) => <li key={i}>{w}</li>)}
              </ul>
            </div>
            <div className="sp-swot-card sp-swot-card--opportunities">
              <div className="sp-swot-card-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <h3>Opportunities</h3>
              </div>
              <ul>
                {opportunities.map((o, i) => <li key={i}>{o}</li>)}
              </ul>
            </div>
            <div className="sp-swot-card sp-swot-card--threats">
              <div className="sp-swot-card-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <h3>Threats</h3>
              </div>
              <ul>
                {threats.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          </motion.div>
        </div>
      </ScrollSection>

      {/* ── RESULT AREAS MATRIX ── */}
      <ScrollSection className="sp-results" style={{ background: 'var(--off)' }}>
        <div className="sp-section__inner">
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            Strategic Objectives
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants} style={{ textAlign: 'center' }}>
            Result Areas <em>Matrix</em>
          </motion.h2>
          <motion.p className="section-body" variants={itemVariants} style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
            The major result areas identified from the SWOT are <strong style={{ color: 'var(--crimson)' }}>Administration</strong>, <strong style={{ color: 'var(--crimson)' }}>Enrolment &amp; Programmes</strong>, and <strong style={{ color: 'var(--crimson)' }}>Resources</strong>.
          </motion.p>

          {resultAreas.map((area, areaIdx) => (
            <motion.div className="sp-result-block" key={areaIdx} variants={itemVariants}>
              <div className="sp-result-header">
                <span className="sp-result-num">{String(areaIdx + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="sp-result-title">{area.area}</h3>
                  <div className="sp-result-objectives">
                    {area.objectives.map((obj, i) => (
                      <p key={i}>{obj}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="table-responsive" style={{ marginTop: '20px' }}>
                <table className="modern-table">
                  <thead>
                    <tr>
                      <th style={{ width: '5%' }}>S/N</th>
                      <th style={{ width: '45%' }}>Action</th>
                      <th style={{ width: '30%' }}>Person Responsible</th>
                      <th style={{ width: '20%' }}>Timeframe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {area.actions.map((act, i) => (
                      <tr key={i}>
                        <td className="sn-col">{i + 1}</td>
                        <td>{act.action}</td>
                        <td style={{ fontSize: '13px', color: 'var(--text2)' }}>{act.responsible}</td>
                        <td className="date-col">{act.timeframe}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollSection>

      {/* ── CTA ── */}
      <ScrollSection className="sp-cta" fullHeight={false}>
        <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            Building the<br /><em>Future Together</em>
          </h2>
          <p className="section-body" style={{ maxWidth: '500px', margin: '0 auto 32px' }}>
            Our strategic plan is a living document, guiding Marist Polytechnic towards becoming a world-class institution of technical education.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/about" className="btn-crimson">
              About Marist{' '}
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
