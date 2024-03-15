import React from "react";
import "./footer.css";
import R from "../../../src/svg/R.svg";
import Arriba from "../../svg/up.svg";
import Seguinos from "../../../src/svg/seguinos.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Nav from "../navbar/nav"

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <a href="/">
          <p className="volver">
            Volver al HOME     <img src={Arriba} alt="" />
          </p>
        </a>

        <div className="laR">
          <p>2024 Node Digital Studio</p>
          <img src={R} alt="" />
        </div>
        <div className="caja-redes">
          <div className="segui">
            <img src={Seguinos} alt="" />
          </div>
          <div className="redes">
            <a href="">
              <FaXTwitter />
            </a>
            <a href="">
              <FaFacebookSquare />
            </a>
            <a href="">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
