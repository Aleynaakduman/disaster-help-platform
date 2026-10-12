import React from 'react'
import { PiUsersThreeFill } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";

import gönüllü from '../../assets/gönüllü.png'
import './Volunteer.css'
function Volunteer() {

  const sehirler = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin",
    "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa",
    "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan",
    "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta",
    "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir",
    "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla",
    "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop",
    "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van",
    "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak",
    "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
  ];




  return (
    <div className='volunteer-container'>
      <div className="volunteer-top">
        <img src={gönüllü} alt="" />
        <div className="volunter-top-text">
          <p>İYİLİK İÇİN BİR ADIM AT</p> <br />
          <h4>Gönüllü Ol</h4> <br />
          <p>Afet bölgelerinde ihtiyaç sahiplerine destek olmak, insanların yeniden <br /> umutla ayağa kallkmasına katkı sağlamak için gönüllü olabilirsin. <br /> Sen de bu dayanışmanın bir parçası ol </p>
        </div>
      </div>


      <div className="volunteer-bottom">
        <div className="volunteer-bottom-left">
          <h4>Neden Gönüllü Olmalısın?</h4>
          <div className="volunteer-cards">
            <div className="volunteer-card">
              <div className='volunteer-icon-1'><PiUsersThreeFill /></div>
              <div className="volunteer-card-content">
                <b>Hayatlara Dokun</b>
                <p>Yardımına ihtiyaç duyan insanlara destek olarak onların umut kazanmasına katkı sağla</p>
              </div>
            </div>
            <div className="volunteer-card">
              <div className='volunteer-icon-2'><IoMdHeartEmpty /></div>
              <div className="volunteer-card-content">
                <b>Topluma Fayda Sağla</b>
                <p>Senin desteğin, afet sonrası toparlama sürecinde büyük bir fark yaratır</p>
              </div>
            </div>
            <div className="volunteer-card">
              <div className='volunteer-icon-3'><PiUsersThreeFill /></div>
              <div className="volunteer-card-content">
                <b>Kendini Geliştir</b>
                <p>Yeni insanlarla tanış, farklı deneyimler yaşa, kişisel ve mesleki olarak geliş.</p>
              </div>
            </div>
            <div className="volunteer-card">
              <div className='volunteer-icon-4'><MdOutlineSecurity /></div>
              <div className="volunteer-card-content">
                <b>Güvenli ve Planlı Katılım</b>
                <p>Tüm gönüllü süreçleri, uzman ekipler tarafından yürütülüt, Katılım koşulları ve görevler hakkında seni bilgilendirir.</p>
              </div>
            </div>
          </div>

          <p className='block-p'><RiErrorWarningFill className='p-icon' />Gönüllü olmak için 18 yaşından büyük olmak gerekiyor.</p>
        </div>

        <div className="volunteer-bottom-right">
          <h2>Gönüllü Ol Başvuru Formu</h2>
          <p>Ekibimiz en kısa süre içinde sizinle iletişime geçecektir. </p>

          <form className='volunteer-form'>
            <div className="form-group">
              <label htmlFor="">Ad Soyad</label>
              <input type="text" placeholder='Adınızı ve Soyadınız' required />
            </div>

            <div className="form-group">
              <label htmlFor="">E-posta Adresi</label>
              <input required type="email" placeholder='E-posta adresinizi giriniz' />
            </div>


            <div className="form-group">
              <label htmlFor="">Telefon Numarası</label>
              <input required maxLength={11} type="tell" placeholder='5XX XXX XX XX' />
            </div>


            <div className="form-group">
              <label htmlFor="">Doğum Tarihi</label>
              <input type="date" placeholder='GG/AA/YYYY' />

            </div>
            <div className="form-group">
              <select>
                <option value="" disabled>İl seçiniz</option>

                {sehirler.map((sehir) => (
                  <option>{sehir}</option>
                ))}
              </select>

            </div>
            <div className="form-group">
              <label htmlFor="">Mesleğiniz</label>
              <input type="text" placeholder='örn: Yazılım Mühendisi' />
            </div>




          </form>
          <div className="form-group-2">
            <label htmlFor="">Kendinizden Kısaca Bahsedin</label>
            <textarea></textarea>
          </div>
          <button className='form-btn'>Başvuruyu Gönder</button>
        </div>
      </div>


    </div>
  )
}

export default Volunteer