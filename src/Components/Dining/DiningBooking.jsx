import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { fireDB } from '../Firebase/Firebase'; // Assuming firebase is set up in a separate file
import './DiningBooking.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const DiningBooking = () => {
  const [timeInterval, setTimeInterval] = useState('2');
  const [venue, setVenue] = useState('any');
  const [diningPackages, setDiningPackages] = useState([]); // Stores dining packages fetched from Firestore
  const [sortOrder, setSortOrder] = useState('ascending');
  const [priceRange, setPriceRange] = useState([0, 40000]); // Default price range

  const navigate = useNavigate(); // Hook for navigation

  // Fetch data from Firestore on component mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(fireDB, 'diningPackages'));
      setDiningPackages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  // Filter dining packages based on selected venue and price range
  const filterRestaurants = () => {
    return diningPackages.filter((pkg) => {
      const matchesVenue = venue === 'any' || pkg.venue.toLowerCase() === venue.toLowerCase(); // Case insensitive comparison
      const price = pkg.price || 0;
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
      return matchesVenue && matchesPrice;
    }).sort((a, b) => {
      if (sortOrder === 'ascending') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  };

  // Handle click on a dining package card
  const handleCardClick = (pkg) => {
    navigate('/dining-inner', { state: { pkg } }); // Navigating with restaurant data
  };

  // Handle sort change
  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  // Handle price range change
  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
  };

  return (
    <div className="Dining-container">
      <aside className="sidebar">
        <h2>Filter Options</h2>
        <div className="filter-options">
          <label htmlFor="time-interval">Duration:</label>
          <select
            id="time-interval"
            value={timeInterval}
            onChange={(e) => setTimeInterval(e.target.value)}
          >
            <option value="2">2 hours</option>
            <option value="4">4 hours</option>
          </select>

          <label htmlFor="venue">Venue Type:</label>
          <select
            id="venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          >
            <option value="any">Any</option>
            <option value="room">Room</option>
            <option value="restaurant">Resturant</option>
            <option value="rooftop">Rooftop</option>
            <option value="outdoor">Outdoor</option>
          </select>

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
              max={40000}
              value={priceRange}
              onChange={handlePriceRangeChange}
              marks={{
                0: '₹0',
                40000: '₹40000'
              }}
            />
            <div className="price-range-values">
              <span>Min Price: ₹{priceRange[0]}</span>
              <span>Max Price: ₹{priceRange[1]}</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="restaurant-list">
        <h1>Romantic Dining</h1>
        <div className="cards-container">
          {filterRestaurants().map((pkg) => (
            <div className="card" key={pkg.id} onClick={() => handleCardClick(pkg)}>
              <img src="https://resizer.otstatic.com/v2/photos/xlarge/4/66094194.webp" alt={pkg.packageName} />
              <h3>{pkg.packageName}</h3>
              <p>Venue: {pkg.venue.charAt(0).toUpperCase() + pkg.venue.slice(1)}</p>
              <p>₹{pkg.price}</p>
              <button>Book Now</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DiningBooking;
