import React, { useState , useEffect } from 'react';
import "./BuildingAccess.css";
import PropertySection from './propertysection';
import { Web3Button, useAddress, useContract } from "@thirdweb-dev/react";
import vector from "./vector.png";
import TemporaryProperty from './TemporaryProperty';

const HomePage = () => {
 
  const userAddress = useAddress();
  const { contract } = useContract("0xd93917318E69c75813918228Fbc7BdD8b0A4Cdad");
  const [tempData , settempData] = useState(false);
  const [permData , setPermData] = useState(false);
  const everyMillisecondAmount = parseInt(
    (10_000_000_000_000 / 2.1).toFixed(0)
  );

  useEffect(() => {
    if(contract){
      const fetchDataFromContract = async () => {
        const result = await contract.call(
          "readUserProperties",
          [userAddress],
          {from: userAddress},
        );
        setPermData(result);
        console.log(result);
      }
      fetchDataFromContract();

      const intervalId = setInterval(fetchDataFromContract, 2000);

      return () => clearInterval(intervalId);
    }
  }, [contract , everyMillisecondAmount , userAddress]);

  useEffect(() => {
    if(contract){
      const fetchDataFromContract = async () => {
        const result = await contract.call(
          "readTempProperties",
          [useAddress],
          {from: userAddress},
        );
        settempData(result);
        console.log(result);
      }
      fetchDataFromContract();

      const intervalId = setInterval(fetchDataFromContract, 2000);

      return () => clearInterval(intervalId);
    }
  }, [contract , everyMillisecondAmount , userAddress]);


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
      <hr className="line" /><br /><br />
      <div className="property-sections">
      <div className="property-heading">
        <div className='Perm-Heading'>Permanent Properties</div>
          <div className="add-property">
              <button className="add-btn">
                <div className="box">
                  <img src={vector} className='Plus'></img>
                  <div>Add Property</div>
                </div>
              </button>
          </div>
      </div>
        <div className="properties">
          <PropertySection/>
          <PropertySection/>
          <PropertySection/>
          <PropertySection/>
          <PropertySection/>
          <PropertySection/>
          <PropertySection/>
        </div>
        <div className="line">
        </div>
      <div className="temp-properties">
        <div className="t-heading">
          <div className='Perm-Heading'>Temporary Properties</div>
        </div>
        <div className="temp-cards">
          <TemporaryProperty/>
          <TemporaryProperty/>
          <TemporaryProperty/>
          <TemporaryProperty/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;