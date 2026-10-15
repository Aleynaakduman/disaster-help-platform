import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import './Navbar.css'
import logo from '../../assets/afet-logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
function Navbar() {

  const [menuOpen , setOpen] = useState(false)


  return (
    <div className="navbar-container">
        <div className="navbar">

          <div onClick={() => setOpen(!menuOpen)} className="menu-icon">
            <RxHamburgerMenu/>
          </div>

         
    
          <div className={`nav-left ${menuOpen ? `active` : ''}`}>
            <div className="nav-logo">
            <img src={logo}/>
        </div>

                <Link to="/">Ana Sayfa</Link>
                <Link to="/needs">İhtiyaçlar</Link>
                <Link to="/location">Harita</Link>
                <Link to="/volunteer">Gönüllü Ol</Link>
                <Link to="/about" >Hakkımızda</Link>
        </div>
 
        <div className={`nav-right ${menuOpen ? `active` : ''}`}>
                <div className="right-nav-icon">
                  <CiSearch />
                </div>
                <button className='login-btn'>Giriş Yap</button>
                <button className='register-btn'>Kayıt Ol</button>
        </div>
      </div>
  
    </div>
  )
}

export default Navbar