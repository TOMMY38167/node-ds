import React from 'react'
import './nav.css'
import Logo from '../../img/image.png'
import { GiHamburgerMenu } from "react-icons/gi";

export const Nav = () => {
  return (
    <div className='navBar'>
 <img className='logo' src={Logo} alt="" />
 <a className='menu' href="#"><GiHamburgerMenu/> 
 </a> 
 </div>
  )
}
