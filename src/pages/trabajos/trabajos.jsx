import React from "react";
import "./trabajos.css";
import Simbolos from "../../../src/svg/simbolos-fulltex.svg";
import Rayitas from "../../../src/svg/rayitas-chotas.svg";
import { FaAngleDown } from "react-icons/fa6";
import Balde from "../../img/BaldeNuevo 1.png";
import Membrana from "../../img/baldemembrana 1.png";
import Fullscreen from "../../img/fulltex-screen.png";
import Colores from "../../img/colores-img.png";
import Latexscreen from "../../img/screen-latex.png"
import Revestscreen from "../../img/revestimiento-screen.png";
import RayitasNaranja from "../../../src/svg/rayitas-chotas-naranjas.svg";
import Fulltex from "../../../src/svg/fulltex-logo-completo.svg";
import Simbolostex from "../../../src/svg/simbolos-fulltex-completo.svg";
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
            <strong>
              En el mercado de revestimientos plásticos, la <br />{" "}
              diferenciación es crucial para el éxito. FullTex
              <br /> se enfrentaba al desafío de establecer una
              <br /> identidad visual que no solo reflejara la
              <br /> calidad de sus productos, sino que también
              <br /> transmitiera su enfoque innovador y moderno.
            </strong>
          </p>
          <div className="rayitas-naranjas">
            <img src={RayitasNaranja} alt="" />
          </div>
        </div>
        <div className="fulltex-contenedor">
          <div className="fulltex-logo">
            <img src={Fulltex} alt="" />
          </div>
          <div className="fulltex-simbolos-completos">
            <img src={Simbolostex} alt="" />
          </div>
        </div>
        <div className="desafio-contenedor">
          <div className="desafio-text">
            <h1>DESAFÍO</h1>
            <img src={Simbolos} alt="" />
          </div>
          <div className="contenedor-balde-textos">
            <div className="contenedor-text-p">
              <p>
                Crear una identidad visual distintiva que se destacara en un
                mercado saturado. Comunicar la calidad y la innovación de los
                productos de FullTex de manera efectiva. Reflejar el enfoque
                moderno y vanguardista de la empresa en su identidad visual.
                Soluciones:
              </p>
              <p>
                <h2>Inspiración en la Escuela Bauhaus:</h2>
                FullTex adoptó principios de diseño de la Escuela Bauhaus,
                enfocándose en líneas limpias, formas geométricas y colores
                audaces. Diseño de Identidad Visual: Se desarrolló un nuevo
                logotipo que incorporaba tipografía moderna y formas geométricas
                simplificadas.
              </p>
              <img src={Simbolostex} alt="" />
              <p>
                <h2>implementacion coherente:</h2>
                La nueva identidad visual se aplicó en todos los materiales de
                marketing, desde folletos hasta el sitio web, creando una
                experiencia de marca consistente. Resultados:
              </p>
              <p>
                <h2>Respuesta Positiva:</h2>
                La nueva identidad visual recibió elogios tanto de clientes
                existentes como de nuevos clientes potenciales.
              </p>
              <p>
                <h2>Diferenciación en el Mercado:</h2>
                FullTex se destacó en un mercado saturado gracias a su enfoque
                único en el diseño.
              </p>
            </div>
            <div className="contenedor-balde-membrana">
              <img src={Membrana} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="conclusion-contenedor">
        <div className="conclusion-h1-img">
          <h1>CONCLUSION</h1>
          <img src={Simbolos} alt="" />
        </div>
      </div>
      <div className="conclusion-p">
        <p>
          El caso de FullTex demuestra el poder de una identidad visual
          <br /> sólida y coherente en la construcción de una marca exitosa. Al
          <br /> adoptar una estrategia inspirada en la Escuela Bauhaus, la
          <br /> empresa logró diferenciarse en un mercado competitivo y<br />{" "}
          comunicar su compromiso con la calidad y la innovación. Este
          <br /> estudio destaca la importancia de la creatividad y el diseño en
          la
          <br /> creación de una marca memorable y exitosa.
        </p>
      </div>
      <div className="conclusion-contenedor-imagenes">
        <div className="imagenes-izquierda">
          <img src={Fullscreen} alt="" />
          <img src={Colores} alt="" />
        </div>
        <div className="imagenes-derecha">
          <img src={Revestscreen} alt="" />
        </div>
      </div>
      <div className="latex-img-final">
        <img src={Latexscreen} alt="" />
      </div>
      <div className="fulltex-link">
        <a href="https://www.fulltex.com.ar/" target="_blank">
          <h1>WWW.FULLTEX.COM.AR</h1>
        </a>
      </div>
    </>
  );
}
