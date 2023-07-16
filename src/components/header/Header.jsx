import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I am</h4>
        <h1>Muhammad Manan Nasir</h1>
        <h4 className='text-light'>Front-End Developer</h4>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className='me_img' src={ME} alt="me" />
        </div>
        
        <a href="#contact" className='scroll_down'>Scroll Down</a>



      </div>
    </header>
  )
}

export default Header;