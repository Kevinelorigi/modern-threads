import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Index from './components/Index'
import Products from './components/Products'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Index />} />
      </Routes>
      <Products />
    </>
  )
}

export default App