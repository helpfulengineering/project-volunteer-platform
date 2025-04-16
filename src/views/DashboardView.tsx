import React, { useState } from 'react';
import Card from '../components/Card';
import SortDropdown from '../components/SortDropdown';
import dashboardIcon from '../assets/dashboard_icon.png';
import dashboardImage from '../assets/dashboard_image.png';
import './DashboardView.css';

const DashboardView: React.FC = () => {

  const [sortValue, setSortValue] = useState("recent");
  
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSortValue(e.target.value);
      // TODO: sort logic goes here
    };
  
  return (
    <main className="dashboard-view-content">
      {/* Wide Container Section */}
      <div className="wide-container">
        <div className="wide-container-left">
          <h2>Empower Change: Lead or Contribute with Helpful!</h2>
          <p>
            Welcome to the Helpful project page! Explore opportunities to lead or contribute to projects,
            advance designs for commercialization, or bring external projects for support, resources, and visibility.
          </p>
          <button className="get-started-button">Get Started</button>
        </div>
        <div className="wide-container-right">
          <img src={dashboardImage} alt="Dashboard" className="dashboard-image" />
        </div>
      </div>

      {/* Project Updates Section */}
      <div className="content-header">
        <h2>Project Updates</h2>
        <SortDropdown value={sortValue} onChange={handleSortChange} />
      </div>
      <section className="dashboard-section">
        {/* Use the Card component */}
        <Card
          title="Update Title 1"
          info="Team Member 1 • Date 1"
          points={['Update Point 1', 'Update Point 2', 'Update Point 3']}
          icon={dashboardIcon}
          buttonText="Open"
        />
        <Card
          title="Update Title 2"
          info="Team Member 2 • Date 2"
          points={['Update Point 1', 'Update Point 2', 'Update Point 3']}
          icon={dashboardIcon}
          buttonText="Open"
        />
        <Card
          title="Update Title 3"
          info="Team Member 3 • Date 3"
          points={['Update Point 1', 'Update Point 2', 'Update Point 3']}
          icon={dashboardIcon}
          buttonText="Open"
        />
      </section>
    </main>
  );
};

export default DashboardView;