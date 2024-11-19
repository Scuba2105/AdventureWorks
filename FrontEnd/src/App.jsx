import { useState } from 'react'
import './App.css'
import { Logo } from './components/Logo'
import { MenuOptions } from './components/MenuOptions'

function App() {
  return (
    <>
      <div className='app-container'>
        <div className="sidenav flex-c-vert">
          <Logo />
          <MenuOptions />
        </div>
        <div className="main-area">Main Area</div>
      </div>
    </>
  )
}

export default App
