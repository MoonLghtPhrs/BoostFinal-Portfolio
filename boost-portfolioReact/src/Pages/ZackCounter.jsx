import React from'react'
import reactLogo from '../assets/react.svg'
import ZackWhy from '../assets/Ckbo6INWUAEvdsq.jpg'
import '../css/ZackCounter.css'
import { Button, Image } from 'react-bootstrap'

import { useState } from 'react'
const ZackHelpCounter = () => {
  const [count, setCount] = useState(0)
    return (
<>
<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>SMASH THAT HELPED ZACK COUNTER</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Times Zack helped me figure something out {count}
        </button>
      <Image src={ZackWhy} />

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
</>
    )
}
export default ZackHelpCounter