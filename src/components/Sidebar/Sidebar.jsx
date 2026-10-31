
import './Sidebar.css'
import { Link, useNavigate , NavLink} from 'react-router-dom'
import { FaHouse, FaHandHoldingHeart, FaRegUser, FaMapLocationDot } from "react-icons/fa6";
import { LiaUsersSolid } from "react-icons/lia";
import { IoIosFiling } from "react-icons/io";
import { LuBaggageClaim } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { supabase } from '../../supabaseClient'





function Sidebar({isOpen , setOpen}) {
  const navigate = useNavigate()
  function handleLogout() {
    supabase.auth.signOut()
    .then(({error}) => {
      if (error) {
        Console.log("Çıkış yapılamadı:" , error.message)
        return
      }
      navigate("./home")
    })
  }
  

  return (
    <div className= {`sidebar-page ${isOpen ? 'open' : ''}`}>
   
      <div className="sidebar-container">
        <button onClick={() => setOpen(!isOpen)} className='close-btn'>
          <IoClose />
        </button>
        <ul className='sidebar-list'>
          <NavLink to="/loginmain" ><div className="list-icon"><FaHouse /></div> Ana Panel</NavLink>
          <Link ><div className="list-icon"><LuBaggageClaim /></div>Taleplerim</Link>
          <Link><div className="list-icon"><FaHandHoldingHeart /></div>Yardımlarım</Link>
          <Link><div className="list-icon"><IoIosFiling /></div>Başvurularım</Link>
          <Link><div className="list-icon"><FaMapLocationDot /></div>Harita</Link>
          <NavLink to="/volunteer" ><div className="list-icon"><LiaUsersSolid /></div>Gönüllü Ol</NavLink>
          <NavLink to="/profile" ><div className="list-icon"><FaRegUser /></div>Profilim</NavLink>
        </ul>

        <div className="out-btn">
          
          <button onClick={handleLogout} >Çıkış Yap</button>
       
        </div>
      </div>

    </div>
  )
}

export default Sidebar