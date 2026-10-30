import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import './Navbar.css'
import logo from '../../assets/afet-logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
function Navbar() {

  const [menuOpen, setOpen] = useState(false)


  return (
    <div className="navbar-container">
      <div className="navbar">

        <div onClick={() => setOpen(!menuOpen)} className="menu-icon">
          <RxHamburgerMenu />
        </div>



        <div className={`nav-left ${menuOpen ? `active` : ''}`}>
          <div className="nav-logo">
            <img src={logo} />
            <div className="nav-logo-content">
              <b>UMUT ELİ</b>
              <p>Afet ve Yardımlaşma Platformu</p>
            </div>
          </div>

          <ul className='nav-list-2'>
            <Link to="/">Ana Sayfa</Link>
            <Link to="/about" >Hakkımızda</Link>
          </ul>
        </div>

        <div className={`nav-right ${menuOpen ? `active` : ''}`}>

          <Link to="/login" className="login-btn">
            <FiLogIn />
            Giriş Yap
          </Link>

          <Link to="/register" className="register-btn">
            <FiUserPlus />
            Kayıt Ol
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar