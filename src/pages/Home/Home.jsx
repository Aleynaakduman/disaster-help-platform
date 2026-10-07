import React from 'react'
import Back from '../../assets/afet-img.jpg'
import './Home.css'
import { FaHandsHelping } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";
function Home() {
  return (
<div>
    <div className="home-container">
        <div className='back-img'>
        <img src={Back} alt="" />
        <div className="img-text">
                <div className="text-info">
                                <h1>Afet Sonrası <br /> Dayanışma ile <span className='red-text'>Daha Güçlü</span></h1>
            <p>Afet sonrası ihtiyaç sahipleri ile gönüllüleri <br /> tek bir platformda buluşturuyoruz. <br />Birlikte daha fazla hayat kurtarabiliriz</p>
                </div>
           <div className="home-btns">
             <button className='help-btn'> <FaHandsHelping/>
                Yardıma İhtiyacım Var
            </button>
            <button className='help-btn-2'> <LuHeartHandshake className='help-icon' />Yardım Etmek İstiyorum</button>
           </div>
        </div>
    </div>
</div>

<div className="home-cards">
    <div className="card">
        <div className="icon"></div>
        <div className="card-content">
            <b>1.248</b>
            <p>Toplam İhtiyaç</p>
            <p>Son 7 günde +312</p>
        </div>
    </div>
    <div className="card">
         <div className="icon"></div>
        <div className="card-content">
            <b>823</b>
            <p>Karşılanan Yardım</p>
            <p>Son 7 günde +206</p>
        </div>
    </div>
    <div className="card">
         <div className="icon"></div>
        <div className="card-content">
            <b>425</b>
            <p>Kayıtlı Gönüllü</p>
            <p>Son 7 günde +98</p>
        </div>
    </div>
    <div className="card">
         <div className="icon"></div>
        <div className="card-content">
            <b>12</b>
            <p>Aktif Bölge</p>
            <p>6 il, 12 ilçe</p>
        </div>
    </div>
</div>
</div>

  )
}

export default Home