import { useState } from 'react'
import './App.css'
import { Logo } from './components/Logo'
import { MenuOptions } from './components/MenuOptions'
import { Dashboard } from './components/dashboard/Dashboard'

function App() {

  const [page, setPage] = useState("Dashboard"); 
  console.log(page);

  function changePage(e, setPage) {
    const pageSelected = e.currentTarget.querySelector("label").textContent;
    setPage(pageSelected);
  }

  return (
    <>
      <div className='app-container'>
        <div className="sidenav flex-c-vert">
          <Logo />
          <MenuOptions setPage={setPage} changePage={changePage}/>
        </div>
        <div className="main-area">
          {page=="Dashboard" && <Dashboard />}
        </div>
      </div>
    </>
  )
}

export default App
