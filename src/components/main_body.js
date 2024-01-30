import React from 'react';
import './main_body.css';
import avatar from './avatar.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Web3Button, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import './Web3ButtonStyles.css';
// import {CONTRACT_ADDRESS}  from '../const/addresses.ts';
import './DataSection.css'
import DataSection from './DataSection';

const Content = () => {
    const contractAddress = "0xc82C534155BA18914c161C836ce2D43936e1E71c";
    const userAddress = useAddress();
    const { contract } = useContract({contractAddress});
    const { claims_data, isLoading, error } = useContractRead(
      contract,
      "getAllClaims",
      [],
      {from: userAddress}
    );
    console.log(claims_data);
    console.log(error);
    const { claims_count, isLoading_, error_ } = useContractRead(
      contract,
      "getClaimsCount",
      [userAddress],
      {from: userAddress}
    );
    console.log(claims_count);
    const count = (contract) => contract.call(
      "getAllClaims",
      [], 
      { from: userAddress }
    );
    console.log(count)
    return (
    <div className='master_container'>
		<ToastContainer
		position="top-right"
		autoClose={5000}
		hideProgressBar={false}
		newestOnTop={false}
		closeOnClick
		rtl={false}
		pauseOnFocusLoss
		draggable
		pauseOnHover
		theme="dark"
		/>
      <div className="container">
        <div className="profile">
            <div className="avatar_box">
                <img src={avatar} alt=""/>
            </div>
            <div className="edit">
            <FontAwesomeIcon icon={faPenToSquare} />
            </div>
            <div className="username">
                Paramveer
            </div>
            <div className="sub_name">
                #0000
            </div>
        </div>
        <div className="action_buttons">
            <div className="heading">
                Action Buttons
            </div>
            <div className='parent_button'>


            <div className="web3Button">
              <Web3Button 
                  contractAddress= {contractAddress}
                  action={(contract) => contract.call(
                      "addUser",
                      [userAddress],{from: userAddress}
                  )}
                  onSuccess={(results)=>{
					toast.success('User Added to DocChain', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark"}); 	
                  }}
                  onError={(error)=>{
					toast.error('User Already Exists', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark"}); 
                  }}
                  style={{backgroundColor: 'white',color: 'black',fontSize: '25px'}}            
              > Add Yourself </Web3Button>
            </div>


            {/* <div className="web3Button">
            <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "makeClaim",
                            [userAddress2 , "Field" , "Value"],{from: userAddress}
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
            > Make Claim </Web3Button>
            </div> */}


            <div className="web3Button">
            <Web3Button 
                        contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "showUser",
                            [],{from: userAddress}
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
                        style={{backgroundColor: 'white',color: 'black',fontSize: '25px'}}
                          
            > Button 3</Web3Button>
            </div>
            <div className="web3Button">
            <Web3Button 
                        contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "showUser",
                            [],{from: userAddress}
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
                        style={{backgroundColor: 'white',color: 'black',fontSize: '25px'}}
                          
            > Button 4</Web3Button>
            </div>
            </div>
        </div>
      </div>
      <div className="data-section">
        <DataSection/>
        <DataSection/>
      </div>
      </div>
    );
  };


export default Content;