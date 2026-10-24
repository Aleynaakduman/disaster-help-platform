import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { FaHouse, FaHandHoldingHeart, FaRegUser, FaMapLocationDot } from "react-icons/fa6";
import { LiaUsersSolid } from "react-icons/lia";
import { IoIosFiling } from "react-icons/io";
import { LuBaggageClaim } from "react-icons/lu";



function Sidebar() {
  return (
    <div className='sidebar-page'>
      <div className="sidebar-container">
        <ul className='sidebar-list'>
          <Link><div className="list-icon"><FaHouse /></div> Ana Panel</Link>
          <Link><div className="list-icon"><LuBaggageClaim /></div>Taleplerim</Link>
          <Link><div className="list-icon"><FaHandHoldingHeart /></div>Yardımlarım</Link>
          <Link><div className="list-icon"><IoIosFiling /></div>Başvurularım</Link>
          <Link><div className="list-icon"><FaMapLocationDot /></div>Harita</Link>
          <Link><div className="list-icon"><LiaUsersSolid /></div>Gönüllü Ol</Link>
          <Link><div className="list-icon"><FaRegUser /></div>Profilim</Link>
        </ul>

        <div className="out-btn">
          <button>Çıkış Yap</button>
        </div>
      </div>

    </div>
  )
}

export default Sidebar