import React from 'react';
import './Header.css';

// Importing images
import logo from '../../assets/Header/logo.png';
import staysIcon from '../../assets/Header/romantic stays.png';
import diningIcon from '../../assets/Header/romantic dining.png';
import packagesIcon from '../../assets/Header/group packages.png';
import recommendationsIcon from '../../assets/Header/recommendations.png';

// Importing icons
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
        <header>
            <div className="header-container">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <FaSearch className="icon" />
                </div>
                <div className="header-icons">
                    <FaUser className="icon" />
                    <FaHeart className="icon" />
                    <FaShoppingCart className="icon" />
                    <FaSearch className="icon" />
                </div>
            </div>
        </header>

        <div className="search-container-mobile">
            <input type="text" placeholder="Search..." />
        </div>

        <nav>
            <ul className="nav-categories">
                {/* Replacing Link with onClick that uses navigate */}
                <li onClick={() => handleNavigation('/Dining')}>
                    <img src={diningIcon} alt="Romantic Dining Icon" />
                    Romantic Dining
                </li>
                <li onClick={() => handleNavigation('/RomanticStays')}>
                    <img src={staysIcon} alt="Romantic Stays Icon" />
                    Romantic Stays
                </li>
                <li onClick={() => handleNavigation('/supriseplanner')}>
                    <img src={packagesIcon} alt="Group Packages Icon" />
                    Suprise Planner
                </li>
                <li onClick={() => handleNavigation('/Recommendations')}>
                    <img src={recommendationsIcon} alt="Recommendations Icon" />
                    Recommendations
                </li>
            </ul>
        </nav>
        </>
    );
};

export default Header;
