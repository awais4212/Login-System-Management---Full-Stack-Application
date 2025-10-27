import { useState } from 'react'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Home from './Home'
import './App.css'
import Signup from './Components/Signup'
import { Routes, Route, Navigate } from 'react-router-dom'
import Welcome from './Components/Welcome'

function App() {
  const [user, setUser] = useState(null)
  
  return (
    <>
      <Navbar/>
      <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/home' element={<Home/>}/>
           <Route path='/login' element={<Login setUser={setUser}/>}/>
           <Route path='/signup' element={<Signup/>}/>
           <Route 
             path='/welcome' 
             element={user ? <Welcome user={user} setUser={setUser} /> : <Navigate to="/login" />}
           />
      </Routes>
    </>   
  )
}

export default App