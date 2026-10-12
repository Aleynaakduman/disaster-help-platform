import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Needs from './pages/Needs/Needs'
import Volunteer from './pages/Volunteer/Volunteer'
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
           <Route path='/volunteer' element={<Volunteer/>} />
          
        </Routes>
       </div>

        <Footer/>
   </div>
  
    </BrowserRouter>
    </>
  )
}

export default App
