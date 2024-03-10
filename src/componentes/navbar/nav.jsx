import React, { useState } from "react";
import "./nav.css";
import Logo from "../../svg/logoNav.svg";
import { Cross as Hamburger } from "hamburger-react";

export const Nav = ({ setIsMenuOpen, isMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="navBar">
        <img className="logo" src={Logo} alt="" />
        <div className="menu-hambur">
          <p>Menu</p>
          {" "}
          <a onClick={toggleMenu} href="#">
            {" "}
            <Hamburger
              size={20}
              className="hambur"
              color="rgb(255, 255, 255)"
            />
          </a>
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu-items">
          <ul>
           <a href=""><li>SOBRE NOSOTROS</li></a> 
           <a href=""><li>SERVICIOS</li></a> 
           <a href=""><li>PLANES</li></a> 
           <a href=""><li>CONTACTOS</li></a> 
          </ul>
        </div>
      )}
    </>
  );
};
export default Nav;