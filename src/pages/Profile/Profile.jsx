import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaUserTie,  FaUser  } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import './Profile.css'
function Profile() {
  return (
    <div>
      <h2>Profilim</h2>
      <p>Bilgilerinizi görüntüleyebilir ve güncelleyebilirsiniz</p>
     <div className="profile-card-container">
       <div className="profile-card-left">
        <div className="profile-cover">
          <div className="profile-avatar">
             <FaUser />
          </div>
         
        </div>
         <div className="profile-cover-text">
            <b>Aleyna Akduman</b>
            <p>aleyna@example.com</p>
          </div>
          <div className="profile-card-list">
            <div className="profile-card-content">
            <div className="profile-icon">
              <MdMailOutline />
            </div>
            <div className="profile-card-text">
                  <p>E-posta</p>
                  <p>aleyna@example.com</p>
            </div>
          </div>
          </div>

          <div className="profile-card-list">
             <div className="profile-card-content">
            <div className="profile-icon">
              <FaPhone />

            </div>
            <div className="profile-card-text">
                  <p>Telefon</p>
                  <p>+90 555 555 55 55</p>
            </div>
          </div>
          </div>

          <div className="profile-card-list">
             <div className="profile-card-content">
            <div className="profile-icon">
                <FaUserTie />
            </div>
            <div className="profile-card-text">
                  <p>Rol</p>
                  <p>Gönüllü</p>
            </div>
          </div>
          </div>


           <div className="profile-card-list">
            <div className="profile-card-content">
            <div className="profile-icon">
              <CiLocationOn />

            </div>
            <div className="profile-card-text">
                  <p>Konum</p>
                  <p>Malatya</p>
            </div>
          </div>
           </div>
      </div>

      <div className="profile-card-right">
            <b>Bilgilerimi Düzenle</b>

            <form className='profile-form'>
               <div className="profile-group">
                 <label htmlFor="">Ad Soyad</label>
                <input type="text" value='Aleyna Akduman' readOnly />
               </div>

                 <div className="profile-group">
                  <label htmlFor="">Telefon</label>
                <input type="text" value='+90 555 555 55 55' readOnly />
                 </div>

                <div className="profile-group">
                   <label htmlFor="">E-posta</label>
                <input type="email" value='aleyna@example.com' readOnly/>
                </div>

               <div className="profile-group">
                  <label htmlFor="">Konum</label>
                <input type="text" value="Malatya" readOnly />
               </div>
            </form>
            <button className='update-btn'>Güncelle</button>
      </div>
     </div>

    </div>
  )
}

export default Profile