import React from "react";
import "./footer.css";
import { AiOutlineTrademark } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";

import { IoIosArrowUp } from "react-icons/io";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import classNames from "classnames";
import { useLocation } from "react-router-dom";
export const Footer = () => {
  const location = useLocation();
  const paginasNegras = ["/servicios", "/trabajos"] ;
  const footerClassnames = classNames("footer", {
    "footer-negro": paginasNegras.includes(location.pathname),
  });
 
  return (
    <>
      <div className={footerClassnames}>
        <a href="#">
          <p className="volver">
            Volver al HOME <IoIosArrowUp />
          </p>
        </a>

        <div className="laR">
          <p>2024 Node Digital Studio</p>
          <AiOutlineTrademark />
        </div>
        <div className="caja-redes">
          <div className="segui">
            <p>seguinos</p>
            <div className="sharef"><BsShareFill /></div>
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
