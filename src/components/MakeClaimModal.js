import React, {useState} from "react";
import "./MakeClaimModel.css";
import { Web3Button, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";


function MakeClaimModal({ setOpenModal }) {
    const contractAddress = "0xc82C534155BA18914c161C836ce2D43936e1E71c";
    const userAddress = useAddress();
    const { contract } = useContract({contractAddress});
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        claimDetails: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = async () => {
        const result = await contract.call(
            "makeClaim",
            [],{from: ""}
        )}
        
        // Handle the form submission logic here
        console.log('Form submitted:', formData);

        // You can perform any additional actions (e.g., API calls) here

  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button
                    onClick={() => {
                    setOpenModal(false);
                    }}
                    id="cancelBtn"
                > X </ button>
            </div>
            <div className="title">
                <h1>Make A claim</h1>
            </div>
            <form className="form-field ">
                <label >
                    First Name : 
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
                </label>
                <br />
                <label>
                    Last Name :  
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
                </label>
                <br />
                <label>
                    Claim Details : 
                <input
                    name="claimDetails"
                    value={formData.claimDetails}
                    onChange={handleInputChange}
                />
                </label>
                <br />
            {/* Submit button */}
          </form>
          <div className="footer">
            <button
                onClick={() => {
                    setOpenModal(false);
                    handleSubmit();
                }}
                id="submitBtn"
            >
                Submit
            </button>
            <button
                onClick={() => {
                setOpenModal(false);
                }}
                id="cancelBtn"
            >
                Cancel
            </button>
          </div>
      </div>
    </div>
  );
}

export default MakeClaimModal;