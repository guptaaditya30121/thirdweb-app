import PropTypes from "prop-types";
import React from "react";
import "./TemporaryProperty.css";

const TemporaryProperty = ({ overlapGroupClassName}) => {
  return (
    <div className="temp-frame">
      <div className={`temp-overlap-group ${overlapGroupClassName}`}>
        <div className="temp-div-wrapper">
            <div className="temp-text-wrapper">Property Name</div>
        </div>
      </div>
      <div className="temp-div-5">
        <div className="temp-text-wrapper-2">Owner Name</div>
        <div className="temp-text-wrapper-3">69 Hrs</div>
      </div>
    </div>
  );
};

TemporaryProperty.propTypes = {
  vector: PropTypes.string,
};

export default TemporaryProperty;
