import { Outlet } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.rtl.css'
import './App.css'

function App() {
  return (
    <>
      <div className="min-vh-100">
       <Outlet />
      </div>
    </>
  )
}

export default App
