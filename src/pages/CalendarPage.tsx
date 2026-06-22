import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { ScrollSection, itemVariants } from '../components/ScrollSection';

export const CalendarPage: React.FC = () => {
  const calendarEvents = [
    { sn: 1, date: "Saturday 2nd May, 2026", event: "Students return to campus" },
    { sn: 2, date: "Monday 4th May, 2026", event: "Lectures begin / Return of scripts / Score sheet" },
    { sn: 3, date: "Wednesday 13th May, 2026", event: "Management Committee meeting" },
    { sn: 4, date: "Friday 15th May, 2026", event: "Prayer session / Reflection - Staff and Student / Election of Students' Leadership" },
    { sn: 5, date: "Monday 18th May, 2026", event: "Batch B TVET Orientation" },
    { sn: 6, date: "Friday 22nd May, 2026", event: "Academic Board Meeting" },
    { sn: 7, date: "Saturday 23rd May, 2026", event: "Road Show for 2026/2027 admission" },
    { sn: 8, date: "Monday – Friday 25th – 29th May, 2026", event: "Submission of 2nd semester Exam questions and marking guide" },
    { sn: 9, date: "Friday 29th May, 2026", event: "Prayer session / Reflection – Staff/students / Students collect their 2026/2027 1st semester results" },
    { sn: 10, date: "Saturday 6th June, 2026", event: "Feast of St. Marcellien Champagnat - Lecture free day" },
    { sn: 11, date: "Wednesday 10th June, 2026", event: "Management Committee meeting" },
    { sn: 12, date: "Thursday 11th June, 2026", event: "Admission Committee meeting" },
    { sn: 13, date: "Friday 12th June, 2026", event: "Prayer session – staff and students / Inauguration of students leadership" },
    { sn: 14, date: "Saturday 13th June, 2026", event: "Road Show for 2026/2027 admission" },
    { sn: 15, date: "Monday 22nd June, 2026", event: "Mid-semester Exam commences" },
    { sn: 16, date: "Friday 26th June, 2026", event: "Prayer session / Reflection – Staff and Students" },
    { sn: 17, date: "Wednesday 8th July, 2026", event: "Management Committee meeting" },
    { sn: 18, date: "Friday 10th July, 2026", event: "Prayer session / Reflection – staff and students" },
    { sn: 19, date: "Saturday 11th July, 2026", event: "Road Show for 2026/2027 Admission" },
    { sn: 20, date: "Friday 17th July, 2026", event: "Project Defense" },
    { sn: 21, date: "Thursday 23rd July, 2026", event: "Admission Committee" },
    { sn: 22, date: "Friday 31st July, 2026", event: "Prayer session / Reflection – Staff and Students" },
    { sn: 23, date: "Wednesday 12th August, 2026", event: "Management Committee meeting" },
    { sn: 24, date: "Thursday 13th August, 2026", event: "Admission Committee Meeting" },
    { sn: 25, date: "Friday 14th August, 2026", event: "Prayer session / reflection – Staff and Students" },
    { sn: 26, date: "Saturday 22nd August, 2026", event: "Road Show for 2026/2027 Admission" },
    { sn: 27, date: "Monday 17th to Friday 28th August, 2026", event: "Second Semester Examination commence" },
    { sn: 28, date: "Saturday 29th August, 2026", event: "Students vacate hostel / campus" },
    { sn: 29, date: "Saturday 17th October, 2026", event: "Students return to hostel" },
    { sn: 30, date: "Monday 19th October, 2026", event: "Lectures begin / Return of scripts / score sheets" },
    { sn: 31, date: "Wednesday 11th November, 2026", event: "Management meeting" },
    { sn: 32, date: "Thursday 12th November, 2026", event: "Admission Committee meeting" },
    { sn: 33, date: "Friday 13th November, 2026", event: "Prayer session / Reflection – Staff and Students. Students collect their 2026/2027 second semester results." },
  ];

  return (
    <>
      <PageHero
        eyebrow="Academic Calendar"
        title="2026/2027"
        titleAccent="Session"
        subtitle="2nd Semester events and important dates for Marist Polytechnic Enugu."
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

      <ScrollSection className="calendar-content">
        <div className="calendar-inner" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div variants={itemVariants} className="calendar-header" style={{ marginBottom: '32px', textAlign: 'center' }}>
            <h2 className="section-title">Schedule of <em>Events</em></h2>
            <p className="section-body">Note: Students moral instruction/mentorship - Sundays 4pm to 5pm</p>
          </motion.div>

          <motion.div variants={itemVariants} className="table-responsive">
            <table className="modern-table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Date</th>
                  <th>Events</th>
                </tr>
              </thead>
              <tbody>
                {calendarEvents.map((item) => (
                  <tr key={item.sn}>
                    <td className="sn-col">{item.sn}</td>
                    <td className="date-col"><strong>{item.date}</strong></td>
                    <td>{item.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div variants={itemVariants} style={{ marginTop: '48px', padding: '24px', background: 'var(--off)', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text2)', fontStyle: 'italic', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <strong>Dr Chris Ejeogo (KSJI)</strong>
              Registrar
            </p>
          </motion.div>
        </div>
      </ScrollSection>
    </>
  );
};
