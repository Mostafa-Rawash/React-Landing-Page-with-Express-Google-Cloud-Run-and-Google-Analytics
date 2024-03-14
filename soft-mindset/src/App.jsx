import { Outlet } from 'react-router-dom'
import NavbarSec from "./Component/NavbarSec.jsx"

import 'bootstrap/dist/css/bootstrap.rtl.css'
import './App.css'

function App() {
  return (
    <>
      <NavbarSec />
      <div className="min-vh-100">
       <Outlet />
      </div>
    </>
  )
}

export default App
