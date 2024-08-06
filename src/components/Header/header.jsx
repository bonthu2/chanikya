import React from 'react';
import './Header.css';
import Logo from '../../assets/chanikya_logo.png'

const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo' />
        <ul className='header-menu'>
            <li>Home</li>
            <li>Products</li>
            <li>Why us</li>
            <li>Testimonials</li>
        </ul>
    </div>
  );
};

export default Header;
