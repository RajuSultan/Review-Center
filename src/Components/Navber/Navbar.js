import React from 'react';
// import { Link as CustomLink } from 'react-router-dom';
import './Navber.css';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <div className='nav-box'>
            <div className='nav-img'>
                <img src="https://cdn-icons-png.flaticon.com/512/1810/1810323.png" alt="" />
            </div>
            <div className='nav-links'>
                <CustomLink to="/home">HOME</CustomLink>
                <CustomLink to="/reviews">REVIEWS</CustomLink>
                <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink to="/blogs">BLOGS</CustomLink>
                <CustomLink to="/about">ABOUT</CustomLink>
            </div>
        </div>
    );
};

export default Navbar;