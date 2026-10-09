import React from 'react'
import Back from '../../assets/afet-img.jpg'
import './Home.css'
import { FaHandsHelping } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import location from '../../assets/location.jpg'
import { MdOutlinePostAdd } from "react-icons/md";
import { MdPersonAddAlt1 } from "react-icons/md";
import { LuHandshake } from "react-icons/lu";
import { FaTruck } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";


import { FaUsers } from "react-icons/fa";
function Home() {
  return (
<div className='home'> 
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
        <div className="icon-1"><MdOutlineInventory2 /></div>
        <div className="card-content">
            <b>1.248</b>
            <p>Toplam İhtiyaç</p>
            <span>Son 7 günde +312</span>
        </div>
    </div>
    <div className="card">
         <div className="icon-2"><MdCheckCircleOutline/></div>
        <div className="card-content">
            <b>823</b>
            <p>Karşılanan Yardım</p>
            <span>Son 7 günde +206</span>
        </div>
    </div>
    <div className="card">
         <div className="icon-3"><FaUsers />
</div>
        <div className="card-content">
            <b>425</b>
            <p>Kayıtlı Gönüllü</p>
            <span>Son 7 günde +98</span>
        </div>
    </div>
    <div className="card">
         <div className="icon-4"><IoLocationOutline /></div>
        <div className="card-content">
            <b>12</b>
            <p>Aktif Bölge</p>
            <span>6 il, 12 ilçe</span>
        </div>
    </div>
</div>



        {/* <span className='line'></span>
        <p>Naıl Çalışır?</p>
        <h1 className='help-h1'>Yardım Süreci Çok Kolay</h1> */}
<div className="helpss">
     <div className="help-container">
         <div className="help-cards">
              <div className="help-card">
                    <div className="help-icon-1">< MdOutlinePostAdd/></div>
                    <div className="help-card-content">
                        <h3>1.İhtiyaç Oluştur</h3>
                    <span>Afet bölgesindeki ihtiyaçları kolayca paylaş</span>
                    </div>
              </div>

              <div className="line-y"></div>


                <div className="help-card">
                    <div className="help-icon-2"><MdPersonAddAlt1/></div>
                    <div className="help-card-content">
                        <h3>2.Gönüllü Katılımı</h3>
                    <span>Uygun gönüllüler ihtiyaçlarına yönlendirilsin.</span>
                    </div>
                </div>

                 <div className="line-y"></div>
                  <div className="help-card">
                    <div className="help-icon-3"><LuHandshake/></div>
                    <div className="help-card-content">
                        <h3>3.Eşleştirme</h3>
                    <span>Konum ve ihtiyaç türüne göre en uygun gönüllü ile eşleşsin</span>
                    </div>
                  </div>

                   <div className="line-y"></div>
                    <div className="help-card">
                        <div className="help-icon-4"><FaTruck/></div>
                  <div className="help-card-content">
                      <h3>4.Yardım Ulaşsın</h3>
                    <span>Yardımların durumunu takip et, hedefe birlikte ulaşalım</span>
                  </div>
                    </div>
        </div>

        <div className="help-location">
           <div className="help-location-text">

             <div className="location-icon-content">
               <div className="location-icon">
                 <MdLocationPin/>
               </div>
                    <h4>Yardım Haritası</h4>
            </div>

            <p>Tüm ihtiyaçları harita üzerinden görüntüleyin, bölgelere göre filtreleyein</p>
            <button>Haritayı görüntüle →</button>
           </div>

            <img src={location}  />
        </div>


      
       </div>
</div>
</div>


  )
}

export default Home