import React from 'react'
import Navbar from './Components/Navbar'
import OpenSource from './Components/Opensource'
import './App.css'
import ProductivitySection from './Components/ProductivitySection'
import Organize from './Components/Organize'
function App() {
  return (
    <>
    {/* This is the navigation bar */}
      <Navbar />
      {/* This is the second content */}
      <OpenSource />
      {/* This is the third content */}
      <ProductivitySection />
      {/* This is the fourth content */}
      <Organize />
    {/* Footer */}
    </>
  )
}

export default App
