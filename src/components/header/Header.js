import React from 'react'
import logo from '../../images/Fast-Food-icon.png'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <nav>
            <img src={logo} alt="logo" />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li><button>Login</button></li>
                </ul>
            </div>
            
        </nav>      
    </div>
  )
}

export default Header
