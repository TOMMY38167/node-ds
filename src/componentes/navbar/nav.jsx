import React, { useState } from "react";
import "./nav.css";
import Logo from "../../svg/logoNav.svg";
import { Cross as Hamburger } from "hamburger-react";

export const Nav = ({setIsMenuOpen, isMenuOpen}) => {
 
  const toggleMenu = () => {
    
    setIsMenuOpen(!isMenuOpen)
  };
  return (
    <>
      <div className="navBar">
        <img className="logo" src={Logo} alt="" />
        <a
          
          onClick={toggleMenu}
          href="#"
        >
          <Hamburger color="rgb(255, 255, 255)" />
        </a>
      </div>
      {isMenuOpen && (

      <div className="menu-items">
        <ul>
          <li>SOBRE NOSOTROS</li>
          <li>SERVICIOS</li>
          <li>PLANES</li>
          <li>CONTACTOS</li>
        </ul>
      </div>
      )}
    </>
  );
};
