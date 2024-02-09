import React from 'react';
import './DataSection.css';
import { Web3Button } from "@thirdweb-dev/react";
import './main_body.css';  
  const AnsInfoDataSection = ({data}) => {
    return (
      <div className='parent_data_div'>
            <div className="data">
            <p>
                <strong>Answer Info Requests</strong>
            </p>
            </div>
            <DataCard data = {data}/>
        </div>
    );
  };
  
  // Data Card Component
  const DataCard = ({data}) => {
    return (
      <div className="data-card">
        <div className="scroll-container">
        { data && data[0].map((field, index) => (
            <DataField
              key={index}
              field={field}
              index={index}
              RequestedBy={data[1][index]}
              status={data[2][index]}
            />
          ))}
        </div>
      </div>
    );
  };
  
  // Data Field Component
  const DataField = ({ field, index , RequestedBy , status }) => {
    var contractAddress = "0x3753c7bFBa3De68EEA1edaaAFDD564dc0fc6fAf9";
    var userAddress = "0x6c47D516004DC29cDb14A5C14D576E41055bDb95";
    return (
      <div className="data-field">
         <div className="on-line">
          <div className="left-line">
            <p><strong>Field</strong></p>
          </div>
          <div className="right-line">
            <p>{field}</p>
          </div>
        </div>
        <div className="on-line">
          <div className="left-line">
            <p><strong>Requested By:</strong></p>
          </div>
          <div className="right-line">
            <p>{RequestedBy}</p>
          </div>
        </div>
        <div className="on-line">
          <div className="left-line">
            <p><strong>Status</strong></p>
          </div>
          <div className="right-line">
            {status === true && <p>true</p>}
            {status === false && <p>false</p>}
          </div>
        </div>
        <div className="on-line_buttons-line">
        <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "ansRequestFieldInfo",
                            [index , 1],{from: userAddress} //0 is the index of Query , and 1 is the if you want to answer
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
                    className='right_accept'
            > Accept </Web3Button>
        <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "ansRequestFieldInfo",
                            [index , 2],{from: userAddress} //0 is the index of Query , and 1 is the if you want to answer
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
                        className='right_decline'
            > Decline </Web3Button>
        </div> 
      </div>
    );
  };

export default AnsInfoDataSection;
