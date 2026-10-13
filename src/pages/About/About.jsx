import React from 'react'
import './About.css'
import { FaUsers } from "react-icons/fa";
import { FaHandHoldingHeart , FaLocationDot } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";

function About() {
  return (
    <div className='about-container'>
       <div className="about-top">
        <p className='about-text'>HAKKIMIZDA</p>
        <h2>Umut Eli Nedir?</h2>
        <p>Umut eli, afet sonrası ihtiyaç sahibi bireylere yardım etmek isteyen gönüllüleri ve kurumları bir araya getiren dayanışma platformudur.</p>
        <p>Amacımız, afetlerde oluşan ihtiyaçlara hızlı, doğru ve etkili çözümler sunarak hayatlara yeniden umut olabilmektir.</p>
       </div>
       <div className='line'></div>


       <div className="about-bottom">
              <div className="about-bottom-text">
                  <h3>Neden Varız?</h3>
                <p>Daha güçlü bir dayanışma için, teknoloji ve insan gücünü birleştiriyoruz</p>
              </div>

                <div className="about-cards">
                    <div className="about-card">
                        <div className="about-icon-1"><FaUsers /></div>
                        <b>İhtiyaç Sahiplerine Destek</b>
                        <p>Afet sonrası temel ihtiayçalarını karşılamakta zorlanan kişilere ulaşmayı hedefliyoruz</p>
                    </div>
                      <div className="about-card">
                        <div className="about-icon-2"><FaHandHoldingHeart /></div>
                        <b>Gönüllüleri Bir Araya Getirir</b>
                        <p>Yardım etmek isteyen gönüllüleri ve destekçileri, ihtiyaç sahipleriyle buluşturuyoruz.</p>
                    </div>
                      <div className="about-card">
                        <div className="about-icon-3"><FaLocationDot /></div>
                        <b>Doğru Eşleşme, Etkili Yardım</b>
                        <p>Konum, ihtiyaç türü ve aciliyet gibi kriterlerle en uygun eşleşmeleri sağlıyoruz.</p>
                    </div>
                      <div className="about-card">
                        <div className="about-icon-4"><MdSecurity /></div>
                        <b>Güvenli ve Şeffaf Süreç</b>
                        <p>Tüm süreçlerde güvenliği ve şeffaflığı ön planda tutarak, dayanışmayı güçlendiriyoruz.</p>
                    </div>
                </div>


                <div className="mision-cards">
                    <div className="mision-card">
                        <p>MİSYONUMUZ</p>
                        <b>Dayanışma ile hayatlara dokunmak</b>
                        <p>Afetlerde ihityaç sahibi olan bireylerin temel ihtiyaçlarını karşılamak ve <br /> gönüllülerin desteğiyle toplumsal dayanışmayı güçlendirmek</p>
                    </div>
                    <span className='line-2'></span>
                     <div className="mision-card">
                          <p>VİZYONUMUZ</p>
                        <b>Daha hazırlıklı ve dayanışmacı bir toplum</b>
                        <p>Afetlere karşı daha dirençli, yardımlaşmayı önemseyen ve birbirinin yanında <br /> olan bir toplum oluşturmak.</p>
                     </div>
                </div>
       </div>
    </div>
  )
}

export default About