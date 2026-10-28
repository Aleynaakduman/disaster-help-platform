import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Needs from './pages/Needs/Needs'
import Volunteer from './pages/Volunteer/Volunteer'
import About from './pages/About/About'
import Location from './pages/Location/Location'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import LoginMain from './pages/LoginMain/LoginMain';
import DashboardLayout from './layouts/DasboardLayout';
import MainLayout from './layouts/MainLayout';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
  
   <div className="app">
      
       <div className="main-content">
         <Routes>
         <Route element={<MainLayout/>}>
           <Route path='/home' element={<Home/>} />
          <Route path='/needs' element={<Needs/>} />
          <Route path='/location' element={<Location/>} />
          <Route path='/volunteer' element={<Volunteer/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element= {<Login />} />


         </Route>
          <Route element={<DashboardLayout/>}>
             <Route path='/loginmain' element= {<LoginMain />} />
          </Route>

          
        </Routes>
       </div>

   </div>
  
    </BrowserRouter>
    </>
  )
}

export default App
