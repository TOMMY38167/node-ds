import "./App.css";
import React, { useState } from "react";
import { Nav } from "./componentes/navbar/nav";
import { Footer } from "../src/componentes/footer/footer";
import Carrusel from "../src/componentes/carrusel/carrusel";

import Fondo from "./svg/indexLogo.svg";
import Gmail from "./svg/gmail.svg";
import Direccion from "./svg/ubicacion.svg";
import Telefonos from "./svg/tel.svg";
import Abajo from "./svg/down.svg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="main">
      <Nav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      {!isMenuOpen && (
        <>
          <div id="principal" className="fondo">
            <img src={Fondo} alt="" />
            <p>
              EN NODE DIGITAL STUDIO, NOS DEDICAMOS A OFRECER SOLUCIONES
              CREATIVAS Y <br /> DIGITALES QUE IMPULSAN EL ÉXITO DE TU NEGOCIO.
              DESDE LA CREACIÓN DE PÁGINAS WEB <br /> DINÁMICAS Y ATRACTIVAS
              HASTA EL DESARROLLO DE ESTRATEGIAS DE MARCA IMPACTANTES Y <br />{" "}
              EL DISEÑO GRÁFICO DE PRIMERA CALIDAD.
            </p>
          </div>
          <div className="pie-de-pagina">
            
              <a href="#Carru">
                <p className="indicador1">Scroll Para Continuar   <img src={Abajo} alt="" /></p>
             
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
              <h1>
                ESTRATEGIA DE MARCA <br /> PROGRAMACIÓN <br />
                DISEÑO UX/UI
                <br /> ESTRATEGIA DE MARCA
              </h1>
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
          <div className="text-button">
            <h1>TRABAJEMOS JUNTOS</h1>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
