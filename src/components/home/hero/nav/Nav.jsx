
import { useEffect, useState } from 'react'
import './nav.scss'
import {Close, Menu } from '@mui/icons-material'
const Nav = () => {
const [isClicked, setIsClicked] = useState(false);
const [isScrolled, setIsScrolled] = useState(false)

useEffect (()=>{
  const handleScroll = ()=>{
    setIsScrolled(window.scrollY > 0);
  };

  window.addEventListener('scroll', handleScroll);

  return ()=>{
    window.removeEventListener('scroll', handleScroll)
  }
}, [])

const menuClick = ()=>{
  setIsClicked(true)
  // const menuIcon = document.getElementById('menu')

}
const closeClick = ()=>{
  setIsClicked(false)
}
const mobileNav = isClicked &&
(<div id='menu' className='mobileNav'>
  <div className='overlay'></div>
  <div className="mobileNavText">
  <div className='top'>
  
  <div className='mobileLogo'>
  <img src="./assets/logo.png" alt="" />
  </div>
  <div
  onClick={closeClick}><Close className='closeIcon'/></div>
  </div>
  <div className='middle'>
    <p>Home</p>
    <p>About Us</p>
    <p>How it works</p>
    <p>Songs</p>
    <p>Pricing</p>
    <p>faq</p>
    
  </div>
  <div className='bottom'>
  <div>
  <button className='mobileSignIn'>Sign in</button>
  </div>
  <div>
  <button className='special'>Sign Up</button>
  </div>
  </div>
  </div>
</div>)
  return (
    <div className={`navWrapper ${isScrolled ? 'scrolled' : ''}`}>
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
      <div
      
      onClick={isClicked ? closeClick : menuClick }
      className="hamMenu">{isClicked ? null
       : <Menu className='menu'/> 
}</div>
      {mobileNav}
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

export default Nav;
