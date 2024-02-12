import React from 'react'
import './nav.scss'
import { Menu } from '@mui/icons-material'
const Nav = () => {
  return (
    <div className='navWrapper'>
      <div className="logo">
        <img src="./assets/logo.png" alt="" />
      </div>
      <div className="navSelection">
        <ul>
            <li>About Us</li>
            <li>How it works</li>
            <li>Songs</li>
            <li>FAQ</li>
            <li>Pricing</li>
        </ul>
      </div>
      <div className="hamMenu">
        <Menu className='menu'/>
      </div>
      <div className="navLeft">
        <div>
        <button>Sign in</button>
        </div>
        <div>
        <button className='special'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
