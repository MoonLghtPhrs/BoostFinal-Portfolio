import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeBanner from './Components/Welcome/Banner'
import AboutMe from './Pages/About'
import Home from './Pages/Home'
import Bootcamp from './Pages/Bootcamp'
import ProjectList from './Pages/ProjectList'
import Resume from './Pages/Resume'
import { Button } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
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
