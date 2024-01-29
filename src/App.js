import { ConnectWallet } from "@thirdweb-dev/react";
import Getusercount from "./components/Getusercount"
import "./styles/Home.css";
import Navbar from "./components/navbar";
import Content from "./components/main_body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      {/* <ConnectWallet/> */}
      {/* <Getusercount/> */}
      {/* <Footer/> */}
      <Navbar/>
      <Content/>
    </div>
  );
}
