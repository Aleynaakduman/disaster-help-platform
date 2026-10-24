import React, {useState} from 'react'
import './Login.css'
import {supabase} from '../../supabaseClient'
import { useNavigate } from 'react-router-dom';
function Login() {

  const [mail , setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
      e.preventDefault();
      supabase.auth.signInWithPassword({
        email: mail,
        password: password
      })
      .then(({data, error}) => {
        if (error) {
            alert("Giriş Başarısız:" + error.message)
        }else{
          navigate("/loginmain")
        }
      })



  }

  const navigate = useNavigate()

  return (
    <div className='login-page'>
            <div className="login-container">
                <h2>Giriş Yap</h2>
                    <form className='login-form' onSubmit={handleLogin}>
                        <label htmlFor="">E-mail:</label>
                        <input onChange={(e) => setMail(e.target.value)} placeholder='e-mailinizi girin' type="email" />

                        <label htmlFor="">Şifre:</label>
                        <input onChange={(e) => setPassword(e.target.value)} placeholder='Şifrenizi girin' type="password" />
                        <button>Giriş Yap</button>
                    </form>
            </div>
    </div>
  )
}

export default Login