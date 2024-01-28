import { Web3Button } from "@thirdweb-dev/react";
import {useState} from "react";


export default function Getusercount(){

    const [noOfUser , setNoOfUser] = useState(0);
    return (
        <div>
            <Web3Button contractAddress= "0xAdd87CE1BDAc4d8b0286AcAb9B04eBb25303D560"
                        action={(contract) => contract.call(
                            "getAllClaims",
                            ["0x6c47D516004DC29cDb14A5C14D576E41055bDb95"]
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
            > No of user is = ${noOfUser} </Web3Button>
        </div>
    )
}