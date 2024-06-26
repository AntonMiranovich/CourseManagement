import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navigation from './pages/Navigation/Navigation'


function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/nav' element={<Navigation />} />
    </Routes>
  )
}

export default App
