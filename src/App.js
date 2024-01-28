import { ConnectWallet } from "@thirdweb-dev/react";
import Getusercount from "./components/Getusercount"
import "./styles/Home.css";

export default function Home() {
  return (
    <div>
      <ConnectWallet/>
      <Getusercount/>
    </div>
  );
}
