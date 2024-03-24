import React, { useState } from "react";
import Fondo from "../../svg/indexLogo.svg";
import Gmail from "../../svg/gmail.svg";
import Direccion from "../../svg/ubicacion.svg";
import Telefonos from "../../svg/tel.svg";
import Abajo from "../../svg/down.svg";
import Carrusel from "../../../src/componentes/carrusel/carrusel";
import FocoDark from "../../img/focoNaranja.png";
import FocoLight from "../../img/focoNegro.png";
import LightSwitchON from "../../img/lightSwitchON.svg";
import LightSwitchOFF from "../../img/lightSwitchOFF.svg";
import SunDoodle from "../../img/sunDoodle.svg";
import MoonDoodle from "../../img/moonDoodle.svg";
import cx from "classnames";
import "./home.css";

export default function Home({ isLightMode, setIsLightMode }) {
  const [hoveredLetters, setHoveredLetters] = useState([]);

  const focoContainerClassName = cx("focoContainer", {
    switch: isLightMode,
  });
  const lightSwitchONClassName = cx("lightSwitchON", {
    lightSwitchONActive: isLightMode,
  });
  const lightSwitchOFFClassName = cx("lightSwitchOFF", {
    lightSwitchOFFInactive: isLightMode,
  });

  const homeContainerClassName = cx("homeContainer", {
    containerLightMode: isLightMode,
  });
  const lightSwitchContainerClassName = cx("lightSwitchContainer", {
    borderLightMode: isLightMode,
  });
  const handleMouseEnter = (index) => {
    setHoveredLetters([...hoveredLetters, index]);
  };

  const handleMouseLeave = (index) => {
    setHoveredLetters(hoveredLetters.filter((i) => i !== index));
  };
  const text = "TRABAJA     CON     NOSOTROS";

  return (
    <div className={homeContainerClassName}>
      <div id="principal" className="fondo">
        <img src={Fondo} alt="" />
        <div className="centeredContainer">
          <div
            className={lightSwitchContainerClassName}
            onClick={() => setIsLightMode(!isLightMode)}
          >
            <img src={SunDoodle} alt="" />
            <img src={MoonDoodle} alt="" />
            <img
              className={lightSwitchONClassName}
              src={LightSwitchON}
              alt=""
            />
            <img
              className={lightSwitchOFFClassName}
              src={LightSwitchOFF}
              alt=""
            />
          </div>
          <div className={focoContainerClassName}>
            <div
              className="focoDark"
              style={{ backgroundImage: `url(${FocoDark})` }}
            />
            <div
              className="focoLight"
              style={{ backgroundImage: `url(${FocoLight})` }}
            />
          </div>
        </div>
        <p>
          EN NODE DIGITAL STUDIO, NOS DEDICAMOS A OFRECER SOLUCIONES CREATIVAS Y{" "}
          <br /> DIGITALES QUE IMPULSAN EL ÉXITO DE TU NEGOCIO. DESDE LA
          CREACIÓN DE PÁGINAS WEB <br /> DINÁMICAS Y ATRACTIVAS HASTA EL
          DESARROLLO DE ESTRATEGIAS DE MARCA IMPACTANTES Y <br /> EL DISEÑO
          GRÁFICO DE PRIMERA CALIDAD.
        </p>
      </div>
      <div className="pie-de-pagina">
        <a href="#Carru">
          <p className="indicador1">
            Scroll Para Continuar <img src={Abajo} alt="" />
          </p>
        </a>

        <p className="indicador2">Galería De Proyectos</p>
      </div>
      <section id="Carru">
        <Carrusel />
      </section>
      <div className="space"></div>
      <div className="space"></div>
      <div className="space"></div>
      <div className="text-button">
        <p>
          COMPRENDEMOS LAS NECESIDADES DE NUESTROS CLIENTES <br />
          INDAGAMOS EN LO MÁS PROFUNDO PARA <br />
          COMUNICAR LO QUE REALMENTE QUIEREN
        </p>
        <div className="proyectos--button ">
          <a href="#">VER TODOS LOS PROYECTOS</a>
        </div>

        <div className="space--button"></div>
        <div className="servicios">
          <h1> ESTRATEGIA DE MARCA </h1>
          <h1> PROGRAMACIÓN </h1>
          <h1>DISEÑO UX/UI</h1>
          <h1>ESTRATEGIA DE MARCA</h1>
        </div>
        <div className="space--button"></div>
        <div className="conoce">
          <p>CONOCE EL TEAM CODE</p>
          <a href="">
            <h1>NUESTRO EQUIPO</h1>
          </a>
        </div>
        <div className="space--button"></div>
        <div className="presupuestos">
          <p>PRESUPUESTOS SIN CARGO </p>
          <a href="">
            {" "}
            <h1>CONTACTANOS</h1>
          </a>
        </div>
      </div>
      <div className="contactos">
        <a className="ubi" href="#">
          <img src={Gmail} alt="" />
          <p>nodedigitalstudio@gmail.com</p>
        </a>
        <a className="ubi" href="#">
          <img src={Direccion} alt="" />
          <p>Buenos Aires, Argentina</p>
        </a>
        <a className="ubi" href="#">
          <img src={Telefonos} alt="" />
          <p>3487-729492 / 11-51447842</p>
        </a>
      </div>
      <div className="space"></div>
      <div className="title-contenedor">
        <h1 className="title">
          {" "}
          {text.split("").map((letter, index) => (
            <span
              key={index}
              className={
                hoveredLetters.includes(index) ? "letter hovered" : "letter"
              }
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}
