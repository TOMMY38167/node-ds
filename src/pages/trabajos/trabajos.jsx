import React from "react";
import "./trabajos.css";
import Simbolos from "../../../src/svg/simbolos-fulltex.svg";
import Rayitas from "../../../src/svg/rayitas-chotas.svg";
import { FaAngleDown } from "react-icons/fa6";
import Balde from "../../../src/svg/BaldeNuevo 1.svg";

export default function Trabajos() {
  return (
    <>
      <div className="contenedor-fulltex-trabajos">
        <div className="titulos-trabajo-contenedor">
          <h1>FULLTEX</h1>

          <img src={Simbolos} alt="" />
        </div>
        <div className="rayitas-contenedor">
          <img src={Rayitas} alt="" />
        </div>
        <div className="trabajos-text-contenedor">
          <p>
            FullTex, establecido en 2023, es <br /> un fabricante líder en
            <br />
            revestimientos plásticos
            <br />
            texturizados, incluyendo <br />
            productos como látex y<br /> membranas. Con una visión <br />
            centrada en la calidad y la
            <br />
            innovación, la empresa se ha
            <br />{" "}
            <samp>
              destacado en un mercado
              <br /> altamente competitivo.
            </samp>{" "}
            Este
            <br /> estudio de caso analiza cómo
            <br /> FullTex ha utilizado una identidad <br />
            visual inspirada en la Escuela
            <br /> Bauhaus para fortalecer su
            <br /> posición en el mercado y<br /> comunicar su compromiso con la
            <br />
            excelencia.
          </p>
        </div>
      </div>
      <div className="pie-de-pagina-b">
        <a>
          <p>
            Scroll Para Continuar <FaAngleDown />
          </p>
        </a>
        <p>Galería De Proyectos</p>
      </div>
      <div className="contenedor-contexto">
        <div className="titulos-contexto-contenedor">
          <h1>CONTEXTO</h1>
          <img src={Simbolos} alt="" />
        </div>
        <div className="contenedor-balde">
         <img src={Balde} alt="" />
          <p>
            En el mercado de revestimientos plásticos, la diferenciación es
            crucial para el éxito. FullTex se enfrentaba al desafío de
            establecer una identidad visual que no solo reflejara la calidad de
            sus productos, sino que también transmitiera su enfoque innovador y
            moderno.
          </p>
        </div>
      </div>
    </>
  );
}
