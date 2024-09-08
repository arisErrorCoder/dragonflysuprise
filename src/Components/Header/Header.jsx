import React from 'react';
import '././Header.css';

// Importing images
import logo from '../../assets/Header/logo.png';
import staysIcon from '../../assets/Header/romantic stays.png';
import diningIcon from '../../assets/Header/romantic dining.png';
import packagesIcon from '../../assets/Header/group packages.png';
import recommendationsIcon from '../../assets/Header/recommendations.png';

// Importing icons
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <header>
        <div class="header-container">
            <div class="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div class="search-bar">
                <input type="text" placeholder="Search..."/>
                <FaSearch className="icon" />
            </div>
            <div class="header-icons">
            {/* <Link to="/profile"> */}
            <FaUser className="icon" />
            {/* </Link> */}
           <FaHeart className="icon" />
          <FaShoppingCart className="icon" />
          <FaSearch className="icon" />
            </div>
        </div>
    </header>
    <div className="search-container-mobile">
    <input type="text" placeholder="Search..."/>

    </div>
    <nav>
        <ul class="nav-categories">
            <li> <img src={diningIcon} alt="Romantic Dining Icon" />Romantic Dining</li>
            <li><img src={staysIcon} alt="Romantic Stays Icon" /> Romantic Stays</li>
            <li> <img src={packagesIcon} alt="Group Packages Icon" />Group Packages</li>
            <li><img src={recommendationsIcon} alt="Recommendations Icon" />Recommendations</li>
        </ul>
    </nav>
    </>
    );
};

export default Header;