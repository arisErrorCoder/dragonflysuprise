import React, { useState } from 'react';

const Categories = ({ categories, onSelectCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="categories-container">
      {/* Dropdown button for mobile view */}
      <button className="dropdown-button" onClick={toggleDropdown}>
        {isDropdownOpen ? 'Close Category' : 'Select Category'}
      </button>

      {/* Dropdown menu for mobile view */}
      {isDropdownOpen && (
        <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
          <li onClick={() => { onSelectCategory('All'); toggleDropdown(); }} className="category-item">All</li>
          {categories.map((category, index) => (
            <li key={index} onClick={() => { onSelectCategory(category.name); toggleDropdown(); }} className="category-item">
              <img src={category.image} alt={category.name} className="category-image" />
              {category.name}
            </li>
          ))}
        </ul>
      )}

      {/* Categories list for larger screens */}
      <ul className="categories-list">
        <h2>Categories</h2>
        <li onClick={() => onSelectCategory('All')} className="category-item">All</li>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onSelectCategory(category.name)} className="category-item">
            <img src={category.image} alt={category.name} className="category-image" />
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
