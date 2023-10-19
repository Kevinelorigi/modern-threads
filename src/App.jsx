import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Index from './components/Index'
import Products from './components/Products'
import Finish from './components/Finish'
import Car from './components/Car'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Index />} />
        <Route path='/car' element={<Car />} />
      </Routes>
      <Products />
      <Finish/>
    </>
  )
}

export default App