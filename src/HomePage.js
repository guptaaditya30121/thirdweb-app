import "./styles/Home.css";
import Navbar from "./components/navbar";
import Content from "./components/main_body";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";
import YourComponent from "./components/YourComponent";
import { useConnectionStatus } from "@thirdweb-dev/react";

export default function Home() {
  const connectionStatus = useConnectionStatus();
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
