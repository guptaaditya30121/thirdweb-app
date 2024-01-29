import React from 'react';
import ReactDOM from 'react-dom'
import { ConnectWallet } from "@thirdweb-dev/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.css';
import { faBell } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="navbar_left">
      <div className="nav_component">Home</div>
      <div className="nav_component">About</div>
      <div className="nav_component">Features</div>
      <div className="nav_component">Others</div>
    </div>
    <div className='navbar_right'>
      <div className='connectWallet'><ConnectWallet/></div>
      <div className="bell_icon"><FontAwesomeIcon icon={faBell} style={{backgroundColor: '#BAE84D'}}/></div>
    </div>
    </div>
  );
};

export default Navbar;