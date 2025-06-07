import React, { useState } from 'react';
import Card from '../components/Card';
import opportunitiesIcon from '../assets/opportunities_icon.png';
import filterIcon from '../assets/filter_icon.png';
import sortIcon from '../assets/sort_icon.png';
import searchIcon from '../assets/search_icon.png';
import './Opportunities.css';

const Opportunities: React.FC = () => {
  const [activeTab, setActiveTab] = useState('volunteer');
  const tabs = [
    { id: 'volunteer', label: 'Volunteer Roles' },
    { id: 'projects', label: 'Projects' },
    { id: 'challenges', label: 'Challenges' },
  ];
  return (
    <main className="opportunities-content">
      <div className="opportunities-header-card">
        <h1>Helpful Opportunities</h1>
      </div>
      <div className="opportunities-tabs">
      {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="opportunities-controls">
        <div className="controls-left">
          <button className="control-button">
            <img src={filterIcon} alt="Filter" className="icon-image" /> Filter
          </button>
          <button className="control-button">
            <img src={sortIcon} alt="Sort" className="icon-image" /> Sort
          </button>
        </div>
        <div className="controls-right">
          <div className="search-field">
            <img src={searchIcon} alt="Search" className="icon-image" />
            <input
              type="text"
              placeholder="Search for your role"
              className="search-input"
            />
          </div>
        </div>
      </div>

      <section className="dashboard-section">
        <Card
          title="Project Title 1"
          info="Author A • Date A"
          points={['New chat feature', 'Replacement of Airtable with a new position search tool', 'Here’s the copywriting from the notification']}
          icon={opportunitiesIcon}
          buttonText="Apply"
        />
        <Card
          title="Project Title 2"
          info="Author B • Date B"
          points={['Point B1', 'Point B2', 'Point B3']}
          icon={opportunitiesIcon}
          buttonText="Apply"
        />
        <Card
          title="Project Title 3"
          info="Author C • Date C"
          points={['Point C1', 'Point C2', 'Point C3']}
          icon={opportunitiesIcon}
          buttonText="Apply"
        />
        <Card
          title="Project Title 4"
          info="Author D • Date D"
          points={['Point D1', 'Point D2', 'Point D3']}
          icon={opportunitiesIcon}
          buttonText="Apply"
        />
        <Card
          title="Project Title 5"
          info="Author E • Date E"
          points={['Point E1', 'Point E2', 'Point E3']}
          icon={opportunitiesIcon}
          buttonText="Apply"
        />
      </section>
    </main>
  );
};

export default Opportunities;