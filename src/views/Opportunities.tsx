import React, { useState } from 'react';
import Card from '../components/Card';
import SortDropdown from '../components/SortDropdown';
import opportunitiesIcon from '../assets/opportunities_icon.png';
import './Opportunities.css';

const Opportunities: React.FC = () => {

  const [sortValue, setSortValue] = useState("recent");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSortValue(e.target.value);
      // TODO: sort logic goes here
    };

  return (
    <main className="opportunities-content">
      <div className="content-header">
        <h2>Opportunities</h2>
        <SortDropdown value={sortValue} onChange={handleSortChange} />
      </div>
      <section className="dashboard-section">
        {/* Use the Card component */}
        <Card
          title="Project Title 1"
          info="Author A • Date A"
          points={['Point A1', 'Point A2', 'Point A3']}
          icon={opportunitiesIcon}
          buttonText="Join Now"
        />
        <Card
          title="Project Title 2"
          info="Author B • Date B"
          points={['Point B1', 'Point B2', 'Point B3']}
          icon={opportunitiesIcon}
          buttonText="Join Now"
        />
        <Card
          title="Project Title 3"
          info="Author C • Date C"
          points={['Point C1', 'Point C2', 'Point C3']}
          icon={opportunitiesIcon}
          buttonText="Join Now"
        />
      </section>
    </main>
  );
};

export default Opportunities;