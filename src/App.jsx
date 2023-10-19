import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Index from './components/Index'
import Products from './components/Products'
import Finish from './components/Finish'
import Car from './components/Car'

const IndexAndProducts = () => {
  return (
    <>
      <Index />
      <Products />
      <Finish />
    </>
  )
}

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<IndexAndProducts />} />
        <Route path='/car' element={<Car />} />
      </Routes>
    </>
  )
}

export default App
