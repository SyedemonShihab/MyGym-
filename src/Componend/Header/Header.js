import React from 'react';
import './Header.css'
import logo from '../img/logo.png'


const Header = () => {
  return (
    <div className='header'>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <h1>Hexa Active Gym</h1>
      </div>
    </div>
  );
};

export default Header;