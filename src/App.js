import { ConnectWallet , useContract , useContractRead , useAddress } from "@thirdweb-dev/react";
import "./styles/Home.css";
import Navbar from "./components/navbar";
import Content from "./components/main_body";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";
import YourComponent from "./components/YourComponent";
import { useConnectionStatus } from "@thirdweb-dev/react";

export default function Home() {
  const connectionStatus = useConnectionStatus();
  const userAddress = useAddress();
  const contractAddress = "0xc82C534155BA18914c161C836ce2D43936e1E71c";
  const {
    contract 
  } = useContract(contractAddress);

  // const {
  //   data : counter,
  //   isLoading : isCounterLoading,
  // } = useContractRead(contract , "getNoOfUser" , [], {
  //   // blockTag: 123,
  //   // from: userAddress,
  //   });

  // console.log(counter);
  const fetchDataFromContract = async () => {
  const data = await contract.call(
          "getAllClaims",
          [],{from: userAddress}
    );
    console.log("hello");
    console.log(data);
  }


  if (connectionStatus === "disconnected")
  return (
    <div>
      <YourComponent/>
      {/* <ConnectWallet/> */}
      {/* <Getusercount/> */}
      {/* <Footer/> */}
      {/* <Navbar/>
      <Content/> */}

    </div>
  );
  if(connectionStatus === "connected")
  return (
    <div>
      {/* <YourComponent/> */}
      {/* <ConnectWallet/> */}
      {/* <Getusercount/> */}
      {/* <p onClick={fetchDataFromContract}>Hello</p> */}
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}
