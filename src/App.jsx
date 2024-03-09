import "./App.css";
import React, { useState } from "react";
import { Nav } from "./componentes/navbar/nav";
import { Footer } from "./componentes/footer/footer";
import Carrusel from "../src/componentes/carrusel/carrusel";

import Fondo from "./svg/indexLogo.svg";
import Gmail from "./svg/gmail.svg";
import Direccion from "./svg/direccion.svg";
import Telefonos from "./svg/telefonos.svg";
import Seguinos from "./svg/seguinos.svg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="main">
      <Nav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      {!isMenuOpen && (
        <>
          <div className="fondo">
            <img src={Fondo} alt="" />
            <p>
              EN NODE DIGITAL STUDIO, NOS DEDICAMOS A OFRECER SOLUCIONES
              CREATIVAS Y <br /> DIGITALES QUE IMPULSAN EL ÉXITO DE TU NEGOCIO.
              DESDE LA CREACIÓN DE PÁGINAS WEB <br /> DINÁMICAS Y ATRACTIVAS
              HASTA EL DESARROLLO DE ESTRATEGIAS DE MARCA IMPACTANTES Y <br />{" "}
              EL DISEÑO GRÁFICO DE PRIMERA CALIDAD.
            </p>
          </div>
          <div className="footer">
            <a href="#Carru">
              <p className="indicador1">Scroll Para Continuar</p>
            </a>
            <p className="indicador2">Galería De Proyectos</p>
          </div>
          <section id="Carru">
            <Carrusel />
          </section>
          <div className="text-button">
            <p>
              COMPRENDEMOS LAS NECESIDADES DE NUESTROS CLIENTES <br />
              INDAGAMOS EN LO MÁS PROFUNDO PARA <br />
              COMUNICAR LO QUE REALMENTE QUIEREN
            </p>
            <a href="#">VER TODOS LOS PROYECTOS</a>
            <h1>
              ESTRATEGIA DE MARCA <br /> PROGRAMACIÓN <br />
              DISEÑO UX/UI
              <br /> ESTRATEGIA DE MARCA
            </h1>
            <p>CONOCE EL TEAM CODE</p>
            <h1>NUESTRO EQUIPO</h1>
            <p>PRESUPUESTOS SIN CARGO </p>
            <h1>CONTACTANOS</h1>
          </div>
          <div className="contactos">
            <a className="ubi" href="#">
              <img src={Gmail} alt="" />
            </a>
            <a className="ubi" href="#">
              <img src={Direccion} alt="" />
            </a>
            <a className="ubi" href="#">
              <img src={Telefonos} alt="" />
            </a>
          </div>
          <div className="text-button">
            <h1>TRABAJEMOS JUNTOS</h1>
          </div>
          <div>
            <a href=""></a>
            <p></p>
            <a href=""></a>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
