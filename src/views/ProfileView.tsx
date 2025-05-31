import React from 'react';
import './ProfileView.css';
import profilePic from '../assets/large_profile_icon.png';
import editIcon from '../assets/edit_icon.png';
import emailIcon from '../assets/email_icon.png';
import linkedinIcon from '../assets/linkedin_icon.png';
import githubIcon from '../assets/github_icon.png';
import slackIcon from '../assets/slack_icon.png';

const links = [
  { icon: emailIcon, label: 'Email' },
  { icon: linkedinIcon, label: 'LinkedIn' },
  { icon: githubIcon, label: 'GitHub' },
  { icon: slackIcon, label: 'Slack' }
];

const skills = ['React', 'TypeScript', 'Node.js', 'Docker'];

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    dates: 'Jan 2021 – Present',
    duration: '· 4 yrs 4 mos',
    items: [
      'Led the frontend development of a high-traffic SaaS dashboard using React and Redux.',
      'Collaborated with UX designers to implement responsive, user-friendly interfaces.',
      'Introduced code quality practices that reduced bugs by 30%.'
    ]
  },
  {
    role: 'Software Developer',
    company: 'WebWorks Studio',
    dates: 'Jun 2018 – Dec 2020',
    duration: '· 2 yrs 6 mos',
    items: [
      'Worked on full-stack web applications using MERN stack.',
      'Built REST APIs and implemented authentication using JWT.',
      'Maintained CI/CD pipelines for deployment automation.'
    ]
  }
];

const ProfileView: React.FC = () => (
  <div className="profile-view-container">
    <h2 className="profile-heading">Profile</h2>
    <div className="profile-scroll-section">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-info">
            <img src={profilePic} alt="Profile" className="profile-picture" />
            <div className="profile-text">
              <p>John Doe</p>
              <p>Software Engineer</p>
              <p>United States</p>
              <p>UTC -5 (EST)</p>
            </div>
          </div>
          <img src={editIcon} alt="Edit" className="edit-icon" />
        </div>
        <div className="profile-links">
          {links.map(({ icon, label }) => (
            <button key={label} className="profile-link">
              <img src={icon} alt={label} className="icon" />
              {label}
            </button>
          ))}
        </div>
        <hr className="profile-separator" />
        <div className="profile-details">
          <h2>Software Engineer</h2>
          <div className="skill-boxes">
            {skills.map(skill => (
              <span key={skill} className="skill-box">{skill}</span>
            ))}
          </div>
          <p className="profile-summary">
            Experienced software engineer with a passion for building scalable web applications and intuitive user experiences. Adept at working in agile environments and collaborating with cross-functional teams to deliver high-quality solutions.
          </p>
        </div>
      </div>
      <div className="experience-card">
        <h2>Experience</h2>
        {experiences.map(({ role, company, dates, duration, items }) => (
          <div key={role} className="experience-entry">
            <h4>{role}</h4>
            <p className="company-name">{company}</p>
            <p className="experience-dates">
              {dates} <span className="duration">{duration}</span>
            </p>
            <ul className="experience-list">
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ height: '3rem' }} />
    </div>
  </div>
);

export default ProfileView;