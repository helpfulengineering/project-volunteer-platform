import React, { useState } from 'react';
import Card from '../components/Card';
import SortDropdown from '../components/SortDropdown'; // ✅ import it
import projectsIcon from '../assets/projects_icon.png';
import './MyProjects.css';

const MyProjects: React.FC = () => {
  const [sortValue, setSortValue] = useState("recent");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortValue(e.target.value);
    // TODO: sort logic goes here
  };

  return (
    <main className="my-projects-content">
      <div className="content-header">
        <h2>My Projects</h2>
        <SortDropdown value={sortValue} onChange={handleSortChange} />
      </div>

      <section className="dashboard-section">
        <Card
          title="Project Title 1"
          info="Author 1 • Date 1"
          points={['Point 1', 'Point 2', 'Point 3']}
          icon={projectsIcon}
          buttonText="Open"
        />
        <Card
          title="Project Title 2"
          info="Author 2 • Date 2"
          points={['Point 1', 'Point 2', 'Point 3']}
          icon={projectsIcon}
          buttonText="Open"
        />
        <Card
          title="Project Title 3"
          info="Author 3 • Date 3"
          points={['Point 1', 'Point 2', 'Point 3']}
          icon={projectsIcon}
          buttonText="Open"
        />
      </section>
    </main>
  );
};

export default MyProjects;