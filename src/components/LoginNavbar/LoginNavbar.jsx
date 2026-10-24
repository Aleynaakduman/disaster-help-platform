import React from 'react'
import logo from '../../assets/afet-logo.png'
import './LoginNavbar.css'
import { IoNotificationsOutline } from "react-icons/io5";
import { PiUserCircleDuotone } from "react-icons/pi";

function LoginNavbar() {
    return (
        <div className='login-nav'>
            <div className="login-nav-content">
                <img src={logo} />
                <div className="login-nav-left">
                    <div className="login-nav-icon">
                        <IoNotificationsOutline />

                    </div>
                    <div className="nav-users">
                        <div className="user-icon">
                            <PiUserCircleDuotone />

                        </div>
                        <p>Aleyna Akduman</p>
                        
                    </div>



                </div>
            </div>
        </div>
    )
}

export default LoginNavbar