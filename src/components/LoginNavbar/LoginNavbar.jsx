
import logo from '../../assets/afet-logo.png'
import './LoginNavbar.css'
import { IoNotificationsOutline } from "react-icons/io5";
import { PiUserCircleDuotone } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

function LoginNavbar({open , setOpen}) {




    return (

        <div>
            <div className='login-nav'>

                <div className="login-nav-content">


                    <div className="login-nav-left">
                        <div onClick={() => setOpen(!open)} className="sidebar-hamburger">
                            <RxHamburgerMenu />
                        </div>
                        <img src={logo} />
                    </div>
                    <div className="nav-users">
                        <div className="login-nav-icon">
                            <IoNotificationsOutline />

                        </div>
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