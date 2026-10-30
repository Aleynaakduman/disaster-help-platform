import React from 'react'
import { CiHeart, CiYoutube  } from "react-icons/ci";
import { FaInstagram , FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter ,  FaFacebookF} from "react-icons/fa6";
import './Footer.css'
function Footer() {
  return (
    <div className='footer-container'>
           <div className="footer-content">
             <div className="left-footer">
                <p>© 2026 Umut Eli | Tüm hakları saklıdır.</p>
                
           
            </div>

            <div className="right-footer">
            
                   <div className='footer-line'></div>
                <div className="footer-icons">
                    <FaInstagram />
                    <FaXTwitter />
                    <FaFacebookF />
                    <CiYoutube />
                    <FaLinkedinIn />

                </div>

                <div className='footer-line'></div>


                <div className="footer-text">
                    Dayanışma Yaşatır <CiHeart />
                </div>

                    
            </div>
           </div>
    </div>
  )
}

export default Footer