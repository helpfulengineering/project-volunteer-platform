import React from "react";
import "./SortDropdown.css";

interface SortDropdownProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange }) => {
  return (
    <div className="sort-by">
      <label htmlFor="sortBy">Sort by:</label>
      <div className="custom-select-wrapper">
        <select id="sortBy" value={value} onChange={onChange}>
          <option value="recent">Recent</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default SortDropdown;