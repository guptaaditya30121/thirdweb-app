import React from 'react';
import './main_body.css'
import avatar from './avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Web3Button } from "@thirdweb-dev/react";
import './Web3ButtonStyles.css';
// import {CONTRACT_ADDRESS}  from '../const/addresses.ts';
import './DataSection.css'

const Content = () => {
    const contractAddress = "0xAdd87CE1BDAc4d8b0286AcAb9B04eBb25303D560";
    console.log(contractAddress)
    var userAddress = "0x6c47D516004DC29cDb14A5C14D576E41055bDb95";
    return (
    <div className='master_container'>
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
                            "showUser",
                            [],{from: userAddress}
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
                        style={{backgroundColor: 'white',color: 'black',fontSize: '25px'}}
                          
            > Button 1</Web3Button>
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
                          
            > Button 2</Web3Button>
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
        <div className='parent_data_div'>
            <div className="data">
            <p>
                <strong>Data</strong>
            </p>
            </div>
            <DataCard />
        </div>
        <div className='parent_data_div'>
            <div className="data">
            <p>
                <strong>Data</strong>
            </p>
            </div>
            <DataCard />
        </div>
      </div>
      </div>
    );
  };

  const DataCard = () => {
    return (
      <div className="data-card">
        <div className="scroll-container">
          <DataField field="Field" value="Value" issuer="Issuer" />
          <DataField field="Field" value="Value" issuer="Issuer" />
          <DataField field="Field" value="Value" issuer="Issuer" />
          <DataField field="Field" value="Value" issuer="Issuer" />
          <DataField field="Field" value="Value" issuer="Issuer" />
          <DataField field="Field" value="Value" issuer="Issuer" />
          <DataField field="Field" value="Value" issuer="Issuer" />
          <DataField field="Field" value="Value" issuer="Issuer" />
          <DataField field="Field" value="Value" issuer="Issuer" />
          <DataField field="Field" value="Value" issuer="Issuer" />
        </div>
      </div>
    );
  };

  // Data Field Component
  const DataField = ({ field, value, issuer }) => {
    return (
      <div className="data-field">
        <div className="on-line">
          <div className="left-line">
            <p><strong>{field}</strong></p>
          </div>
          <div className="right-line">
            <p>lorem ipsum dolor</p>
          </div>
        </div>
        <div className="on-line">
          <div className="left-line">
            <p><strong>{value}</strong></p>
          </div>
          <div className="right-line">
            <p>lorem ipsum</p>
          </div>
        </div>
        <div className="on-line">
          <div className="left-line">
            <p><strong>{issuer}</strong></p>
          </div>
          <div className="right-line">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laboriosam.</p>
          </div>
        </div>
      </div>
    );
  };

export default Content;