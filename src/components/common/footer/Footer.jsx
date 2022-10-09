import React from "react"
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
    <footer>
      <div className="lnkz">
       <a href="/" ><h5  >Home </h5></a>
       <a href="/contact"><h5>Contact </h5></a>
       <a href="/about"><h5>About </h5></a>
         
      </div>
    <div className="con2">
      <BsTwitter  size={30} /> 
      <BsLinkedin size={30} />
      <FaFacebookSquare size={30} />
    </div>

    </footer>
    
     
   
     
      <div className='legal'>
        <span>© 2022 AkarCom. Designd By GitTop Team.</span>
      </div>
    </>
  )
}

export default Footer
