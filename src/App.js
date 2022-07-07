import React, { useState } from 'react'
import './index.css';
import Info from './components/Info';
import About from './components/About';
import Footer from './components/Footer';
export default function App(){
  return (

    <div className="container">
      <Info />
      <About />
      <Footer />
    </div>
    
  )
}