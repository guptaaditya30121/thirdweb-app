import { Web3Button } from "@thirdweb-dev/react";
import './Web3ButtonStyles.css';


export default function Getusercount(){

    var userAddress = "0x6c47D516004DC29cDb14A5C14D576E41055bDb95";
    var userAddress2 = "0x14FFe36CB84adEF9C0577C3CB31E596a5C1df403";
    var contractAddress = "0x59055d567418068Af2ba08a9F36c3505136F8691";
    return (
        <div>
            <div className="web3Button">
            <Web3Button 
                        contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "showUser",
                            [],{from: userAddress}
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
                        style={{backgroundColor: 'white',color: 'black',fontSize: '25px'}}
                          
            > Show User </Web3Button>
            </div>
{/* 
            <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "addUser",
                            [userAddress],{from: userAddress}
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
            > add User </Web3Button>

            <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "getNoOfUser",
                            [],{from: userAddress}
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
            > get Number Of User </Web3Button>

            <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "requestClaim",
                            [userAddress , "Field" , "Value"],{from: userAddress}
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
            > Request Claim </Web3Button>

            <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "makeClaim",
                            [userAddress2 , "Field" , "Value"],{from: userAddress}
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
            > Make Claim </Web3Button>

            <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "getClaimsCount",
                            [userAddress],{from: userAddress}
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
            > Get Claims Count </Web3Button>

            <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "getAllClaims",
                            [],{from: userAddress}
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
            > Get All Claims</Web3Button>

            <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "getRequestedClaimsCount",
                            [userAddress],{from: userAddress}
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
            > Get Requested Claims Count </Web3Button>

            <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "getAllReqClaims",
                            [],{from: userAddress}
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
            > Get All Request Claims</Web3Button>

            <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "getReqFromMeCount",
                            [userAddress],{from: userAddress}
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
            > Get Request From me Count </Web3Button>

            <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "getAllReqFromMeClaims",
                            [],{from: userAddress}
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
            > Get All Request From me Claims</Web3Button>

            <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "answeringRequestedClaim",
                            [0 , 1],{from: userAddress} //0 is the index of Query , and 1 is the if you want to answer
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
            > Answer Requested Claim </Web3Button>

            <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "reqFieldInfo",
                            [userAddress2 , "Field"],{from: userAddress} 
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
            > Request Field Info </Web3Button>            

            <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "ansRequestFieldInfo",
                            [0 , 1],{from: userAddress} //index in all the requested field
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
            > Ansser Request Field Info </Web3Button> 

            <Web3Button contractAddress= {contractAddress}
                        action={(contract) => contract.call(
                            "getAllinfo",
                            [],{from: userAddress} //index in all the requested field
                        )}
                        onSuccess={(results)=>{
                            console.log(results);
                        }}
            > Get all Info </Web3Button>  */}


        </div>
    )
}