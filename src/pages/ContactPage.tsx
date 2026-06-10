import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { ScrollSection, itemVariants } from '../components/ScrollSection';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'Admissions Enquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.firstName}! Your message regarding "${formData.subject}" has been sent.`);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: 'Admissions Enquiry',
      message: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        titleAccent="With Our Team"
        subtitle="We are happy to answer any questions you may have about admissions, tuition fees, hostels, or TVET programs."
        backgroundImage="/img/backgrund.png"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        }
      />

      {/* ── CONTACT INFO + FORM ── */}
      <ScrollSection className="contact-main">
        <div className="contact-main__inner">
          <motion.div className="contact-main__info" variants={itemVariants}>
            <div className="section-eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Contact Information
            </div>
            <h2 className="section-title">
              Reach Out<br /><em>To Us</em>
            </h2>
            <p className="section-body">
              Reach out to our admin team or visit us at our campus in Emene, Enugu State.
            </p>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Address</div>
                  <div className="contact-info-val">
                    Marist Polytechnic Enugu Campus,<br />Emene, Enugu State, Nigeria.
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Email Support</div>
                  <div className="contact-info-val">
                    info@maristpoly.edu.ng<br />admissions@maristpoly.edu.ng
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Call Admissions</div>
                  <div className="contact-info-val">
                    +234 (0) 803 123 4567<br />+234 (0) 805 987 6543
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Office Hours</div>
                  <div className="contact-info-val">
                    Mon — Fri: 8:00 AM — 5:00 PM<br />Sat: 9:00 AM — 1:00 PM
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.form className="contact-main__form" variants={itemVariants} onSubmit={handleSubmit}>
            <h3 className="contact-form__title">Send Us a Message</h3>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="John" required value={formData.firstName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Doe" required value={formData.lastName} onChange={handleInputChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="john.doe@example.com" required value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="+234 803 123 4567" required value={formData.phone} onChange={handleInputChange} />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <select name="subject" value={formData.subject} onChange={handleInputChange}>
                <option>Admissions Enquiry</option>
                <option>Academic Records</option>
                <option>Scholarships</option>
                <option>TVET Programs</option>
                <option>General Information</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Write your message here..." required value={formData.message} onChange={handleInputChange} />
            </div>
            <button type="submit" className="form-submit">
              Send Message{' '}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </motion.form>
        </div>
      </ScrollSection>

      {/* ── MAP PLACEHOLDER ── */}
      <ScrollSection className="contact-map" fullHeight={false} style={{ background: 'var(--off)' }}>
        <div className="contact-map__inner">
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Find Us
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants} style={{ textAlign: 'center' }}>
            Our <em>Location</em>
          </motion.h2>
          <motion.div className="contact-map__embed" variants={itemVariants}>
            <iframe
              src="https://maps.google.com/maps?q=Marist%20Polytechnic%20Enugu%2C%20Enugu%20400104%2C%20Enugu&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="contact-map__iframe"
              allowFullScreen={true}
              loading="lazy"
              title="Marist Polytechnic Enugu Location Map"
            ></iframe>
          </motion.div>
        </div>
      </ScrollSection>
    </>
  );
};
