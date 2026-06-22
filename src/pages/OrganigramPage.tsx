import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { ScrollSection, itemVariants } from '../components/ScrollSection';

interface JobDescription {
  id: string;
  title: string;
  category: string;
  supervisor: string;
  description: string;
  duties: string[];
}

const jobDescriptions: JobDescription[] = [
  {
    id: 'rector',
    title: 'Rector',
    category: 'Executive Leadership',
    supervisor: 'Chairperson of the Governing Council',
    description: 'The Rector is the Chief Executive Officer (CEO) of the Institution and a member of the Governing Council. He/she is responsible for strengthening the organisation, ensuring the future sustainability of the Institution through effective leadership, and creating and implementing a strategy for success.',
    duties: [
      'Work in line with the Institution’s Mission, Vision and Core Values at all times.',
      'Work in line with the Institution’s Code of Conduct at all times.',
      'Strengthen the organisation and ensure the future sustainability of the Institution through effective leadership.',
      'Create and implement a strategy for success including diverse programming and effective communication.',
      'Provide clear and supportive leadership, motivation and inspiration for the staff, students and volunteers.',
      'Ensure effective venue, facilities and resource management, the delivery of high-quality services and the highest standard of customer care.',
      'Establish and maintain relationships with the local community, businesses, sector experts and education providers.',
      'Maximize opportunities for income generation through fundraising and commercial activities.',
      'Set and work within a defined budget, analyse and report on performance.',
      'Develop business plan, strategies and implementation plans (Strategic Plan).',
      'Create an exciting high quality, cost effective and inclusive programme to maximize audience attendance and participation.',
      'Develop feedback and quality assurance strategies to inform the business plan and the Institution’s programme and ensure customer satisfaction.',
      'Develop and ensure implementation of policies and procedures.',
      'Ensure legal obligations and good practice standards are met.',
      'Work closely with, inspire, motivate and support the staff team to deliver and communicate the programme.',
      'Monitor and review staffing arrangements and coordinate recruitment processes.',
      'Create environment conducive for academic, research and community service.'
    ]
  },
  {
    id: 'deputy-rector',
    title: 'Deputy Rector',
    category: 'Executive Leadership',
    supervisor: 'Rector',
    description: 'The Deputy Rector is a Principal Officer and a member of the Governing Council. He/she is the principal assistant to the Rector and takes up his/her duties in his/her absence or when incapacitated. He/she demonstrates competence in administrative and academic leadership in the academic and research environment.',
    duties: [
      'Work in line with the Institution’s Mission, Vision and Core Values at all times.',
      'Work in line with the Institution’s Code of Conduct at all times.',
      'Oversee students’ admission and ensure smooth implementation of all programmes.',
      'Develop and implement programmes such as leadership and training that support students’ educational experience.',
      'Ensure efficient coordination of activities that support and attract students.',
      'Enforce students’ discipline.',
      'Oversee student industrial placements, graduate employment and alumni association.',
      'Take responsibility for safeguarding the Institution’s archives and collections.',
      'Ensure delivery of high-quality services and the highest standards of customer care.',
      'Ensure appropriate staffing arrangements are in place at all times.',
      'Ensure effective operational and quality control systems are in place and implemented.',
      'Promote and ensure good practice in Health and Safety and Equality of Opportunity.',
      'Develop and sustain strong partnerships and external relationships.',
      'Engage with sector experts to inform programme and developments.',
      'Maximize community, member and volunteer engagement.',
      'Coordinate the activities of the Quality Assurance and Examinations offices.',
      'Advise and seek direction from the Governing Council as appropriate.',
      'Work flexibly to meet the needs of the Institution.',
      'Work with and support trustees to develop good practice and implement developments.',
      'Undertake additional duties when required to ensure the smooth running of the Institution.'
    ]
  },
  {
    id: 'registrar',
    title: 'Registrar',
    category: 'Administration',
    supervisor: 'Rector',
    description: 'The Registrar is a Principal Officer and is responsible to the Rector for the day-to-day administration of the Institution. He/she serves as the Secretary to the Governing Council and all its Committees, as well as the Secretary to the Academic Board. He/she is responsible for keeping records and providing leadership to the Registry.',
    duties: [
      'Work in line with the Institution’s Mission, Vision and Core Values at all times.',
      'Work in line with the Institution’s Code of Conduct at all times.',
      'Ensure implementation of policy guidelines in Academic Affairs Department.',
      'Ensure that Academic Affairs Department operates effectively and efficiently in line with the vision and mission of the Institution.',
      'Ensure effective and efficient coordination and implementation of activities in Academic Affairs Department.',
      'Issue official transcripts of academic progress and accomplishments of all students.',
      'Ensure the integrity, accuracy, and security of all academic records of current and former students.',
      'Facilitate effective student registration and enrolment.',
      'Build secure student data files and set policy and procedures for their responsible use.',
      'Maintain up-to-date course schedules, catalogues and final examination schedules.',
      'Manage efficient use of classrooms and supervise programme audit systems.',
      'Supervise the processes for the articulation of credits transfer, graduation and certification of the Institution’s diplomas and certificates, certificate verification, production of official transcripts and commencement ceremonies.',
      'Counsel and advise students and staff on academic matters.',
      'Interpret and enforce policies and regulations of the Management Committee, the Academic Board, and the Governing Council.',
      'Coordinate the activities of the office of the Public Relations.',
      'Exercise such other powers, perform such other official duties, and discharge such other academic functions as are assigned to him/her by the Rector/authorised officer or are prescribed by the policies and regulations of the Institution.'
    ]
  },
  {
    id: 'deputy-registrar',
    title: 'Deputy Registrar',
    category: 'Administration',
    supervisor: 'Registrar',
    description: 'The Deputy Registrar is a member of the Office of the Registrar. He/she assists the Registrar in Registry affairs, leads the implementation of directives, and provides support to students to ensure academic success and smooth operations.',
    duties: [
      'Work in line with the Institution’s Mission, Vision and Core Values at all times.',
      'Work in line with the Institution’s Code of Conduct at all times.',
      'Assist the Registrar in the day-to-day running of the Registry affairs.',
      'Act as a link between the Office of the Registrar and the Institution by providing effective and clear communication.',
      'Handle students’ admission, registration, deferment of courses, collection of certificates, examination ratification.',
      'Organise open days, research, and innovation.',
      'Ensure service delivery and other processes in the registry are efficient and managed to standards of excellence, aligning with best practices and adhering to internal and external policies and procedures.',
      'Maintain timely and accurate records of the academic progress and accomplishments of all students, while maintaining the privacy and security of those records.',
      'Counsel and advise students, parents and staff on academic matters.',
      'Listen to students’ complaints regarding admissions, registrations and records, and set up appropriate processes for resolution.',
      'Perform any other duties assigned by the Registrar.'
    ]
  },
  {
    id: 'hr-manager',
    title: 'Human Resource Manager',
    category: 'Administration',
    supervisor: 'Registrar',
    description: 'The Human Resource Manager is responsible for developing a favorable morale climate and organizational structure, enhancing employee creativity, managing non-teaching staff, and administering employment terms, working conditions, and welfare.',
    duties: [
      'Work in line with the Institution’s Mission, Vision and Core Values at all times.',
      'Work in line with the Institution’s Code of Conduct at all times.',
      'Carry out job analysis and job design in the Institution.',
      'Participate in the selection and recruitment of employees.',
      'Ensure that all relevant staff have contracts of employment, which are up to date with required legislations.',
      'Manage the employment, terms and working conditions of service, supervision and welfare of all non-teaching staff.',
      'Provide a guarantee of proper remuneration of and social responsibility to employees.',
      'Train, where necessary, and control personnel to make the most effective use of the potentials of employees and their remuneration.',
      'Design and implement staff motivation programmes.',
      'Advise on and implement the relevant labour laws.',
      'Manage employees’ compensations and benefits.',
      'Effectively manage conflict amongst employees.',
      'Carry out employee satisfaction surveys.',
      'Ensure harmonious relations between employees and Management.',
      'Ensure that the Institution has adequate insurance cover at all times to include employer’s liability, buildings and equipment cover, personal accident, travel insurance and other relevant cover.',
      'Conduct employee performance appraisals.',
      'Perform any other duties assigned by the Registrar.'
    ]
  },
  {
    id: 'bursar',
    title: 'Bursar',
    category: 'Finance',
    supervisor: 'Rector',
    description: 'The Bursar is a Principal Officer responsible for the overall formulation and implementation of the finance strategy for the department. He/she advises the management on all financial matters, bills and collects tuition/fees, and manages cash receipts.',
    duties: [
      'Work in line with the Institution’s Mission, Vision and Core Values at all times.',
      'Work in line with the Institution’s Code of Conduct at all times.',
      'Oversee day-to-day cash management.',
      'Manage accounts payable and receivable.',
      'Keep organised books of tuition and other fees and files of receipts.',
      'Ensure that the daily deposit to the Institution’s account is made in proper timeframe.',
      'Manage the Institution’s travel fund, ensuring that members of staff complete and provide all required paperwork.',
      'Ensure that the Institution has proper cash flow available to accommodate the various departments.',
      'Promote a competent and positive image of the Bursar’s office by personally resolving arising problems with clients in a professional manner, which results in solutions.',
      'Reconcile petty cash vouchers approved by the Purchasing Office by reviewing documents, which detail the purchases made through petty cash and reflected in Financial Services payments.',
      'Enforce Institution’s policy regarding returned checks, delinquent travel advances, and travel checks by communicating with subject individual(s).',
      'Advise on general financial policy within the Institution.',
      'Advise on all taxation matters and be current with taxation laws.',
      'Advise on pension schemes and pension returns of staff.',
      'Advise on various insurance schemes.',
      'Advise on the financial implications of the charitable engagements of the Institution.',
      'Advise on scholarship and bursary funds and undertake assessment of parent’s and sponsor’s income and assets prior to making bursary awards.',
      'Pay all salaries and wages, including PAYE, and other statutory deductions and ensure compliance with regulations for benefits in kind.',
      'Scrutinise and pass for payment all invoices received in the Institution.',
      'Contribute to the overall success of the Office of Financial Services.'
    ]
  },
  {
    id: 'accountant',
    title: 'Accountant',
    category: 'Finance',
    supervisor: 'Bursar',
    description: 'The Accountant is answerable to the Bursar. He/she is responsible for the efficient organization, control, and supervision of accounting units, and the planning, review, and design of accounting systems.',
    duties: [
      'Work in line with the Institution’s Mission, Vision and Core Values at all times.',
      'Work in line with the Institution’s Code of Conduct at all times.',
      'Prepare annual estimates of income and expenditure to include the preparation of departmental budgets in consultation with department heads.',
      'Monitor income and expenditure in relation to budgets and present regular management reports for the governing body through the Bursar.',
      'Prepare forecasts for future financial performance; usually over a five-year period.',
      'Keep accounts of the Institution and prepare Statements of Financial Accounts and balance sheets in accordance with Standard Practice.',
      'Maintain cash flow projections for the current and future years.',
      'Advise on investments in consultation with the Bursar.',
      'Keep proper records of pension schemes for all staff.',
      'Keep analyses of costs and other statistical record.',
      'Prepare financial appraisals of particular projects.',
      'Attend meetings with the Bank Managers as required in collaboration with the Bursar.',
      'Be involved, within reasonable limits, in the marketing of the Institution.',
      'Perform any other duties assigned by the Bursar.'
    ]
  },
  {
    id: 'librarian',
    title: 'Librarian',
    category: 'Academic Operations',
    supervisor: 'Rector',
    description: 'The Librarian is a Principal Officer responsible for strategic planning, management, and resource allocation of print, digital, and 3D library collections. He/she serves as the main interface between the Library and its users.',
    duties: [
      'Work in line with the Institution’s Mission, Vision and Core Values at all times.',
      'Work in line with the Institution’s Code of Conduct at all times.',
      'Develop, implement and evaluate Library strategies in consultation with the Academic staff to reflect fully the educational aims and objectives of the Institution.',
      'Plan and initiate plans and policy changes in the Library appropriate to the Institution’s needs.',
      'Negotiate and plan with a range of Library-wide providers (such as Bibliographic services, Digital Library services, Public Services, Internet Service Providers and Collections), to develop and enable the most effective service delivery to the Institution.',
      'Identify where services are falling short of expectations and initiate appropriate remedial action.',
      'Prepare the Library budgets at the beginning of each financial year and give periodical reports on expenditure and any external income.',
      'Manage the library resources effectively and prepare reports on Library stock, Library usage and developmental needs.',
      'Be responsible for all print, digital and 3D collections in the Library.',
      'Arrange library resources and materials in a way that promotes effective retrieval, including the systematic indexing, classification and cataloguing of these resources and materials.',
      'Supervise users in the Library.',
      'Ensure effective and efficient use of library management systems to maintain catalogue records and the use of library resources.',
      'Maintain a high level of resource awareness in relation to relevant courses and subject areas and support the teaching staff in the effective use of the curriculum.',
      'Participate in the planning and development of programmes for information handling skills and literacy within the Institution.',
      'Develop and conduct induction training and other training programmes for new and existing users of the Library services and facilities.',
      'Encourage and promote reading among staff and students.',
      'Disseminate information relating to library resources to students and teaching staff appropriately.',
      'Ensure that all library services and facilities are provided to consistently high standards and comply with all relevant Institution’s policies and procedures.',
      'Carry out routine procedures associated with the request system and inter-library loans.',
      'Guide and assist students and teaching staff in the use of electronic resources, as well on the use of ICT for effective information retrieval.',
      'Develop and implement an integrated information-handling programme for use across the Institution.',
      'Use ICT to promote, market and develop the role of library services within the Institution.',
      'Ensure systems are maintained and upgraded to acceptable standards through liaison with ICT service providers.',
      'Advise the Rector and the Deputy Rector on appropriate ICT hardware, kit and computerised systems for use within the library.',
      'Contribute to curriculum development and support through attendance of such meetings as and when required.',
      'Maintain a high level of current awareness in relation to literature, general knowledge and developments in education, librarianship and ICT.',
      'Maintain an orderly, safe and welcoming environment for all users in accordance with the health and safety policy of the Institution.',
      'Ensure that all equipment is handled with care, maintained, properly secured and the inventory is accurate and up to date according to the Institution’s policy.',
      'Maintain a supportive environment for all users including overseeing access to ICT facilities to minimize the digital divide.',
      'Maintain an awareness of Child Protection, Health and safety Regulations, Data Protection, Copyright, the Appropriate Use of the Internet, Equality Legislation, Plagiarism and Special Needs.'
    ]
  },
  {
    id: 'dean-student-affairs',
    title: 'Dean Student Affairs',
    category: 'Student Services',
    supervisor: 'Deputy Rector',
    description: 'The Dean Student Affairs is responsible for students’ pastoral care, recreational facilities, security, work-study programmes, exit and entry clearances, and sports/games coordination.',
    duties: [
      'Work in line with the Institution’s Mission, Vision and Core Values at all times.',
      'Work in line with the Institution’s Code of Conduct at all times.',
      'Plan, organise and manage students’ work-study programme, sports and games.',
      'Be responsible for students’ exit and entry in the institution.',
      'Ensure efficient running of students’ recreational facilities and security of students.',
      'Coordinate programmes such as leadership and training that support students’ educational experience.',
      'Coordinate activities that support and attract students.',
      'Coordinate students’ industrial placements, graduate employment and alumni association.',
      'Ensure pastoral care of students.',
      'Perform any other duties assigned by the Deputy Rector.'
    ]
  },
  {
    id: 'works-director',
    title: 'Director of Works and Services',
    category: 'Operations & Facilities',
    supervisor: 'Rector',
    description: 'The Director of Works and Services is responsible for project management, physical infrastructure maintenance, building projects, supplying office/lecture furniture, transport coordination, and campus beautification.',
    duties: [
      'Work in line with the Institution’s Mission, Vision and Core Values at all times.',
      'Work in line with the Institution’s Code of Conduct at all times.',
      'Manage projects and deliverable schedules.',
      'Assist with building projects and programme plans.',
      'Ensure quality and timely maintenance of all buildings, infrastructure and facilities in the Institution.',
      'Ensure the effective and timely maintenance of all equipment in the Institution.',
      'Ensure adequate supply of furniture to all staff offices and lecture rooms.',
      'Coordinate transport services of the Institution.',
      'Develop the aesthetic beauty of the Institution’s campus and ensure that it is maintained at all times.',
      'Perform any other duties assigned by the Rector.'
    ]
  },
  {
    id: 'chaplain',
    title: 'School Chaplain',
    category: 'Student Services',
    supervisor: 'Deputy Rector',
    description: 'The Chaplain assumes primary responsibility for the sacramental, liturgical, and spiritual life of the school community, providing spiritual direction and counseling in collaboration with the Dean of Student Affairs.',
    duties: [
      'Work in line with the Institution’s Mission, Vision and Core Values at all times.',
      'Work in line with the Institution’s Code of Conduct at all times.',
      'Assume primary responsibility for the sacramental life of the school community.',
      'Be responsible for daily Eucharistic celebration.',
      'Work with the office of the Dean Student Affairs to prepare students for the reception of the sacraments.',
      'Collaborate with the office of the Dean Student Affairs to organise retreats as well as recollections for the school community.',
      'Provide spiritual direction to the members of the school community.',
      'Develop in collaboration with the Dean Student Affairs an integrated pastoral care programme for the school community.',
      'Help to create and supervise in collaboration with the Dean Student Affairs pious societies in the chaplaincy.',
      'Maintain appropriate professional decorum in relationship with both staff and students.',
      'Encourage through his homilies and witness to the gospel values, staff and students to live the faith by being involved in projects relating to social justice and conflict resolution.',
      'Support and further develop in collaboration with the Dean Student Affairs the spiritual, religious and liturgical life of the school.',
      'Use a collaborative style of ministry that encourages a team approach to develop and lead a chaplaincy team.',
      'Ensure the regular celebration of the Sacrament of Reconciliation and other Sacraments in school.',
      'Develop suitable activities to mark and celebrate the major feasts and seasons of the church.',
      'Support both staff and students in their planning, preparation and leading of liturgies for collective worship.',
      'Help with the provision of suitable resources for the prayer life and worship of the school community.',
      'Collaborate with the school administration to ensure that the school environment reflects Catholic identity, and that the chapel is promoted and cared for as a sacred space.'
    ]
  }
];

export const OrganigramPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [highlightedRole, setHighlightedRole] = useState<string | null>(null);

  const categories = ['All', 'Executive Leadership', 'Administration', 'Finance', 'Academic Operations', 'Student Services', 'Operations & Facilities'];

  const handleScrollToRole = (roleId: string) => {
    setHighlightedRole(roleId);
    const element = document.getElementById(`role-${roleId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Remove highlight after 2.5 seconds
      setTimeout(() => {
        setHighlightedRole(null);
      }, 2500);
    }
  };

  const filteredRoles = jobDescriptions.filter((job) => {
    const matchesCategory = activeCategory === 'All' || job.category === activeCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.duties.some((duty) => duty.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHero
        eyebrow="Leadership & Structure"
        title="Organigram &"
        titleAccent="Job Description"
        subtitle="Understanding the administrative structure, roles, and responsibilities of Marist Polytechnic Enugu."
        backgroundImage="/img/backgrund.png"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        }
      />

      {/* ── ORGANIGRAM CHART SECTION ── */}
      <ScrollSection className="sp-intro" id="org-chart" fullHeight={false} viewportAmount={0.05}>
        <div className="sp-section__inner">
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            Organizational Structure
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants} style={{ textAlign: 'center' }}>
            Interactive <em>Organigram</em>
          </motion.h2>
          <motion.p className="section-body" variants={itemVariants} style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px' }}>
            Hover or click on any position below to view their detailed job description and responsibilities instantly.
          </motion.p>

          <motion.div className="org-tree-container" variants={itemVariants}>
            {/* Level 1: Sponsor / Authority */}
            <div className="org-level level-1">
              <div className="org-card authority">
                <h4>Provincial & Council</h4>
                <p>Marist Brothers Province of Nigeria</p>
              </div>
            </div>

            <div className="org-line-vertical" />

            {/* Level 2: supreme Governing Body */}
            <div className="org-level level-2">
              <div className="org-card council">
                <h4>Governing Council</h4>
                <p>Supreme Governing Body</p>
              </div>
            </div>

            <div className="org-line-vertical" />

            {/* Level 3: Chief Executive */}
            <div className="org-level level-3">
              <div 
                className="org-card active-card executive clickable-node" 
                onClick={() => handleScrollToRole('rector')}
              >
                <h4>Rector</h4>
                <span className="node-badge">Principal Officer / CEO</span>
                <span className="click-hint">Click for Duties →</span>
              </div>
            </div>

            <div className="org-line-vertical" />

            {/* Advisory / Boards */}
            <div className="org-advisory-row">
              <div className="org-card advisory">
                <h4>Academic Board</h4>
                <p>Academic Policy Authority</p>
              </div>
              <div className="org-card advisory">
                <h4>Management Committee</h4>
                <p>Operations & Management</p>
              </div>
            </div>

            <div className="org-line-vertical" />

            {/* Level 4: Deputy Rector / Directors / Heads */}
            <div className="org-grid-row">
              <div className="org-branch">
                <div 
                  className="org-card active-card principal clickable-node"
                  onClick={() => handleScrollToRole('deputy-rector')}
                >
                  <h4>Deputy Rector</h4>
                  <span className="node-badge">Principal Officer</span>
                  <span className="click-hint">Click for Duties →</span>
                </div>
                
                <div className="branch-line-v" />
                <div className="branch-nodes">
                  <div 
                    className="org-card active-card staff clickable-node"
                    onClick={() => handleScrollToRole('dean-student-affairs')}
                  >
                    <h5>Dean Student Affairs</h5>
                    <span className="click-hint">Duties →</span>
                  </div>
                  <div 
                    className="org-card active-card staff clickable-node"
                    onClick={() => handleScrollToRole('chaplain')}
                  >
                    <h5>School Chaplain</h5>
                    <span className="click-hint">Duties →</span>
                  </div>
                  <div className="org-card static-node">
                    <h5>Examinations Officer</h5>
                    <p>Academic Exams</p>
                  </div>
                  <div className="org-card faculty">
                    <h5>School of Sciences and Technology</h5>
                    <p className="school-list">Heads of Department</p>
                  </div>
                  <div className="org-card faculty">
                    <h5>School of Environmental Studies</h5>
                    <p className="school-list">Heads of Department</p>
                  </div>
                  <div className="org-card faculty">
                    <h5>School of General Studies</h5>
                    <p className="school-list">Heads of Department</p>
                  </div>
                  <div className="org-card faculty">
                    <h5>School of Engineering</h5>
                    <p className="school-list">Heads of Department</p>
                  </div>
                  <div className="org-card faculty">
                    <h5>School of Business Administration</h5>
                    <p className="school-list">Heads of Department</p>
                  </div>
                </div>
              </div>

              <div className="org-branch">
                <div 
                  className="org-card active-card principal clickable-node"
                  onClick={() => handleScrollToRole('registrar')}
                >
                  <h4>Registrar</h4>
                  <span className="node-badge">Principal Officer / Sec.</span>
                  <span className="click-hint">Click for Duties →</span>
                </div>

                <div className="branch-line-v" />
                <div className="branch-nodes">
                  <div 
                    className="org-card active-card staff clickable-node"
                    onClick={() => handleScrollToRole('deputy-registrar')}
                  >
                    <h5>Deputy Registrar</h5>
                    <span className="click-hint">Duties →</span>
                  </div>
                  <div 
                    className="org-card active-card staff clickable-node"
                    onClick={() => handleScrollToRole('hr-manager')}
                  >
                    <h5>HR Manager</h5>
                    <span className="click-hint">Duties →</span>
                  </div>
                  <div className="org-card static-node">
                    <h5>Admissions Officer</h5>
                    <p>Registry Office</p>
                  </div>
                  <div className="org-card static-node">
                    <h5>Public Relations Officer</h5>
                    <p>Media & PR</p>
                  </div>
                  <div className="org-card static-node">
                    <h5>Security Staff</h5>
                    <p>Registry Office</p>
                  </div>
                  <div className="org-card static-node">
                    <h5>Clerical Officers</h5>
                    <p>Registry Office</p>
                  </div>
                  <div className="org-card static-node">
                    <h5>Messengers</h5>
                    <p>Registry Office</p>
                  </div>
                </div>
              </div>

              <div className="org-branch">
                <div 
                  className="org-card active-card principal clickable-node"
                  onClick={() => handleScrollToRole('bursar')}
                >
                  <h4>Bursar</h4>
                  <span className="node-badge">Principal Officer / CFO</span>
                  <span className="click-hint">Click for Duties →</span>
                </div>

                <div className="branch-line-v" />
                <div className="branch-nodes">
                  <div 
                    className="org-card active-card staff clickable-node"
                    onClick={() => handleScrollToRole('accountant')}
                  >
                    <h5>Chief Accountant</h5>
                    <span className="click-hint">Duties →</span>
                  </div>
                  <div className="org-card static-node">
                    <h5>Account Staff</h5>
                    <p>Finance & Accounts</p>
                  </div>
                </div>
              </div>

              <div className="org-branch">
                <div 
                  className="org-card active-card principal clickable-node"
                  onClick={() => handleScrollToRole('librarian')}
                >
                  <h4>Librarian</h4>
                  <span className="node-badge">Principal Officer</span>
                  <span className="click-hint">Click for Duties →</span>
                </div>

                <div className="branch-line-v" />
                <div className="branch-nodes">
                  <div className="org-card static-node">
                    <h5>Library Staff</h5>
                    <p>Library Services</p>
                  </div>
                </div>
              </div>

              <div className="org-branch">
                <div className="org-card static-node">
                  <h4>Dir. Academic Planning</h4>
                  <span className="node-badge">Directorate</span>
                </div>

                <div className="branch-line-v" />
                <div className="branch-nodes">
                  <div className="org-card static-node">
                    <h5>Quality Assurance</h5>
                    <p>Standards & Audits</p>
                  </div>
                </div>
              </div>

              <div className="org-branch">
                <div 
                  className="org-card active-card principal clickable-node"
                  onClick={() => handleScrollToRole('works-director')}
                >
                  <h4>Dir. Works & Services</h4>
                  <span className="node-badge">Directorate</span>
                  <span className="click-hint">Click for Duties →</span>
                </div>

                <div className="branch-line-v" />
                <div className="branch-nodes">
                  <div className="org-card static-node">
                    <h5>Transport Staff</h5>
                    <p>Logistics & Fleet</p>
                  </div>
                  <div className="org-card static-node">
                    <h5>Maintenance & Cleaners</h5>
                    <p>Facilities Support</p>
                  </div>
                </div>
              </div>

            </div>

          </motion.div>
        </div>
      </ScrollSection>

      {/* ── JOB DESCRIPTIONS SECTION ── */}
      <ScrollSection className="sp-results" style={{ background: 'var(--off)' }} id="job-details" fullHeight={false} viewportAmount={0.01}>
        <div className="sp-section__inner">
          <motion.div className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5" strokeLinecap="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Job Manual
          </motion.div>
          <motion.h2 className="section-title" variants={itemVariants} style={{ textAlign: 'center' }}>
            Detailed <em>Job Descriptions</em>
          </motion.h2>

          {/* Search and Filter Controls */}
          <motion.div className="org-controls" variants={itemVariants}>
            <div className="search-box-wrapper">
              <input
                type="text"
                placeholder="Search by role name or responsibility keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="org-search-input"
              />
              {searchTerm && (
                <button className="clear-search-btn" onClick={() => setSearchTerm('')}>
                  &times;
                </button>
              )}
            </div>

            <div className="category-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat === 'All' ? 'All Officers' : cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Job List */}
          <motion.div className="job-deck" variants={itemVariants}>
            {filteredRoles.length > 0 ? (
              filteredRoles.map((role) => (
                <div
                  key={role.id}
                  id={`role-${role.id}`}
                  className={`job-card ${highlightedRole === role.id ? 'highlighted-card' : ''}`}
                >
                  <div className="job-card-header">
                    <div>
                      <span className="job-category-badge">{role.category}</span>
                      <h3 className="job-title-text">{role.title}</h3>
                    </div>
                    <div className="job-supervisor-info">
                      <strong>Supervised by:</strong> {role.supervisor}
                    </div>
                  </div>

                  <div className="job-card-body">
                    <p className="job-desc-text">{role.description}</p>
                    
                    <div className="job-duties-section">
                      <h4 className="duties-section-title">Key Duties & Responsibilities</h4>
                      <ol className="duties-list">
                        {role.duties.map((duty, index) => (
                          <li key={index} className="duty-item">
                            <span className="duty-marker">{String.fromCharCode(97 + index)})</span>
                            <span className="duty-content">{duty}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results-card">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text3)" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <h3>No Officers Found</h3>
                <p>Try adjusting your search terms or selecting a different category filter.</p>
              </div>
            )}
          </motion.div>
        </div>
      </ScrollSection>

      {/* ── CTA ── */}
      <ScrollSection className="sp-cta" fullHeight={false}>
        <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            Committed to<br /><em>Professional Decorum</em>
          </h2>
          <p className="section-body" style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
            All staff and officers of Marist Polytechnic work in synergy, guided by Christian values, moral excellence, and professional integrity to ensure holistic development.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/strategic-plan" className="btn-crimson">
              Strategic Plan{' '}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/about" className="btn-outline">
              Learn About Us{' '}
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
