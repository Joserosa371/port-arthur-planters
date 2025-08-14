
import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Configurator from './pages/Configurator.jsx'
import Gallery from './pages/Gallery.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'
import Admin from './pages/Admin.jsx'
import CartPage from './pages/Cart.jsx'
import OrderTracking from './pages/OrderTracking.jsx'
import ThankYou from './pages/ThankYou.jsx'
import { injectGA } from './ga.js'

export default function App(){
  useEffect(()=>{ injectGA(import.meta.env.VITE_GA_ID) },[])
  return (<>
    <header className="site-header">
      <div className="container nav">
        <Link to="/" className="brand">Port Arthur Planter Provisions</Link>
        <nav className="links">
          <Link to="/shop">Shop</Link>
          <Link to="/customize">Customize</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/customize" element={<Configurator/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/track" element={<OrderTracking/>} />
        <Route path="/thank-you" element={<ThankYou/>} />
      </Routes>
    </main>
    <footer className="site-footer">
      <div className="container">© {new Date().getFullYear()} Port Arthur Planter Provisions</div>
    </footer>
  </>)
}
