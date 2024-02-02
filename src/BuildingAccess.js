import React from 'react';
import "./BuildingAccess.css";
import image from '../src/components/Image2.png';
import { ConnectWallet } from "@thirdweb-dev/react";

const HomePage = () => {
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

      
    </div>
  );
};

export default HomePage;