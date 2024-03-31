import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Manager from './Components/Manager'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <div className='min-h-[83vh]'>

      <Manager/>
      </div>
      <Footer/>
    </>
  )
}

export default App
