import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
