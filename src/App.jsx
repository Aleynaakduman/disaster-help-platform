import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>

        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
