import React from 'react';
import './DataSection.css'
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
        <button className="right_accept">Accept</button>
        <button className="right_decline">Decline</button>
        </div> 
      </div>
    );
  };

export default AnsInfoDataSection;
