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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
  
   <div className="app">
      <Navbar/>
       <div className="main-content">
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/needs' element={<Needs/>} />
          <Route path='/location' element={<Location/>} />
          <Route path='/volunteer' element={<Volunteer/>} />
          <Route path='/about' element={<About/>} />

          
        </Routes>
       </div>

        <Footer/>
   </div>
  
    </BrowserRouter>
    </>
  )
}

export default App
