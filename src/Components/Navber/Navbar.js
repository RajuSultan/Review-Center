import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css';

const Navbar = () => {
    return (
        <div className='nav-box'>
            <div className='nav-img'>
                <img src="https://cdn-icons-png.flaticon.com/512/1810/1810323.png" alt="" />
            </div>
            <div className='nav-links'>
                <Link to="/home">HOME</Link>
                <Link to="/reviews">REVIEWS</Link>
                <Link to="/dashboard">DASHBOARD</Link>
                <Link to="/blogs">BLOGS</Link>
                <Link to="/about">ABOUT</Link>
            </div>



        </div>
    );
};

export default Navbar;