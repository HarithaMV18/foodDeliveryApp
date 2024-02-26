import React from 'react'
import "./app.css"
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import useNetwork from "./utils/useNetwork";
import NetworkStats from './components/networkHook/NetworkStats';

const App = () => {

  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
