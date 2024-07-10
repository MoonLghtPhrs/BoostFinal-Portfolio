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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>fa
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='Title'>



      </div>
      <div>
        <Button variant='danger' href="#">Enter</Button>
      </div>
     <Footer/>
    </>
  )
}

export default App
