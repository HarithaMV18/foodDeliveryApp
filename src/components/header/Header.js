import React, { useEffect, useState } from 'react'
import logo from '../../images/Fast-Food-icon.png'
import './header.css'
import { Link } from 'react-router-dom'
import useNetwork from '../../utils/useNetwork'

const Header = () => {
const networkStats=useNetwork()

  const [login,setLogin]=useState(false)
  const loginDetails=(e)=>{
    setLogin(!login)
  }

  return (
    <div className='header'>
        <nav>
            <img src={logo} alt="logo" />
            <div className="nav-items">
              
                <ul>
                  <li>online status: <div className={networkStats?"online-indicator":"offline-indicator"}></div></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><button onClick={()=>loginDetails()}>{login?"sign out":"sign in"}</button></li>
                </ul>
            </div>
            
        </nav>      
    </div>
  )
}

export default Header
