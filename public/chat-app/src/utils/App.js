import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/register" element = {<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
