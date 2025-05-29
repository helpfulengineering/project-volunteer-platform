import React, { useState } from 'react';
import './styles/Dashboard.css';
import Header from '../components/Header.tsx';
import MyProjects from '../views/MyProjects';
import Opportunities from '../views/Opportunities';
import DashboardView from '../views/DashboardView'; // Import the new DashboardView component

// Importing icons for sidebar
import dashboardIcon from '../assets/dashboard_icon.png';
import projectsIcon from '../assets/projects_icon.png';
import opportunitiesIcon from '../assets/opportunities_icon.png';
import aboutIcon from '../assets/about_icon.png';
import toolsIcon from '../assets/tools_icon.png';
import settingsIcon from '../assets/settings_icon.png';

const Dashboard: React.FC = () => {
  // State to track the current active view
  const [activeView, setActiveView] = useState<'DashboardView' | 'MyProjects' | 'Opportunities'>('DashboardView');

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <aside className="sidebar">
          {/* Dashboard Section */}
          <div className="sidebar-section">
            <span
              className={`sidebar-tab ${activeView === 'DashboardView' ? 'active-tab' : ''}`}
              onClick={() => setActiveView('DashboardView')}
            >
              <img src={dashboardIcon} alt="Dashboard Icon" className="sidebar-icon" />
              Dashboard
            </span>
          </div>

          {/* Manage Section */}
          <div className="sidebar-section">
            <label className="sidebar-label">Manage</label>
            <div className="sidebar-tabs">
              <span
                className={`sidebar-tab ${activeView === 'MyProjects' ? 'active-tab' : ''}`}
                onClick={() => setActiveView('MyProjects')}
              >
                <img src={projectsIcon} alt="My Projects Icon" className="sidebar-icon" />
                My Projects
              </span>
              <span
                className={`sidebar-tab ${activeView === 'Opportunities' ? 'active-tab' : ''}`}
                onClick={() => setActiveView('Opportunities')}
              >
                <img src={opportunitiesIcon} alt="Opportunities Icon" className="sidebar-icon" />
                Opportunities
              </span>
            </div>
          </div>

          {/* Set Up Section */}
          <div className="sidebar-section">
            <label className="sidebar-label">Set Up</label>
            <div className="sidebar-tabs">
              <span className="sidebar-tab">
                <img src={aboutIcon} alt="About Helpful Icon" className="sidebar-icon" />
                About Helpful
              </span>
              <span className="sidebar-tab">
                <img src={toolsIcon} alt="Tools Icon" className="sidebar-icon" />
                Tools
              </span>
              <span className="sidebar-tab">
                <img src={settingsIcon} alt="Settings Icon" className="sidebar-icon" />
                Settings
              </span>
            </div>
          </div>
        </aside>
        <main className="content">
          {/* Conditionally Render Views */}
          {activeView === 'DashboardView' && <DashboardView />}
          {activeView === 'MyProjects' && <MyProjects />}
          {activeView === 'Opportunities' && <Opportunities />}
        </main>
      </div>
      {/* Footer commented out */}
      {/* <footer className="dashboard-footer">
        <p>© 2025 Your Company. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Dashboard;
