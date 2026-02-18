import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import About from './Pages/AboutPage'
import Login from './Pages/LoginPage'

const App = () => {
  return (
<>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/login' element={<Login/>}/>

</Routes>
</>
  )
}

export default App