import React from "react";
import manas_lion from './manas_lion.png'
import './Footer.css'

const Footer = () => {
	return (
        <div className="parent_footer">
		<div className="footer_container">
            <div className="img_container">
                <img src={manas_lion} alt="" style={{transform: 'scaleX(-1)', height:'25vh', color:'gold'}}/>
                <div className="yo_manas">Yo Manas !!</div>
            </div>
            <div className="developers_1">
                <div className="heading_">
                        Developers
                </div>
                <div className="line">

                </div>
                <div className="developers">
                    <div className="developers_a">
                        <div className="names">Aditya Gupta</div>
                        <div className="names">Rashaad Ali Baig</div>
                        <div className="names">Udbhav Gupta</div>
                        <div className="names">Vivek Parley</div>
                    </div>
                    <div className="developers_b">
                        <div className="names">Harshit Singh Pakhariya</div>
                        <div className="names">Paramveer Prakash</div>
                        <div className="names">Vaibhav Jangid</div>
                        <div className="names">Krish Kavya</div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{color:'white', textAlign:'center', fontWeight:'600', borderTop:'2px solid white', padding:'1vh'}}>&copy; 2024 Manas All Rights Reserved.</div>
        </div>
	);
};
export default Footer;