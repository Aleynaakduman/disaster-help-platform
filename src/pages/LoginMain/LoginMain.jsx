import { Link } from "react-router-dom";
import welcome from '../../assets/welcome.png'
import './LoginMain.css'
import { PiUsersThree } from "react-icons/pi";
import { FaUserInjured, FaPlus } from "react-icons/fa";
import { LuHandHelping } from "react-icons/lu";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaArrowRight, FaRegUser } from "react-icons/fa";
function LoginMain() {
  return (

    <div className="main-page">
      <div className="main-page-right">
        <div className="welcome-card">
          <div className="welcome-text">
            <h2>Merhaba Aleyna,</h2>
            <p>Umut Eli' ye hoş geldin. Birlikte daha güçlü, daha dayanışmacı bir gelecek için çabalıyoruz.</p>

          </div>
          <div className="welcome-img">
            <img src={welcome} />
          </div>
        </div>


        <div className="users-cards">
          <div className="diaster-card">
            <div className="diaster-icon">
              <FaUserInjured />
            </div>

            <div className="diaster-card-content">
              <b>5</b>
              <p>İhtiyaç talepleri</p>
              <span>Toplam açık ihtiyaç</span>
            </div>
          </div>

          <div className="volunteer-cards-2">
            <div className="volunteer-card-icon">
              <PiUsersThree />
            </div>
            <div className="volunteer-content-card">

              <b>3</b>
              <p>Gönüllü</p>
              <span>Aktif gönüllü sayısı</span>
            </div>
          </div>

          <div className="volunteer-cards-3">
            <div className="volunteer-card-icon-2">
              <LuHandHelping />
            </div>
            <div className="volunteer-content-card">

              <b>7</b>
              <p>Yardım</p>
              <span>Tamamlanan yardımlar</span>
            </div>
          </div>
        </div>



        <div className="fast-procces-container">
          <h2>Hızlı İşlemler</h2>
          <div className="fast-process-cards">
            <div className="fast-process-card">
              <div className="fast-process-card-content">

                < FaPlus className="fast-icon1" />

                <b>İhtiyaç Talebi Oluştur</b>
                <p>Yardım ihtiyacını paylaş</p>
              </div>

              <Link>
                <FaArrowRight className="rowRight" />

              </Link>
            </div>

            <div className="fast-process-card">

              <div className="fast-process-card-content">
                <PiUsersThree className="fast-icon2" />

                <b>Gönüllü Ol</b>
                <p>Destek olmak için başvur</p>
              </div>
              <Link>
                <FaArrowRight className="rowRight" />

              </Link>
            </div>

            <div className="fast-process-card">

              <div className="fast-process-card-content">
                <FaMapLocationDot className="fast-icon3" />

                <b>Haritayı Aç</b>
                <p>Yakındaki ihtiyaçları gör</p>
              </div>
              <Link>
                <FaArrowRight className="rowRight" />

              </Link>
            </div>

            <div className="fast-process-card">
              <div className="fast-process-card-content">

                <LuHandHelping className='fast-icon4' />


                <b>Yardım Ekle</b>

                <p>Destek sağlamak yardım gönder</p>
              </div>
              <Link>
                <FaArrowRight className="rowRight" />

              </Link>


            </div>

            <div className="fast-process-card">

              <div className="fast-process-card-content">

                < FaRegUser className="fast-icon5" />

                <b>Profili Gör</b>
                <p>Bilgilerini güncelle</p>

              </div>

              <Link>
                <FaArrowRight className="rowRight" />

              </Link>
            </div>
          </div>
        </div>



      </div>


    </div>

  )
}

export default LoginMain