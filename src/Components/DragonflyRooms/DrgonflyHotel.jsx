// import React, { useEffect, useState } from 'react';
// import Flatpickr from 'react-flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import './DrgonflyHotel.css'; // Custom CSS
// import Slider from 'rc-slider';
// import { useNavigate } from 'react-router-dom';
// import { collection, getDocs } from 'firebase/firestore';
// import { fireDB } from '../Firebase/Firebase'; // Assuming firebase is set up in a separate file
// import 'rc-slider/assets/index.css';

// const DragonflyHotel = () => {
//   const [checkInDate, setCheckInDate] = useState(null);
//   const [checkOutDate, setCheckOutDate] = useState(null);

//   // Flatpickr options
//   const checkInOptions = {
//     dateFormat: 'Y-m-d',
//     minDate: 'today',
//     onChange: (selectedDates, dateStr) => {
//       setCheckInDate(dateStr);
//     },
//   };

//   const checkOutOptions = {
//     dateFormat: 'Y-m-d',
//     minDate: checkInDate || 'today', // Min date depends on the selected check-in date
//   };

//   const [timeInterval, setTimeInterval] = useState('2');
//   const [venue, setVenue] = useState('any');
//   const [diningPackages, setDiningPackages] = useState([
//     {
//       "id": "room1",
//       "packageName": "Luxury Suite",
//       "venue": "room",
//       "price": 15000,
//       "imageUrls": "https://example.com/luxury-suite.jpg",
//       "description": "A spacious luxury suite with a king-sized bed, minibar, and a stunning view of the city.",
//       "amenities": ["Free Wi-Fi", "Air Conditioning", "Breakfast included", "Smart TV"],
//       "maxGuests": 3,
//       "rating": 4.8,
//       "reviews": 120
//     },
//     {
//       "id": "room2",
//       "packageName": "Standard Room",
//       "venue": "room",
//       "price": 8000,
//       "imageUrls": "https://example.com/standard-room.jpg",
//       "description": "A comfortable standard room with all basic amenities and an option for twin beds.",
//       "amenities": ["Free Wi-Fi", "Air Conditioning", "Room Service"],
//       "maxGuests": 2,
//       "rating": 4.3,
//       "reviews": 80
//     },
//     {
//       "id": "room3",
//       "packageName": "Family Suite",
//       "venue": "room",
//       "price": 12000,
//       "imageUrls": "https://example.com/family-suite.jpg",
//       "description": "A large family suite with two bedrooms, a living area, and a kitchen.",
//       "amenities": ["Free Wi-Fi", "Air Conditioning", "Kitchen", "Breakfast included"],
//       "maxGuests": 5,
//       "rating": 4.7,
//       "reviews": 50
//     },
//     {
//       "id": "room4",
//       "packageName": "Rooftop Room",
//       "venue": "smart room",
//       "price": 20000,
//       "imageUrls": "https://example.com/rooftop-room.jpg",
//       "description": "A beautiful rooftop room with a private balcony and breathtaking views of the skyline.",
//       "amenities": ["Free Wi-Fi", "Air Conditioning", "Private Balcony", "Breakfast included"],
//       "maxGuests": 2,
//       "rating": 4.9,
//       "reviews": 150
//     },
//     {
//       "id": "room5",
//       "packageName": "Outdoor Villa",
//       "venue": "smart room",
//       "price": 25000,
//       "imageUrls": "https://example.com/outdoor-villa.jpg",
//       "description": "A serene outdoor villa surrounded by nature, perfect for a peaceful getaway.",
//       "amenities": ["Free Wi-Fi", "Outdoor Pool", "Private Garden", "Breakfast included"],
//       "maxGuests": 4,
//       "rating": 4.6,
//       "reviews": 60
//     },
//     {
//       "id": "room6",
//       "packageName": "Restaurant Dining Package",
//       "venue": "smart room",
//       "price": 5000,
//       "imageUrls": "https://example.com/restaurant-dining.jpg",
//       "description": "A delightful dining experience in our restaurant with a curated menu by our chef.",
//       "amenities": ["Free Wi-Fi", "Chef's Special Menu", "Live Music"],
//       "maxGuests": 4,
//       "rating": 4.5,
//       "reviews": 90
//     }
//   ]
//   ); // Stores dining packages fetched from Firestore
//   const [sortOrder, setSortOrder] = useState('ascending');
//   const [priceRange, setPriceRange] = useState([0, 40000]); // Default price range
//   const [rating, setRating] = useState('any');

//   const navigate = useNavigate(); // Hook for navigation

//   // Handle reset filters
//   const handleResetFilters = () => {
//     setTimeInterval('2'); // Default time interval
//     setVenue('any'); // Default venue filter
//     setRating('any'); // Default rating filter
//     setPriceRange([0, 40000]); // Default price range
//   };

//   // Fetch data from Firestore on component mount
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const data = await getDocs(collection(fireDB, 'stayPackages'));
// //       setDiningPackages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
// //     };
// //     fetchData();
// //   }, []);

//   // Filter dining packages based on selected filters
//   const filterRestaurants = () => {
//     return diningPackages.filter((pkg) => {
//       const matchesVenue = venue === 'any' || pkg.venue.toLowerCase() === venue.toLowerCase(); // Case insensitive comparison
//       const price = pkg.price || 0;
//       const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
//       return matchesVenue && matchesPrice;
//     }).sort((a, b) => {
//       if (sortOrder === 'ascending') {
//         return a.price - b.price;
//       } else {
//         return b.price - a.price;
//       }
//     });
//   };

//   // Handle click on a dining package card
//   const handleCardClick = (pkg) => {
//     navigate('/dining-inner', { state: { pkg } }); // Navigating with restaurant data
//   };

//   // Handle sort change
//   const handleSortChange = (order) => {
//     setSortOrder(order);
//   };

//   // Handle price range change
//   const handlePriceRangeChange = (range) => {
//     setPriceRange(range);
//   };

//   return (
//     <>
//       <div className="hotel-container">
//         <div className="drgonfly-hotel-container">
//           <img src="https://lh3.googleusercontent.com/p/AF1QipO4tljjoDGE_T7w4gZm3cB6QLzygwGbhKMCJs17=s1360-w1360-h1020" alt="" />
//         </div>
//         <div className="search-barr">
//           <div className="date-input">
//             <label htmlFor="check-in">Check-In</label>
//             <Flatpickr
//               id="check-in"
//               options={checkInOptions}
//               value={checkInDate}
//               placeholder="Select Check-In Date"
//             />
//           </div>

//           <div className="date-input">
//             <label htmlFor="check-out">Check-Out</label>
//             <Flatpickr
//               id="check-out"
//               options={checkOutOptions}
//               value={checkOutDate}
//               onChange={([date]) => setCheckOutDate(date)}
//               placeholder="Select Check-Out Date"
//             />
//           </div>

//           <div className="room-guests">
//             <label htmlFor="rooms">Rooms</label>
//             <select id="rooms">
//               <option>1 Room</option>
//               <option>2 Rooms</option>
//               <option>3 Rooms</option>
//             </select>
//           </div>
//           <div className="room-guests">
//             <label htmlFor="guests">Guests</label>
//             <select id="guests">
//               <option>1 Adult</option>
//               <option>2 Adults</option>
//               <option>3 Adults</option>
//             </select>
//           </div>

//           <button className="book-now">Search</button>
//         </div>
//       </div>
//       <div className="Dining-container">
//         <aside className="sidebar">
//           <h2>Filter Options</h2>
//           <div className="filter-options">

//             {/* Duration Filter */}
//             <div className="filter-section">
//               <label htmlFor="time-interval">Room Type:</label>
//               <select
//                 id="time-interval"
//                 value={timeInterval}
//                 onChange={(e) => setTimeInterval(e.target.value)}
//               >
//                 <option value="Room">Room</option>
//                 <option value="Smart Room">Smart Room</option>
//               </select>
//             </div>

//             {/* Rating Filter */}
//             <div className="filter-section">
//               <label htmlFor="rating">Rating:</label>
//               <select
//                 id="rating"
//                 value={rating}
//                 onChange={(e) => setRating(e.target.value)}
//               >
//                 <option value="any">Any</option>
//                 <option value="4">4 Stars & Above</option>
//                 <option value="3">3 Stars & Above</option>
//                 <option value="2">2 Stars & Above</option>
//               </select>
//             </div>

//             {/* Sort Buttons */}
            // <div className="sort-buttons filter-section">
            //   <button onClick={() => handleSortChange('ascending')}>Sort by Price: Low to High</button>
            //   <button onClick={() => handleSortChange('descending')}>Sort by Price: High to Low</button>
            // </div>

//             {/* Price Range Slider */}
//             <div className="filter-section price-slider">
//               <h3>Price Range</h3>
//               <Slider
//                 range
//                 min={0}
//                 max={40000}
//                 value={priceRange}
//                 onChange={handlePriceRangeChange}
//                 marks={{
//                   0: '₹0',
//                   40000: '₹40000',
//                 }}
//               />
//               <div className="price-range-values">
//                 <span>Min Price: ₹{priceRange[0]}</span>
//                 <span>Max Price: ₹{priceRange[1]}</span>
//               </div>
//             </div>

//             {/* Reset Button */}
//             <div className="filter-section">
//               <button className="reset-button" onClick={handleResetFilters}>
//                 Reset Filters
//               </button>
//             </div>
//           </div>
//         </aside>

//         <main className="restaurant-list">
//           <h1>DrgonFly Hotel Rooms</h1>
//           <div className="cards-container">
//   {filterRestaurants().map((pkg) => (
//     <div className="card" key={pkg.id} onClick={() => handleCardClick(pkg)}>
//       <img className="card-image" src={pkg.imageUrls} alt={pkg.packageName} />
//       <div className="card-content">
//         <h3 className="card-title">{pkg.packageName}</h3>
//         <p className="card-venue">Venue: {pkg.venue.charAt(0).toUpperCase() + pkg.venue.slice(1)}</p>
//         <p className="card-price">Price: ₹{pkg.price}</p>
//         <p className="card-description">{pkg.description ? pkg.description : "No description available"}</p>
//         <p className="card-rating">Rating: {pkg.rating ? pkg.rating : "No ratings yet"}</p>
//         <p className="card-availability">
//           Availability: {pkg.availability ? "Available" : "Currently Unavailable"}
//         </p>
//         <button className="card-button">Book Now</button>
//       </div>
//     </div>
//   ))}
// </div>
//         </main>
//       </div>
//     </>
//   );
// };

// export default DragonflyHotel;




















// import React, { useState } from 'react';
// import Flatpickr from 'react-flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import './DrgonflyHotel.css'; // Custom CSS
// import Slider from 'rc-slider';
// import { useNavigate } from 'react-router-dom';
// import 'rc-slider/assets/index.css';

// const DragonflyHotel = () => {
//   const [checkInDate, setCheckInDate] = useState(null);
//   const [checkOutDate, setCheckOutDate] = useState(null);
//   const [timeInterval, setTimeInterval] = useState('any');
//   const [venue, setVenue] = useState('any');
//   const [rating, setRating] = useState('any');
//   const [priceRange, setPriceRange] = useState([0, 40000]);
//   const [numGuests, setNumGuests] = useState(1);
//   const [filteredDiningPackages, setFilteredDiningPackages] = useState([]);

//   const diningPackages = [
//     {
//       id: 1,
//       packageName: 'Gourmet Dinner for Two',
//       description: 'A romantic dinner for two with a three-course meal and a bottle of wine.',
//       price: 120,
//       rating: 4.5,
//       reviews: 150,
//       maxGuests: 2,
//       venue: 'Restaurant A',
//       imageUrls: 'https://example.com/image1.jpg'
//     },
//     {
//       id: 2,
//       packageName: 'Family Feast Package',
//       description: 'A large meal suitable for a family of four with a variety of dishes.',
//       price: 200,
//       rating: 4.0,
//       reviews: 90,
//       maxGuests: 4,
//       venue: 'Restaurant B',
//       imageUrls: 'https://example.com/image2.jpg'
//     },
//     {
//       id: 3,
//       packageName: 'Business Luncheon',
//       description: 'A set menu for business meetings, including appetizers, main course, and dessert.',
//       price: 150,
//       rating: 4.2,
//       reviews: 75,
//       maxGuests: 10,
//       venue: 'Restaurant C',
//       imageUrls: 'https://example.com/image3.jpg'
//     },
//     {
//       id: 4,
//       packageName: 'Vegetarian Delight',
//       description: 'A complete vegetarian meal with a variety of delicious dishes.',
//       price: 100,
//       rating: 4.8,
//       reviews: 200,
//       maxGuests: 2,
//       venue: 'Restaurant D',
//       imageUrls: 'https://example.com/image4.jpg'
//     },
//     {
//       id: 5,
//       packageName: 'Luxury Seafood Experience',
//       description: 'An extravagant seafood meal featuring the freshest catches of the day.',
//       price: 250,
//       rating: 5.0,
//       reviews: 50,
//       maxGuests: 2,
//       venue: 'Restaurant E',
//       imageUrls: 'https://example.com/image5.jpg'
//     },
//     {
//       id: 6,
//       packageName: 'Weekend Brunch Special',
//       description: 'A hearty brunch with a selection of dishes to start your weekend right.',
//       price: 80,
//       rating: 4.3,
//       reviews: 120,
//       maxGuests: 4,
//       venue: 'Restaurant F',
//       imageUrls: 'https://example.com/image6.jpg'
//     }
//   ];

//   const navigate = useNavigate();

//   const handleSearch = () => {
//     console.log("Filter Criteria:");
//     console.log("Venue:", venue);
//     console.log("Price Range:", priceRange);
//     console.log("Rating:", rating);
//     console.log("Number of Guests:", numGuests);

//     const results = diningPackages.filter((pkg) => {
//       const matchesVenue = venue === 'any' || pkg.venue.toLowerCase() === venue.toLowerCase();
//       const matchesPrice = pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
//       const matchesCapacity = pkg.maxGuests >= numGuests;
//       const matchesRating = rating === 'any' || pkg.rating >= parseFloat(rating);

//       console.log("Package:", pkg.packageName);
//       console.log("Matches Venue:", matchesVenue);
//       console.log("Matches Price:", matchesPrice);
//       console.log("Matches Capacity:", matchesCapacity);
//       console.log("Matches Rating:", matchesRating);

//       return matchesVenue && matchesPrice && matchesCapacity && matchesRating;
//     }).sort((a, b) => {
//       // Sort by price if needed
//       return a.price - b.price;
//     });

//     console.log("Filtered Results:", results);

//     setFilteredDiningPackages(results);
//   };

//   const handleCardClick = (pkg) => {
//     navigate('/dining-inner', { state: { pkg } });
//   };

//   const handlePriceRangeChange = (range) => {
//     setPriceRange(range);
//   };

//   const handleResetFilters = () => {
//     setTimeInterval('any');
//     setVenue('any');
//     setRating('any');
//     setPriceRange([0, 40000]);
//     setNumGuests(1);
//     setFilteredDiningPackages([]); // Clear filtered results
//   };

//   const handleSortChange = (order) => {
//     const sortedPackages = [...filteredDiningPackages].sort((a, b) => {
//       if (order === 'ascending') return a.price - b.price;
//       if (order === 'descending') return b.price - a.price;
//       return 0;
//     });
//     setFilteredDiningPackages(sortedPackages);
//   };

//   return (
//     <>
//       <div className="hotel-container">
//         <div className="drgonfly-hotel-container">
//         <img src="https://lh3.googleusercontent.com/p/AF1QipO4tljjoDGE_T7w4gZm3cB6QLzygwGbhKMCJs17=s1360-w1360-h1020" alt="Dragonfly Hotel" />
//         </div>
//         <div className="search-barr">
//           <div className="date-input">
//             <label htmlFor="check-in">Check-In</label>
//             <Flatpickr
//               id="check-in"
//               options={{ dateFormat: 'Y-m-d', minDate: 'today' }}
//               value={checkInDate}
//               onChange={([date]) => setCheckInDate(date)}
//               placeholder="Select Check-In Date"
//             />
//           </div>

//           <div className="date-input">
//             <label htmlFor="check-out">Check-Out</label>
//             <Flatpickr
//               id="check-out"
//               options={{ dateFormat: 'Y-m-d', minDate: checkInDate || 'today' }}
//               value={checkOutDate}
//               onChange={([date]) => setCheckOutDate(date)}
//               placeholder="Select Check-Out Date"
//             />
//           </div>

//           <div className="room-guests">
//             <label htmlFor="guests">Guests</label>
//             <select
//               id="guests"
//               value={numGuests}
//               onChange={(e) => setNumGuests(Number(e.target.value))}
//             >
//               <option value={1}>1 Adult</option>
//               <option value={2}>2 Adults</option>
//               <option value={3}>3 Adults</option>
//               <option value={4}>4 Adults</option>
//               <option value={5}>5 Adults</option>
//             </select>
//           </div>

//           <button className="book-now" onClick={handleSearch}>Search</button>
//         </div>
//       </div>
//       <div className="Dining-container">
//         <aside className="sidebar">
//           <h2>Filter Options</h2>
//           <div className="filter-options">
//             {/* Duration Filter */}
//             <div className="filter-section">
//               <label htmlFor="time-interval">Room Type:</label>
//               <select
//                 id="time-interval"
//                 value={timeInterval}
//                 onChange={(e) => setTimeInterval(e.target.value)}
//               >
//                 <option value="any">Any</option>
//                 <option value="Room">Room</option>
//                 <option value="Smart Room">Smart Room</option>
//               </select>
//             </div>

//             {/* Rating Filter */}
//             <div className="filter-section">
//               <label htmlFor="rating">Rating:</label>
//               <select
//                 id="rating"
//                 value={rating}
//                 onChange={(e) => setRating(e.target.value)}
//               >
//                 <option value="any">Any</option>
//                 <option value="4">4 Stars and up</option>
//                 <option value="4.5">4.5 Stars and up</option>
//                 <option value="5">5 Stars only</option>
//               </select>
//             </div>

//             <div className="sort-buttons filter-section">
//               <button onClick={() => handleSortChange('ascending')}>Sort by Price: Low to High</button>
//               <button onClick={() => handleSortChange('descending')}>Sort by Price: High to Low</button>
//             </div>

//             {/* Price Range Filter */}
//             <div className="filter-section">
//               <label>Price Range:</label>
//               <Slider
//                 range
//                 min={0}
//                 max={40000}
//                 value={priceRange}
//                 onChange={handlePriceRangeChange}
//                 marks={{ 0: '$0', 40000: '$40,000' }}
//               />
//             </div>
//           </div>
//           <button onClick={handleResetFilters}>Reset Filters</button>
//         </aside>
//         <main className="restaurant-list">
//           <h1>Dragonfly Hotel Dining Packages</h1>
//           <div className="cards-container">
//             {filteredDiningPackages.map((pkg) => (
//               <div className="card" key={pkg.id} onClick={() => handleCardClick(pkg)}>
//                 <img className="card-image" src={pkg.imageUrls} alt={pkg.packageName} />
//                 <div className="card-content">
//                   <h3 className="card-title">{pkg.packageName}</h3>
//                   <p className="card-venue">Venue: {pkg.venue.charAt(0).toUpperCase() + pkg.venue.slice(1)}</p>
//                   <p className="card-price">Price: ₹{pkg.price}</p>
//                   <p className="card-description">{pkg.description || "No description available"}</p>
//                   <p className="card-rating">Rating: {pkg.rating || "No ratings yet"}</p>
//                   <p className="card-availability">
//                     Availability: {pkg.maxGuests >= numGuests ? "Available" : "Currently Unavailable"}
//                   </p>
//                   <button className="card-button">Book Now</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </>
//   );
// };

// export default DragonflyHotel;


import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import './DrgonflyHotel.css'; // Corrected filename
import Slider from 'rc-slider';
import { useNavigate } from 'react-router-dom';
import 'rc-slider/assets/index.css';

const DragonflyHotel = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [timeInterval, setTimeInterval] = useState('any');
  const [venue, setVenue] = useState('any');
  const [rating, setRating] = useState('any');
  const [priceRange, setPriceRange] = useState([0, 40000]);
  const [numGuests, setNumGuests] = useState(1);
  const [filteredDiningPackages, setFilteredDiningPackages] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state

  const diningPackages = [
    {
      id: 1,
      roomType: 'Deluxe Suite',
      description: 'A luxurious suite with a king-sized bed, ocean view, and private balcony.',
      pricePerNight: 250,
      rating: 4.7,
      reviews: 120,
      maxGuests: 2,
      amenities: ['King-sized bed', 'Ocean view', 'Private balcony', 'Mini bar'],
      imageUrls: 'https://example.com/deluxe-suite.jpg'
    },
    {
      id: 2,
      roomType: 'Executive Room',
      description: 'A spacious room with modern amenities and a comfortable work area.',
      pricePerNight: 180,
      rating: 4.5,
      reviews: 85,
      maxGuests: 2,
      amenities: ['King-sized bed', 'Desk', 'Free Wi-Fi', 'Coffee maker'],
      imageUrls: 'https://example.com/executive-room.jpg'
    },
    {
      id: 3,
      roomType: 'Standard Room',
      description: 'A cozy room perfect for a short stay with essential amenities.',
      pricePerNight: 120,
      rating: 4.2,
      reviews: 60,
      maxGuests: 2,
      amenities: ['Queen-sized bed', 'Flat-screen TV', 'Mini fridge'],
      imageUrls: 'https://example.com/standard-room.jpg'
    },
    {
      id: 4,
      roomType: 'Presidential Suite',
      description: 'An opulent suite with a private dining area, jacuzzi, and stunning views.',
      pricePerNight: 500,
      rating: 5.0,
      reviews: 15,
      maxGuests: 4,
      amenities: ['King-sized bed', 'Jacuzzi', 'Private dining area', 'Panoramic views'],
      imageUrls: 'https://example.com/presidential-suite.jpg'
    },
    {
      id: 5,
      roomType: 'Family Suite',
      description: 'A spacious suite designed for families with multiple bedrooms and a living area.',
      pricePerNight: 350,
      rating: 4.6,
      reviews: 30,
      maxGuests: 4,
      amenities: ['Two bedrooms', 'Living area', 'Kitchenette', 'Children’s amenities'],
      imageUrls: 'https://example.com/family-suite.jpg'
    },
    {
      id: 6,
      roomType: 'Honeymoon Suite',
      description: 'A romantic suite with a private balcony, jacuzzi, and special honeymoon package.',
      pricePerNight: 300,
      rating: 4.8,
      reviews: 40,
      maxGuests: 2,
      amenities: ['Jacuzzi', 'Private balcony', 'Romantic decor', 'Complimentary champagne'],
      imageUrls: 'https://example.com/honeymoon-suite.jpg'
    },
    {
      id: 7,
      roomType: 'Business Suite',
      description: 'A well-equipped suite for business travelers with a conference table and high-speed internet.',
      pricePerNight: 220,
      rating: 4.4,
      reviews: 50,
      maxGuests: 2,
      amenities: ['Conference table', 'High-speed internet', 'Business center access'],
      imageUrls: 'https://example.com/business-suite.jpg'
    },
    {
      id: 8,
      roomType: 'Garden View Room',
      description: 'A peaceful room overlooking the hotel’s lush garden with private balcony.',
      pricePerNight: 150,
      rating: 4.3,
      reviews: 75,
      maxGuests: 2,
      amenities: ['Garden view', 'Private balcony', 'Coffee maker'],
      imageUrls: 'https://example.com/garden-view-room.jpg'
    },
    {
      id: 9,
      roomType: 'Ocean View Room',
      description: 'A room with breathtaking views of the ocean, featuring a spacious balcony.',
      pricePerNight: 200,
      rating: 4.6,
      reviews: 90,
      maxGuests: 2,
      amenities: ['Ocean view', 'Spacious balcony', 'Mini bar'],
      imageUrls: 'https://example.com/ocean-view-room.jpg'
    },
    {
      id: 10,
      roomType: 'Luxury Suite',
      description: 'A top-tier suite with elegant furnishings, a large living area, and luxurious amenities.',
      pricePerNight: 400,
      rating: 4.9,
      reviews: 20,
      maxGuests: 3,
      amenities: ['Large living area', 'Luxury furnishings', 'Private balcony'],
      imageUrls: 'https://example.com/luxury-suite.jpg'
    },
    {
      id: 11,
      roomType: 'Penthouse Suite',
      description: 'The ultimate luxury suite with panoramic city views, a private terrace, and butler service.',
      pricePerNight: 600,
      rating: 5.0,
      reviews: 10,
      maxGuests: 4,
      amenities: ['Panoramic city views', 'Private terrace', 'Butler service'],
      imageUrls: 'https://example.com/penthouse-suite.jpg'
    }
  ];
  
  const navigate = useNavigate();

  const handleSearch = () => {
    setLoading(true); // Show loading spinner

    setTimeout(() => { // Simulate loading time
      const results = diningPackages.filter((pkg) => {
        const matchesVenue = venue === 'any' || (pkg.venue && pkg.venue.toLowerCase() === venue.toLowerCase());
        const matchesPrice = pkg.pricePerNight >= priceRange[0] && pkg.pricePerNight <= priceRange[1];
        const matchesCapacity = pkg.maxGuests >= numGuests;
        const matchesRating = rating === 'any' || pkg.rating >= parseFloat(rating);

        return matchesVenue && matchesPrice && matchesCapacity && matchesRating;
      }).sort((a, b) => a.pricePerNight - b.pricePerNight);

      setFilteredDiningPackages(results);
      setLoading(false); // Hide loading spinner
    }, 1000); // Simulated delay
  };

  const handleCardClick = (pkg) => {
    navigate('/dining-inner', { state: { pkg } });
  };

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
  };

  const handleResetFilters = () => {
    setTimeInterval('any');
    setVenue('any');
    setRating('any');
    setPriceRange([0, 40000]);
    setNumGuests(1);
    setFilteredDiningPackages([]);
  };

  const handleSortChange = (order) => {
    const sortedPackages = [...filteredDiningPackages].sort((a, b) => {
      if (order === 'ascending') return a.pricePerNight - b.pricePerNight;
      if (order === 'descending') return b.pricePerNight - a.pricePerNight;
      return 0;
    });
    setFilteredDiningPackages(sortedPackages);
  };

  return (
    <>
      <div className="hotel-container">
        <div className="drgonfly-hotel-container">
          <img src="https://lh3.googleusercontent.com/p/AF1QipO4tljjoDGE_T7w4gZm3cB6QLzygwGbhKMCJs17=s1360-w1360-h1020" alt="Dragonfly Hotel" />
        </div>
        <div className="search-barr">
          <div className="date-input">
            <label htmlFor="check-in">Check-In</label>
            <Flatpickr
              id="check-in"
              options={{ dateFormat: 'Y-m-d', minDate: 'today' }}
              value={checkInDate}
              onChange={([date]) => setCheckInDate(date)}
              placeholder="Select Check-In Date"
            />
          </div>

          <div className="date-input">
            <label htmlFor="check-out">Check-Out</label>
            <Flatpickr
              id="check-out"
              options={{ dateFormat: 'Y-m-d', minDate: checkInDate || 'today' }}
              value={checkOutDate}
              onChange={([date]) => setCheckOutDate(date)}
              placeholder="Select Check-Out Date"
            />
          </div>

          <div className="room-guests">
            <label htmlFor="guests">Guests</label>
            <select
              id="guests"
              value={numGuests}
              onChange={(e) => setNumGuests(Number(e.target.value))}
            >
              <option value={1}>1 Adult</option>
              <option value={2}>2 Adults</option>
              <option value={3}>3 Adults</option>
              <option value={4}>4 Adults</option>
              <option value={5}>5 Adults</option>
            </select>
          </div>

          <button className="book-now" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="Dining-container">
        <aside className="sidebar">
          <h2>Filter Options</h2>
          <div className="filter-options">
            <div className="filter-section">
              <label htmlFor="time-interval">Room Type:</label>
              <select
                id="time-interval"
                value={timeInterval}
                onChange={(e) => setTimeInterval(e.target.value)}
              >
                <option value="any">Any</option>
                <option value="Room">Room</option>
                <option value="Smart Room">Smart Room</option>
              </select>
            </div>

            <div className="filter-section">
              <label htmlFor="rating">Rating:</label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="any">Any</option>
                <option value="4">4 Stars and up</option>
                <option value="4.5">4.5 Stars and up</option>
                <option value="5">5 Stars only</option>
              </select>
            </div>

            <div className="sort-buttons filter-section">
              <button onClick={() => handleSortChange('ascending')}>Sort by Price: Low to High</button>
              <button onClick={() => handleSortChange('descending')}>Sort by Price: High to Low</button>
            </div>

            <div className="filter-section">
              <label>Price Range:</label>
              <Slider
                range
                min={0}
                max={40000}
                value={priceRange}
                onChange={handlePriceRangeChange}
                marks={{ 0: '₹0', 40000: '₹40,000' }}
              />
            </div>
          </div>
          <button onClick={handleResetFilters}>Reset Filters</button>
        </aside>
        <main className="restaurant-list">
          <h1>Dragonfly Hotel Dining Packages</h1>
          {loading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Loading...</p>
            </div>
          ) : (
            <div className="cards-container">
              {filteredDiningPackages.map((pkg) => (
                <div className="card" key={pkg.id} onClick={() => handleCardClick(pkg)}>
                  <img className="card-image" src={pkg.imageUrls} alt={pkg.roomType} />
                  <div className="card-content">
                    <h3 className="card-title">{pkg.roomType}</h3>
                    <p className="card-price">Price: ₹{pkg.pricePerNight}</p>
                    <p className="card-description">{pkg.description || "No description available"}</p>
                    <p className="card-rating">Rating: {pkg.rating || "No ratings"}</p>
                    <button className="card-button">Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default DragonflyHotel;



