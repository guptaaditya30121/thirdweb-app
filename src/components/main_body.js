import React, { useEffect } from 'react';
import './main_body.css';
import avatar from './avatar.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { Web3Button, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import './Web3ButtonStyles.css';
import MakeClaimModal from './MakeClaimModal.js';
import RequestClaimModal from './RequestClaimModal.js';
// import {CONTRACT_ADDRESS}  from '../const/addresses.ts';
import './DataSection.css'
import DataSection from './DataSection';
import { useState } from "react";

const Content = () => {
    const contractAddress = "0xc82C534155BA18914c161C836ce2D43936e1E71c";
    const userAddress = useAddress();
    const { contract } = useContract(contractAddress);
    const [ openClaimModal, setOpenClaimModal ]  = useState(false);
    const [ openReqModal, setOpenReqModal ]  = useState(false);
    const [ claimdata, setclaimdata] = useState(false);
    const [ requestdata, setrequestdata] = useState(false);
    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Text copied to clipboard');
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    };

    useEffect(() => {
        if(contract){
          const fetchDataFromContract = async () => {
            const result = await contract.call(
              "getAllClaims",
              [],
              {from: userAddress},
            );
            setclaimdata(result);
            console.log(result);
          }
          fetchDataFromContract();
        }
    }, [contract]);

    useEffect(() => {
        if(contract){
          const fetchDataFromContract = async () => {
            const result = await contract.call(
              "getAllReqClaims",
              [],
              {from: userAddress},
            );
            setrequestdata(result);
            console.log(result);
          }
          fetchDataFromContract();
        }
    }, [contract]);
  
    return (
    <div>
        {openClaimModal  && <MakeClaimModal setOpenModal={setOpenClaimModal} />}
        {openReqModal && <RequestClaimModal setOpenModal={setOpenReqModal} />}
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
      <div className="action_buttons">
            
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
                  style={{backgroundColor: 'white', color: 'black',fontSize: '25px'}}            
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
                <Web3Button contractAddress= {contractAddress}
                        action={() => {setOpenClaimModal(true);}}
                    style={{backgroundColor: 'white',color: 'black',fontSize: '25px'}}>
                    Make a Claim
                </Web3Button>
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
        <div className="profile">
            <div className="avatar_box">
                <img src={avatar} alt=""/>
            </div>
            
            <div>
            </div>
            <div className="username" >
              {userAddress=== undefined ? "Loading..." : userAddress.slice(0 , 6) +"....." +userAddress.slice(38 , 42)}
              <FontAwesomeIcon className="edit" icon={faCopy} onClick={() => copyToClipboard(userAddress)}/>
            </div>
            {/* <div className="sub_name">
                #0000
            </div> */}
        </div>
        <div className="action_buttons">
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


            <div className="web3Button">
            <Web3Button contractAddress= {contractAddress}
                        action={() => {setOpenReqModal(true);}}
                    style={{backgroundColor: 'white',color: 'black',fontSize: '25px'}}>
                    Request a Claim
                </Web3Button>
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
        <DataSection data={claimdata}/>
        <DataSection data={requestdata}/>
      </div>
      </div>
      </div>
    );
  };


export default Content;