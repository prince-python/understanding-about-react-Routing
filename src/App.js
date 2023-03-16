import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Admin from './components/Admin'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/about/:name' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/*' element={<PageNotFound/>}></Route>
    </Routes>
    
    </>
  )
}
export default App