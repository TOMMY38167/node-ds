import React from "react";
import "./nav.css";
import Logo from "../../svg/logoNav.svg";
import Menu from "../../svg/menu.svg";

export const Nav = () => {
  return (
    <div className="navBar">
      <img className="logo" src={Logo} alt="" />
      <a className="menu" href="#"><img src={Menu} alt="" /></a>
    </div>
  );
};
