import React, { useState } from 'react';

export const Contact: React.FC = () => {
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
    <section id="contact">
      <div className="contact-content">
        <div className="section-eyebrow reveal">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Contact Us
        </div>
        <h2 className="section-title reveal delay-1">
          Get in Touch<br />
          <em>With Our Team</em>
        </h2>
        <p className="section-body reveal delay-2">
          We are happy to answer any questions you may have about admissions, tuition fees, hostels, or TVET programs. Reach out to our admin team or visit us at our campus in Emene.
        </p>
        <div className="contact-info-list">
          <div className="contact-info-item reveal delay-1">
            <div className="contact-info-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <div className="contact-info-label">Address</div>
              <div className="contact-info-val">
                Marist Polytechnic Enugu Campus,<br />
                Emene, Enugu State, Nigeria.
              </div>
            </div>
          </div>
          <div className="contact-info-item reveal delay-2">
            <div className="contact-info-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <div className="contact-info-label">Email Support</div>
              <div className="contact-info-val">
                info@maristpoly.edu.ng<br />
                admissions@maristpoly.edu.ng
              </div>
            </div>
          </div>
          <div className="contact-info-item reveal delay-3">
            <div className="contact-info-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <div className="contact-info-label">Call Admissions</div>
              <div className="contact-info-val">
                +234 (0) 803 123 4567<br />
                +234 (0) 805 987 6543
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className="contact-form-side" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group reveal">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              required
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group reveal">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              required
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group reveal delay-1">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="john.doe@example.com"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group reveal delay-1">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+234 803 123 4567"
              required
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group reveal delay-2">
          <label>Subject</label>
          <select name="subject" value={formData.subject} onChange={handleInputChange}>
            <option>Admissions Enquiry</option>
            <option>Academic Records</option>
            <option>Scholarships</option>
            <option>General Information</option>
          </select>
        </div>
        <div className="form-group reveal delay-3">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            required
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="form-submit reveal delay-4">
          Send Message{' '}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
    </section>
  );
};
