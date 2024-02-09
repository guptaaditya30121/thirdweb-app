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
      <a className="logo" href='/'>
            <span>Doc</span>
            <span className="chain">Chain</span>
      </a>
      <Link className="nav_component" to="/about">About</Link>
      <Link className="nav_component" to="/access">Property Access</Link>
      <Link className="nav_component" to="/voting">Voting</Link>
      <Link className="nav_component" to="/docker">Docker</Link>
    </div>
    <div className='navbar_right'>
      <div className='connectWallet'><ConnectWallet/></div>
      <div className="bell_icon"><FontAwesomeIcon icon={faBell} style={{backgroundColor: '#BAE84D'}}/></div>
    </div>
    </div>
  );
};

export default Navbar;