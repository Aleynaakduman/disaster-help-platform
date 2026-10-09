import React from 'react'
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { VscWindowActive } from "react-icons/vsc";
import { BiCategoryAlt } from "react-icons/bi";
import { PiCookingPot , PiDotsThreeBold } from "react-icons/pi";
import { CiHome } from "react-icons/ci";
import { MdCleanHands , MdOutlineHealthAndSafety  } from "react-icons/md";
import { GiLargeDress } from "react-icons/gi";
import gıda from '../../assets/gıda.jpg'
import barınma from '../../assets/barınma.jpg'
import temizlik from '../../assets/temizlik.jpg'
import giyim from '../../assets/giyim.jpg'
import sağlık from '../../assets/sağlık.jpg'
import diğer from '../../assets/diğer.jpg'


import './Needs.css'
function Needs() {
  return (
    <div className='needs-container'>
        <div className="needs-top">
            
                <div className="needs-top-text">
                    <h1>UMUT ELİ: BİRLİKTE GÜÇLÜYÜZ, İHTİYAÇLARI <br /> BİRLİKTE KARŞILIYORUZ</h1>
                <p>Bölgemizdeki acil ihtiyaçlara anında destek olun, Haritayı inceleyin veya kategorilere göz atın</p>
                </div>

                <div className="info-right">
                     
                    <div className="info-right-content">
                      <div className="needs-icon">
                         < VscWindowActive/>
                      </div>
                   <div className="right-content-text">
                     <b>88+</b>
                    <p>Aktif İhtiyaç</p>
                   </div>
                    </div>
                     
                    <div className="info-right-content">
                      
                    <div className="needs-icon">
                        < LiaHandsHelpingSolid/>
                    </div>
                     <div className="right-content-text">
                              <b>1200+</b>
                    <p>Destek Veren</p>
                        </div>
                    </div>
                </div>
            
        </div>

        <div className="needs-bottom">
            <div className="needs-bottom-left">
                    <div className="needs-buttons">
                            <button><BiCategoryAlt />Tümü</button>
                            <button><PiCookingPot />Gıda</button>
                            <button><CiHome />Barınma</button>
                            <button><MdCleanHands />Temizlik & Hijyen</button>
                            <button><GiLargeDress/>Giyim</button>
                            <button><MdOutlineHealthAndSafety/>Sağlık</button>
                            <button><PiDotsThreeBold />Diğer</button>

                    </div>

                    <div className="needs-cards">
                            <div className="need-card">
                                <img src={gıda} alt="" />
                                <div className="need-card-content">
                                    <h3>Gıda</h3>
                                    <p>Uzun ömürlü gıda, bebek maması, su ve temel gıda ihtiyaçları</p>
                                </div>
                            </div>
                             <div className="need-card">
                                 <img src={barınma} alt="" />
                                <div className="need-card-content">
                                    <h3>Barınma</h3>
                                    <p>Çadır, battaniye, uyku tulumu ve diğer barınma malzemeleri</p>
                                </div>
                             </div>
                              <div className="need-card">
                                 <img src={temizlik} alt="" />
                                <div className="need-card-content">
                                    <h3>Temizlik & Hijyen</h3>
                                    <p>Tuvalet Kağıdı, sabun gibi temel hijyen ihtiyaçları</p>
                                </div>
                              </div>
                               <div className="need-card">
                                 <img src={giyim} alt="" />
                                <div className="need-card-content">
                                    <h3>Giyim</h3>
                                    <p>Hırka, Kazak, mont gibi temel giyim ihtiyaçları</p>
                                </div>
                               </div>
                                <div className="need-card">
                                     <img src={sağlık} alt="" />
                                <div className="need-card-content">
                                    <h3>Sağlık</h3>
                                    <p>İlaç, ilk yardım ürünleri gibi sağlık ihtiyaçları</p>
                                </div>
                                </div>
                                 <div className="need-card">
                                     <img src={diğer} alt="" />
                                <div className="need-card-content">
                                    <h3>Diğer</h3>
                                    <p>Yardım kolisi, kitap, oyuncak gibi diğer malzemeler</p>
                                </div>
                                 </div>
                    </div>
            </div>

            <div className="needs-bottom-right">

            </div>
        </div>
    </div>
  )
}

export default Needs