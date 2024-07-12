import { useState } from 'react'
import AboutMe from './Pages/About'
import Home from './Pages/Home'
import Bootcamp from './Pages/Bootcamp'
import ProjectList from './Pages/ProjectList'
import Resume from './Pages/Resume'
import { Button } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {
 

  return (
    <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<AboutMe/>} />
    <Route path="/bootcamp" element={<Bootcamp/>} />
    <Route path="/coding-projects" element={<ProjectList/>} />
    <Route path="/resume-download" element={<Resume/>} />
    </Routes>
    </BrowserRouter>
    
     <Footer/>
    </>
  )
}

export default App
