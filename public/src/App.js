import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Chat from './pages/Chat'
import Login from './pages/Login'
import SetAvatar from './pages/SetAvatar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/register" element={<Register />} />
        <Route path = "/chat" element={<Chat />} />
        <Route path ="/setAvatar" element={<SetAvatar />} />
        <Route path = "/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App