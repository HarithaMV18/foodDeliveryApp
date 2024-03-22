import React, { useContext, useEffect, useState } from 'react'
import logo from '../../images/Fast-Food-icon.png'
import UserContext from '../../utils/UserContext'
import { Link } from 'react-router-dom'
import useNetwork from '../../utils/useNetwork'
import { useSelector } from 'react-redux'

const Header = () => {
const networkStats=useNetwork()
const {loggedIn}=useContext(UserContext)


  const [login,setLogin]=useState(false)
  const loginDetails=(e)=>{
    setLogin(!login)
  }
  const cartItems=useSelector((store)=>store.cart.items)


  return (
    <div className='header shadow-lg px-2 font-semibold text-sm'>
        <nav className='flex items-center justify-between'>
            <img src={logo} alt="logo" className='w-20'/>
            <div className="nav-items basis-6/12">
              
                <ul className='flex items-center justify-between '>
                
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><button onClick={()=>loginDetails()}>{login?"sign out":"sign in"}</button></li>
                    <li>{loggedIn}</li>
                    <li><Link to="/cart">cart-{cartItems.length} items</Link></li>
                    <li>online status:{networkStats?"🟢":"🔴"}</li>

                </ul>
            </div>
            
        </nav>      
    </div>
  )
}

export default Header
