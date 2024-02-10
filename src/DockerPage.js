import React, { useEffect  , useCallback} from 'react';
import {useStorageUpload} from '@thirdweb-dev/react'
import { useDropzone }from 'react-dropzone';
import './components/main_body.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Web3Button, useAddress, useContract } from "@thirdweb-dev/react";
import './components/Web3ButtonStyles.css';
import './components/DataSection.css'
import { useState } from "react";
import { MediaRenderer } from "@thirdweb-dev/react";
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { CONTRACT_ADDRESS1 } from './const/addresses.ts';
import Manas from './components/doc-icon.svg'

const Content = () => {
    const contractAddress = CONTRACT_ADDRESS1;
    const userAddress = useAddress();
    const { contract } = useContract(contractAddress);
    const [ allHash , setAllHash ] = useState([]);
    const { mutateAsync : upload, isLoading } = useStorageUpload();
    const addToBlockChain = async(uris) => {
      try{
        const result = await contract.call(
          "enterADocument",
          [uris[0]],
          {from: userAddress},
        )
        // console.log(result);
        toast.success('Document Added', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark"});     
      }
      catch(error)
      {
        console.log(error);
        toast.error('Click on Access Contract, than try!', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark"});     
      }
    }
    const onDrop = useCallback(
        async (acceptorFiles) => {
            const uris = await upload({data : acceptorFiles});
            console.log(uris);
            addToBlockChain(uris);
        },
        [upload]
    )

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text)
        .then(() => {
          // console.log('Text copied to clipboard');
          toast.success('IFPS link copied', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark"}); 
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    };
    const everyMillisecondAmount = parseInt(
      (10_000_000_000_000 / 2.1).toFixed(0)
    );

    useEffect(() => {
      if(contract){
        const fetchDataFromContract = async () => {
          try {
            const result = await contract.call(
              "renderAllDocument",
              [],
              {from: userAddress},
            )
            setAllHash(result);
            console.log(result);
          } catch (error) {
            console.log(error)
          } 
        }
        fetchDataFromContract();
        const intervalId = setInterval(fetchDataFromContract, 200000);

        return () => clearInterval(intervalId);
      }
  }, [contract , everyMillisecondAmount , userAddress]);

  function isImage(hash) {
    // Extract file extension from the hash
    const fileExtension = hash.split('.').pop().toLowerCase();
    // Check if the file extension corresponds to an image type
    return ['jpg', 'jpeg', 'png', 'gif', 'bmp'].includes(fileExtension);
  }
  


    return (
    <div className='poora-container'>
        <Navbar/>
        <div className='master_container'>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
         <div className="doccontain">
              <Web3Button 
                  contractAddress= {contractAddress}
                  action={(contract) => contract.call(
                      "addUser",
                      [userAddress],{from: userAddress}
                  )}
                  className='docbutton access_contract'
                  onSuccess={(results)=>{
					toast.success('Add Your Documents!', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark"}); 	
                  }}
                  onError={(error)=>{
										toast.success('Add Your Documents!', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark"}); 	
                  }}
                  style={{backgroundColor: 'white', color: 'black',fontSize: '1.2vw' , width: '10vw'}}            
              > Access Contract </Web3Button>
            </div>

       <div className='doccontain access_contract' {...getRootProps()}>
        <input {...getInputProps()} />
        <button className='docbutton'>Click to Add Document</button>
       </div>

       <div className='image-grid'>
  {allHash.map((hash, index) => (
    <div className='render-block' key={index} onClick={() => copyToClipboard(hash)}>
      {isImage(hash) ? (
        <MediaRenderer
          className='rendered'
          key={index}
          src={hash}
          alt={`Document ${hash}`}
        />
      ) : (
        <div>
        <MediaRenderer
          className='rendered1'
          key={index}
          src={hash}
          alt={"Click To Access"}
        />
        <img
          className='default-image'
          key={index}
          src={Manas} // Specify the source for your default image
          alt={`Default Document ${hash}`}
        />
        </div>
      )}
    </div>
  ))}
</div>

      </div>
      <Footer/>
      </div>
    );
  };


export default Content;