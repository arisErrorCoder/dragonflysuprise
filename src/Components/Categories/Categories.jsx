import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Categories = ({ categories, onSelectCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [priceRange, setPriceRange] = useState([0, 5000]); // Default price range

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
  };

  const filteredCategories = categories
    .filter(category => {
      const price = category.price || 0;
      return price >= priceRange[0] && price <= priceRange[1];
    })
    .sort((a, b) => {
      if (sortOrder === 'ascending') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  return (
    <div className="categories-container">
      {/* Dropdown button for mobile view */}
      <button className="dropdown-button" onClick={toggleDropdown}>
        {isDropdownOpen ? 'Close' : 'Filter'}
      </button>

      {/* Dropdown menu for mobile view */}
      {isDropdownOpen && (
        <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
          <div className="sort-buttons">
        <button onClick={() => handleSortChange('ascending')}>Sort by Price: Low to High</button>
        <button onClick={() => handleSortChange('descending')}>Sort by Price: High to Low</button>
      </div>

      {/* Price range slider */}
      <div className="price-slider">
        <h3>Price Range</h3>
        <Slider
          range
          min={0}
          max={1000}
          value={priceRange}
          onChange={handlePriceRangeChange}
          marks={{
            0: '₹0',
            1000: '₹5000'
          }}
        />
        <div className="price-range-values">
          <span>Min Price: ₹{priceRange[0]}</span>
          <span>Max Price: ₹{priceRange[1]}</span>
        </div>
      </div>

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
      <div className="sort-buttons">
        <button onClick={() => handleSortChange('ascending')}>Sort by Price: Low to High</button>
        <button onClick={() => handleSortChange('descending')}>Sort by Price: High to Low</button>
      </div>

      {/* Price range slider */}
      <div className="price-slider">
        <h3>Price Range</h3>
        <Slider
          range
          min={0}
          max={1000}
          value={priceRange}
          onChange={handlePriceRangeChange}
          marks={{
            0: '₹0',
            1000: '₹5000'
          }}
        />
        <div className="price-range-values">
          <span>Min Price: ₹{priceRange[0]}</span>
          <span>Max Price: ₹{priceRange[1]}</span>
        </div>
      </div>
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
