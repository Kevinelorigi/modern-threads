import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Index from './components/Index'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Index />} />
      </Routes>
    </>
  )
}

export default App