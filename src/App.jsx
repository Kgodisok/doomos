import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Browse from './pages/Browse'
import VehicleDetails from './pages/VehicleDetails'
import SellCar from './pages/SellCar'
import About from './pages/About'
import AuthModal from './pages/AuthModal'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white text-charcoal">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/vehicle/:id" element={<VehicleDetails />} />
            <Route path="/sell" element={<SellCar />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<AuthModal />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

