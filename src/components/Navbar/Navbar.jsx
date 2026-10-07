import React from 'react'
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import './Navbar.css'
import logo from '../../assets/afet-logo.png'
function Navbar() {
  return (
    <div className="navbar-container">
        <div className='navbar'>
        
        <div className="nav-left">
            <div className="nav-logo">
            <img src={logo}/>
        </div>

                <Link>Ana Sayfa</Link>
                <Link>İhtiyaçlar</Link>
                <Link>Harita</Link>
                <Link>Gönüllü Ol</Link>
                <Link>Hakkımızda</Link>
        </div>

        <div className="nav-right">
                <CiSearch />
                <button className='login-btn'>Giriş Yap</button>
                <button className='register-btn'>Kayıt Ol</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar