import React from 'react';
import "./YourComponent.css";
import image from './Image2.png';
import { ConnectWallet } from "@thirdweb-dev/react";

const YourComponent = () => {
  return (
    <div className="landingPg">
      <header>
        <div className="header-left">
          <a className="logo">
            <span>Doc</span>
            <span className="chain">Chain</span>
          </a>
        </div>
        <div className="header-right">
          <a><b>About Us</b></a>
          <a><b>Contacts</b></a>
        </div>
      </header>
      <hr className="line" /><br /><br /><br /><br /><br /><br />

      <div className="main">
        <div>Secure Your</div>
        <div>Identity</div>
      </div>
      <img src={image} alt="logo" className='frImage' />
      <ConnectWallet className="button"/>
    </div>
  );
};

export default YourComponent;