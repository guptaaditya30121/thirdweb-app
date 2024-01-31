// import React, {useState} from "react";
// import "./MakeClaimModal.css";
// import { Web3Button, useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// function MakeClaimModal({ setOpenModal }) {
//     const contractAddress = "0xc82C534155BA18914c161C836ce2D43936e1E71c";
//     const userAddress = useAddress();
//     const { contract } = useContract({contractAddress});
//     const [formData, setFormData] = useState({
//         Field: '',
//         Value: '',
//         // claimDetails: '',
//       });
    
//     const handleInputChange = (e) => {
//         // e.prevent.default();        
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };
//     // Handle the form submission logic here
//     console.log('Form submitted:', formData);

//     // You can perform any additional actions (e.g., API calls) here
//   return (
//     <div className="modalBackground">
//         <div className="modalContainer">
//             <div className="titleCloseBtn">
//                 <button
//                     onClick={() => {
//                     setOpenModal(false);
//                     }}
//                     id="cancelBtn"
//                 > X </ button>
//             </div>
//             <div className="title">
//                 <h1>Make a Claim</h1>
//             </div>
//             <form className="form-field">
//                 <label >
//                     Field : 
//                 <input
//                     type="text"
//                     name="firstName"
//                     value={formData.Field}
//                     onChange={handleInputChange}
//                 />
//                 </label>
//                 <br />
//                 <label>
//                     Value :  
//                 <input
//                     type="text"
//                     name="lastName"
//                     value={formData.Value}
//                     onChange={handleInputChange}
//                 />
//                 </label>
//                 {/* <br /> */}
//                 {/* <label>
//                      : 
//                 <input
//                     name="claimDetails"
//                     value={formData.claimDetails}
//                     onChange={handleInputChange}
//                 />
//                 </label> */}
//                 {/* <br /> */}
//             {/* Submit button */}
//           </form>
//           <div className="footer">
//           <Web3Button
//                 contractAddress={contractAddress}
//                 action={(contract) =>
//                 contract.call("makeClaim", [userAddress,formData.Field,formData.Value], {
//                     from: userAddress,
//                 })}
//                 onSuccess={(results)=>{
//                     toast.success('Claim added to Blockchain', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark"}); 
//                     setOpenModal(false);	
//                 }}
//                 onError={(error)=>{
//                     toast.error('Claim Failed', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark"}); 
//                     setOpenModal(false);
//                 }}
//                 style={{backgroundColor: 'white',color: 'black',fontSize: '25px'}}
//             >
//             Button 2
//             </Web3Button>
//             <button
//                 onClick={() => {
//                 setOpenModal(false);
//                 }}
//                 id="cancelBtn"
//             >
//                 Cancel
//             </button>
//           </div>
//       </div>
//     </div>
//   );
// }

// export default MakeClaimModal;
import React, {useState} from "react";
import "./MakeClaimModal.css";
import { Web3Button, useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MakeClaimModal({ setOpenModal }) {
    const contractAddress = "0xc82C534155BA18914c161C836ce2D43936e1E71c";
    const userAddress = useAddress();
    const { contract } = useContract(contractAddress);
    const [formData, setFormData] = useState({
        Field: '',
        Value: '',
        UserAddress: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

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
                    Field : 
                <input
                    type="text"
                    name="firstName"
                    value={formData.Field}
                    onChange={handleInputChange}
                />
                </label>
                <br />
                <label>
                    Value :  
                <input
                    type="text"
                    name="lastName"
                    value={formData.Value}
                    onChange={handleInputChange}
                />
                </label>
                <br />
                <label>
                    Issued to: 
                <input
                    name="claimDetails"
                    value={formData.UserAddress}
                    onChange={handleInputChange}
                />
                </label>
                <br />
            {/* Submit button */}
          </form>
          <div className="footer">
          <Web3Button
                contractAddress = {contractAddress}
                action={() => {
                    if(contract){
                        contract.call("makeClaim", [formData.UserAddress,formData.Field,formData.Value], {from: userAddress});
                        console.log("ho");
                    }
                    else{
                        console.log("poo");
                    }
                }}
                onSuccess={(results)=>{
                    toast.success('Claim added to Blockchain', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark"}); 
                    // setOpenModal(false);	
                }}
                onError={(error)=>{
                    toast.error('Claim Failed', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark"}); 
                    // setOpenModal(false);
                }}
                style={{backgroundColor: '#BAE84D',color: 'white',fontSize: '24px'}}
            >
            Make Claim
            </Web3Button>
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