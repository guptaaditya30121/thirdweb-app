import React from 'react';
import ReactDOM from 'react-dom'
import { ConnectWallet } from "@thirdweb-dev/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.css';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="navbar_left">
      <Link className="nav_component" to = "/">Home</Link>
      <Link className="nav_component" to="/access">Property Access</Link>
      <Link className="nav_component" to="/voting">Voting</Link>
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