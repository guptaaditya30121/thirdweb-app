import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import "./TemporaryProperty.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { Web3Button } from "@thirdweb-dev/react";
import { ToastContainer, toast } from 'react-toastify';
import { useAddress, useContract } from "@thirdweb-dev/react";

const TemporaryProperty = ({ overlapGroupClassName, data }) => {
  const contractAddress = "0xfd7A76da2356d65E519B91256972a3979aF46Efb";
  const userAddress = useAddress(); // Assuming you want to use the connected user's address
  const { contract } = useContract(contractAddress);
  const [storage, setStorage] = useState({mainOwner: '', usersWithAccess: [], accessExpiry: []});
  const [expiryTime, setExpiryTime] = useState('');
  const copyToClipboard = (text) => {
    
    navigator.clipboard.writeText(text)
      .then(() => {
        	toast.success('Copied to clip-board', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark"}); 	
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };
  useEffect(() => {
    if(data && contract){
      const fetchDataFromContract = async () => {
        try {
          const result = await contract.call(
            "propertyDetails",
            [data],
            {from: userAddress},
          );
          setStorage(result);
          console.log(result);
          
          // Once storage is set, find the expiry time for userAddress
          const index = result.usersWithAccess.findIndex(address => address.toLowerCase() === userAddress.toLowerCase());
          if (index !== -1) {
            // Assuming accessExpiry is an array of BigNumber, convert it to readable format
            const expiry = result.accessExpiry[index].toNumber();
            setExpiryTime(new Date(expiry * 1000).toLocaleString()); // Converts the timestamp to local date string
          } else {
            setExpiryTime('Access not found');
          }
        } catch (error) {
          console.error('Error fetching property details:', error);
          setExpiryTime('Error fetching expiry time');
        }
      };
      fetchDataFromContract();
    }
  }, [data, contract, userAddress]);

  return (
    <div className="temp-frame">
      <div className={`temp-overlap-group ${overlapGroupClassName}`}>
        <div className="temp-div-wrapper">
          <div className="temp-text-wrapper">Property ID : {data}</div>
        </div>
      </div>
      <div className="temp-div-5">
        <div className="temp-text-wrapper-2">
        <FontAwesomeIcon className="edit" icon={faCopy} onClick={() => copyToClipboard(storage.mainOwner)}/>
        {storage.mainOwner=== undefined ? "Loading..." : storage.mainOwner.slice(0 , 4) +"....." +storage.mainOwner.slice(39 , 42)}</div>
        <div className="temp-text-wrapper-3">{expiryTime}</div>
      </div>
    </div>
  );
};

TemporaryProperty.propTypes = {
  overlapGroupClassName: PropTypes.string,
  data: PropTypes.number.isRequired, // Ensure data prop types match expected input
};

export default TemporaryProperty;
