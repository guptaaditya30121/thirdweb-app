import { ConnectWallet } from "@thirdweb-dev/react";
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

      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}
