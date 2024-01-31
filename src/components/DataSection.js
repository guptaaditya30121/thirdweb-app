import React from 'react';
import './DataSection.css'
import './main_body.css';  
  const DataSection = () => {
    return (
      <div className='parent_data_div'>
            <div className="data">
            <p>
                <strong>Data</strong>
            </p>
            </div>
            <DataCard />
        </div>
    );
  };
  
  // Data Card Component
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

export default DataSection;
