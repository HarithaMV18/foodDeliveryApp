import React from 'react'
import "./app.css"
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'


const App = () => {

  return (
    <div className="app overflow-hidden font-['Montserrat']">
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
