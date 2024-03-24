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
        <a href="/"><img className="logo" src={Logo} alt="" /></a>
        <div className="menu-hambur">
          <p>Menu</p>{" "}
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
          <ul className="contenedor-ul">
            <a href="/sobrenosotros">
              <div className="nuestro">
                <li className="text-top">SOBRE NOSOTROS</li>
                <li className="text-bottom">SOBRE NOSOTROS</li>
              </div>
            </a>
            <a href="/servicios">
              <div className="nuestro">
                <li className="text-top">SERVICIOS</li>
                <li className="text-bottom">SERVICIOS</li>
              </div>
            </a>
            <a href="/planes">
              <div className="nuestro">
                <li className="text-top">PLANES</li>
                <li className="text-bottom">PLANES</li>
              </div>
            </a>
            <a href="">
              <div className="nuestro">
                <li className="text-top">CONTACTOS</li>
                <li className="text-bottom">CONTACTOS</li>
              </div>
            </a>
            <a href="/trabajos">
              <div className="nuestro">
                <li className="text-top">TRABAJOS</li>
                <li className="text-bottom">TRABAJOS</li>
              </div>
            </a>
          </ul>
        </div>
      )}
    </>
  );
};
export default Nav;
