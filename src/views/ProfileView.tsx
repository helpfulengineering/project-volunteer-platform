import React from 'react';
import './ProfileView.css';
import profilePic from '../assets/large_profile_icon.png';
import editIcon from '../assets/edit_icon.png';
import emailIcon from '../assets/email_icon.png';
import linkedinIcon from '../assets/linkedin_icon.png';
import githubIcon from '../assets/github_icon.png';
import slackIcon from '../assets/slack_icon.png';

const ProfileView: React.FC = () => {
  return (
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
            <div className="profile-edit">
              <img src={editIcon} alt="Edit Profile" className="edit-icon" />
            </div>
          </div>

          <div className="profile-links">
            <button className="profile-link">
              <img src={emailIcon} alt="Email" className="icon" />
              Email
            </button>
            <button className="profile-link">
              <img src={linkedinIcon} alt="LinkedIn" className="icon" />
              LinkedIn
            </button>
            <button className="profile-link">
              <img src={githubIcon} alt="GitHub" className="icon" />
              GitHub
            </button>
            <button className="profile-link">
              <img src={slackIcon} alt="Slack" className="icon" />
              Slack
            </button>
          </div>

          <hr className="profile-separator" />

          <div className="profile-details">
            <h2>Software Engineer</h2>
            <div className="skill-boxes">
              <span className="skill-box">React</span>
              <span className="skill-box">TypeScript</span>
              <span className="skill-box">Node.js</span>
              <span className="skill-box">Docker</span>
            </div>
            <p className="profile-summary">
              Experienced software engineer with a passion for building scalable web applications and intuitive user experiences.
              Adept at working in agile environments and collaborating with cross-functional teams to deliver high-quality solutions.
            </p>
          </div>
        </div>

        <div className="experience-card">
          <h2>Experience</h2>

          <div className="experience-entry">
            <h4>Senior Frontend Developer</h4>
            <p className="company-name">TechCorp Inc.</p>
            <p className="experience-dates">Jan 2021 – Present</p>
            <ul className="experience-list">
              <li>Led the frontend development of a high-traffic SaaS dashboard using React and Redux.</li>
              <li>Collaborated with UX designers to implement responsive, user-friendly interfaces.</li>
              <li>Introduced code quality practices that reduced bugs by 30%.</li>
            </ul>
          </div>

          <div className="experience-entry">
            <h4>Software Developer</h4>
            <p className="company-name">WebWorks Studio</p>
            <p className="experience-dates">Jun 2018 – Dec 2020</p>
            <ul className="experience-list">
              <li>Worked on full-stack web applications using MERN stack.</li>
              <li>Built REST APIs and implemented authentication using JWT.</li>
              <li>Maintained CI/CD pipelines for deployment automation.</li>
            </ul>
          </div>
        </div>
        <div style={{ height: '3rem' }}></div> {/* Spacer */}
      </div>
    </div>
  );
};

export default ProfileView;