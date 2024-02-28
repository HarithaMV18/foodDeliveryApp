import React, { useEffect, useState } from 'react'
import logo from '../../images/Fast-Food-icon.png'

import { Link } from 'react-router-dom'
import useNetwork from '../../utils/useNetwork'

const Header = () => {
const networkStats=useNetwork()

  const [login,setLogin]=useState(false)
  const loginDetails=(e)=>{
    setLogin(!login)
  }

  return (
    <div className='header shadow-lg px-2 font-semibold text-sm'>
        <nav className='flex items-center justify-between'>
            <img src={logo} alt="logo" className='w-20'/>
            <div className="nav-items basis-5/12">
              
                <ul className='flex items-center justify-between '>
                
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><button onClick={()=>loginDetails()}>{login?"sign out":"sign in"}</button></li>
                    <li>online status:{networkStats?"🟢":"🔴"}</li>
                </ul>
            </div>
            
        </nav>      
    </div>
  )
}

export default Header
