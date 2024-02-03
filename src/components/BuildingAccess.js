import React, { useState , useEffect } from 'react';
import "./BuildingAccess.css";
import PropertySection from './propertysection';
import { Web3Button, useAddress, useContract } from "@thirdweb-dev/react";
import vector from "./vector.png";
import TemporaryProperty from './TemporaryProperty';

const HomePage = () => {
  const contractAddress = "0xfd7A76da2356d65E519B91256972a3979aF46Efb";
  const userAddress = "0x6c47D516004DC29cDb14A5C14D576E41055bDb95"
  const { contract } = useContract(contractAddress);
  const [tempData , settempData] = useState(false);
  const [permData , setPermData] = useState(false);
  const [propertyID, setPropertyID] = useState('');
  const handleInputChange = (e) => {
    setPropertyID(e.target.value);
  };

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
    }
  }, [contract]);

  useEffect(() => {
    if(contract){
      const fetchDataFromContract = async () => {
        const result = await contract.call(
          "readTempProperties",
          [userAddress],
          {from: userAddress},
        );
        settempData(result);
        console.log(result);
      }
      fetchDataFromContract();
    }
  }, [contract]);


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
      <div className="add-property-form">
        <h1>Add Your Property</h1>
        <input
          type="text"
          value={propertyID}
          onChange={handleInputChange}
          placeholder="Enter Property ID"
          className="property-id-input"
        />
        <Web3Button
          contractAddress={contractAddress}
          action={(contract) => contract.call(
            "addProperty",
            [parseInt(propertyID) , userAddress], // Assuming the method takes propertyID as a parameter
            {from: userAddress} // You would replace "userAddress" with actual user address variable
          )}
          onSuccess={(results) => {
            console.log(results);
            // Optionally reset propertyID state here or handle success
          }}
        >
          Add Property
        </Web3Button>
      </div>
      <div className="property-sections">
      <div className="property-heading">
        <div className='Perm-Heading'>Permanent Properties</div>
          <div className="add-property">
              {/* <button className="add-btn">
                <div className="box">
                  <img src={vector} className='Plus'></img>
                  <div>Add Property</div>
                </div>
              </button> */}
          </div>
      </div>
        <div className="properties">
        {permData.length > 0 ? (
          permData.map((property, index) => (
            <PropertySection key={index} data={property} />
          ))
        ) : (
          <div>
            </div>
        )}
        </div>
        <div className="line">
        </div>
      <div className="temp-properties">
        <div className="t-heading">
          <div className='Perm-Heading'>Temporary Properties</div>
        </div>
        <div className="temp-cards">
          {tempData.length > 0 ? (
            tempData.map((property, index) => (
              <TemporaryProperty key={index} data={property} />
            ))
          ) : (
            <div>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;