import React from 'react'
import "./app.css"
import Header from './components/header/Header'
import MainContainer from './components/mainContainer/MainContainer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
      {/* <MainContainer/> */}
      
    </div>
  )
}

export default App
