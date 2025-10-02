import React from 'react'
import Navbar from './Components/Navbar'
import HeaderSection from './Components/Headersection.jsx' // Fixed typo: Hedersection → HeaderSection
import Templates from './Components/Templates'
import './App.css' // Make sure you have this

function App() {
  return (
    <>
      <Navbar />
      <HeaderSection />    
      <Templates />    
    </>
  )
}

export default App
