import "./sobrenosotros.css";
import { useState } from "react";
import React from "react";
import Nav from "../../componentes/navbar/nav";
import Fondo from "../../svg/fondologonegro.svg";
import Abajo from "../../svg/down.svg";

export function SobreNosotros() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Nav  setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div className="sobre-nosotros">
        <div className="nosotros-text">
          <h1>SOBRE NOSOTROS</h1>
          <p>
            En Node Digital Studio, estamos en una misión apasionante: <br />{" "}
            fusionar creatividad y tecnología para ofrecer soluciones <br />{" "}
            digitales innovadoras y atractivas. Somos un equipo de <br />{" "}
            diseñadores, desarrolladores y estrategas apasionados que se <br />{" "}
            esfuerzan por superar los límites de lo convencional.
          </p>
        </div>
        <div className="nosotros-img">
          <img src={Fondo} alt="" />
        </div>
      </div>
      <div className="pie-de-pagina-b">
        <a>
          <p>
            Scroll Para Continuar <img src={Abajo} alt="" />
          </p>
        </a>

        <p>Galería De Proyectos</p>
      </div>
      <div className="nuestra-vision">
        <div className="nuestra-text">
          <h1>NUESTRA VISION</h1>
          <p>
            En Node Digital Studio, estamos en una misión apasionante: <br />{" "}
            fusionar creatividad y tecnología para ofrecer soluciones <br />{" "}
            digitales innovadoras y atractivas. Somos un equipo de <br />{" "}
            diseñadores, desarrolladores y estrategas apasionados que se <br />{" "}
            esfuerzan por superar los límites de lo convencional.
          </p>
        </div>
      </div>
      <div className="nuestra-pasion">
        <div className="pasion-text">
          <h1>NUESTRA PASION</h1>
          <p>
            En Node Digital Studio, abrazamos la colaboración y la <br />{" "}
            innovación. Cada proyecto es una oportunidad para explorar
            <br /> nuevas ideas y desafiar lo establecido. Nos enorgullece
            nuestro
            <br /> enfoque centrado en el cliente, trabajando estrechamente con
            <br /> cada cliente para comprender sus necesidades y ofrecer
            <br /> soluciones personalizadas que superen sus expectativas.
          </p>
        </div>
      </div>
      <div className="comprendemos">
        <div className="comprendemos-text">
          <p>
            COMPRENDEMOS LAS NECESIDADES DE NUESTROS CLIENTES <br /> INDAGAMOS
            EN LO MÁS PROFUNDO PARA <br /> COMUNICAR LO QUE REALMENTE QUIEREN
          </p>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
}
export default SobreNosotros;
