import PropTypes from "prop-types";
import React from "react";
import "./propertysection.css";
import vector from "./vector.png";

const PropertySection = ({ overlapGroupClassName}) => {
  return (
    <div className="frame">
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className="div-wrapper">
          {/* <div className="text-wrapper">Property Name</div> */}
        </div>
      </div>
      <div className="div-4">
        <div className="text-wrapper-5">Name</div>
        <div className="text-wrapper-6">Time Left</div>
      </div>
      <div className="div">
        <div className="text-wrapper-2">Temp Owner Name</div>
        <div className="text-wrapper-3">69 Hrs</div>
      </div>
      <div className="div-3">
        <div className="text-wrapper-2">Temp Owner Name</div>
        <div className="text-wrapper-3">69 Hrs</div>
      </div>
      <div className="div-2">
        <img className="vector" alt="Vector" src={vector} />
        <div className="text-wrapper-4">Give Access</div>
      </div>
    </div>
  );
};

PropertySection.propTypes = {
  vector: PropTypes.string,
};

export default PropertySection;
