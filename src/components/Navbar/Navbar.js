import React from 'react';
import './Navbar.css'
import navBarData from '../../data/navBar.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavbarItem from '../NavbarItem/NavbarItem';


function Navbar() {
  console.log(navBarData)
  return (<nav className="navbar">
    <div className="navbar-container">
      <div className='navbar-header'>
        <h3>Booking Website</h3>
        <div className='navbar-action'>
          <button>Register</button>
          <button>Login</button>
        </div>

      </div>
      <ul className="navbar-menu">
        {navBarData.map((item, index) => (
          <NavbarItem key={index} props={item} />
        ))}
      </ul>
    </div>
  </nav>);
}

export default Navbar;