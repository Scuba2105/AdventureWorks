import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
        <div className="sidenav"></div>
        <div className="main-area"></div>
      </div>
    </>
  )
}

export default App
