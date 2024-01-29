import React from 'react';

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
      
      <button className="button">Connect Your Wallet</button>
    </div>
  );
};

export default YourComponent;
