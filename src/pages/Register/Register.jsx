import React, {useState} from 'react'
import {supabase} from '../../supabaseClient'
import './Register.css'
function Register() {

  const [ad, setAd] = useState('');
  const [soyad, setSoyad] = useState('');
  const [tel , setTel] = useState('');
  const [mail, setMail] = useState('');
  const [sifre, setSifre] = useState('');

  const handleRegister = (e) => {
      e.preventDefault()

      supabase.auth.signUp({
        email: mail , 
        password: sifre,
        options: {
          data: {
            ad: ad,
            soyad: soyad,
            telefon: tel
          }
        }
      })

      .then(({data, error}) => {
        if (error) {
          alert(error.message)
        }else {
        alert("Kayıt isteği gönderildi!")
        console.log(data)
      }
      })

  }


  return (
    <div className="register-page">
          <div className='register-container'>
        <h2>Kayıt Ol</h2>

        <form onSubmit={handleRegister} className='register-form'>
           <label htmlFor="">Adınız:</label>
          <input value={ad} onChange={(e) => setAd(e.target.value)} type="text"placeholder='Adınızı Girin'/>

             <label htmlFor="">Soyadınız:</label>
          <input value={soyad} onChange={(e) => setSoyad(e.target.value)} type="text"placeholder='Soyadınızı Girin'/>


             <label htmlFor="">Telefon Numaranız:</label>
          <input value={tel} onChange={(e) => setTel(e.target.value)} type="tel"placeholder='05xx xxx xx xx'/>

             <label htmlFor="">E-posta Adresiniz:</label>
          <input value={mail} onChange={(e) => setMail(e.target.value)} type="email"placeholder='ornek@gmail.com'/>

              <label htmlFor="">Şifre:</label>
          <input value={sifre} onChange={(e) => setSifre(e.target.value)} type="password"placeholder='en az 6 karakter'/>
          <button type='submit'>Kayıt Ol</button>
        </form>

       
        
    </div>
    </div>
  )
}

export default Register