import React from "react";
import "./servicios.css";
import Nav from "../../componentes/navbar/nav";
import { Footer } from "../../componentes/footer/footer";
import { FaAngleDown } from "react-icons/fa6";

export default function Servicios() {
  return (
    <>
      <div className="main-servicios">
        <Nav />

        <div className="servicios-contenedor">
          <div className="servicios-contenedor-text">
            <h1>SERVICIOS</h1>
            <p>
              En Node Digital Studio, ofrecemos una amplia gama de servicios
              <br />
              diseñados para ayudarte a destacar en el mundo digital. Nuestro
              <br />
              equipo experto está aquí para brindarte soluciones creativas y
              <br />
              tecnológicas que impulsen el éxito de tu marca. A continuación,
              <br /> se detallan algunos de los servicios que ofrecemos:
            </p>
          </div>
        </div>
        <div className="pie-de-pagina-b">
          <a>
            <p>
              Scroll Para Continuar <FaAngleDown/>
            </p>
          </a>

          <p>Galería De Proyectos</p>
        </div>
        <div className="servicios-explicacion-contenedor">
          <div className="servicios-explicacion">
            <div className="explicacion-text">
              <h1>DESARROLLO WEB</h1>
              <p>
                Creamos sitios web a medida que se adaptan a tus
                <br /> necesidades específicas. Desde páginas informativas
                <br /> hasta portales complejos, nuestro equipo de desarrollo
                <br /> web se encarga de ofrecerte soluciones tecnológicas
                <br /> sólidas y fiables.
              </p>
            </div>
          </div>
          <div className="servicios-explicacion">
            <div className="explicacion-text">
              <h1>E-COMMERCE</h1>
              <p>
                Diseñamos y desarrollamos plataformas de comercio
                <br /> electrónico que maximizan tus ventas en línea. Desde la
                <br />
                configuración inicial hasta la optimización continua, <br />
                te ayudamos a crear una experiencia de compra en línea
                <br /> excepcional para tus clientes.
              </p>
            </div>
          </div>

          <div className="servicios-explicacion">
            <div className="explicacion-text">
              <h1>BRAND STRATEGY</h1>
              <p>
                Desarrollamos estrategias de marca sólidas que te
                <br /> ayudan a diferenciarte en un mercado competitivo.
                <br /> Desde la investigación de mercado hasta la creación de{" "}
                <br />
                posicionamiento, te ayudamos a construir una marca
                <br /> fuerte y coherente que resuene con tu audiencia.
              </p>
            </div>
          </div>
          <div className="servicios-explicacion">
            <div className="explicacion-text">
              <h1>DISEÑO GRAFICO</h1>
              <p>
                Nuestro equipo de diseñadores gráficos talentosos se <br />
                encarga de dar vida a tus ideas a través de diseños
                <br /> creativos y atractivos. Desde el diseño de logotipos
                hasta
                <br /> la creación de materiales de marketing, nos aseguramos{" "}
                <br />
                de que tu marca destaque en todos los aspectos visuales.
              </p>
            </div>
          </div>

          <div className="servicios-explicacion">
            <div className="explicacion-text">
              <h1>MANTENIMIENTO</h1>
              <p>
                Ofrecemos servicios de mantenimiento web continuo
                <br /> para garantizar que tu sitio web funcione sin problemas
                <br /> en todo momento. Desde actualizaciones de contenido
                <br /> hasta seguridad y rendimiento, nos encargamos de que{" "}
                <br />
                tu sitio web esté siempre en óptimas condiciones..
              </p>
            </div>
          </div>
          <div className="servicios-explicacion">
            <div className="explicacion-text">
              <h1>EXPERIENCIA DE USUARIO</h1>
              <p>
                Ofrecemos servicios de mantenimiento web continuo
                <br /> para garantizar que tu sitio web funcione sin problemas
                <br /> en todo momento. Desde actualizaciones de contenido
                <br /> hasta seguridad y rendimiento, nos encargamos de que{" "}
                <br />
                tu sitio web esté siempre en óptimas condiciones.
              </p>
            </div>
          </div>
        </div>
        <div className="consultoria-contenedor">
          <div className="consultoria-text">
            <div>
              <h1>CONSULTORÍA Y ASESORAMIENTO</h1>
              <p>
                Nuestro equipo de expertos está aquí para brindarte orientación
                <br /> y asesoramiento personalizado en todas las etapas de tu
                <br /> proyecto digital. Ya sea que necesites ayuda con la
                planificación
                <br /> estratégica o la resolución de problemas técnicos,
                estamos aquí
                <br /> para ayudarte a alcanzar tus metas.
              </p>
            </div>

            <div className="consultoria-button ">
              <a href="#">CONTACTA CON NOSOTROS</a>
            </div>
          </div>
        </div>
        <div className="final-contenedor">
          <div className="final-text">
            <p>
              TODO NUESTRO EQUIPO ESTÁ CALIFICADO PARA <br /> CADA APARTADO, TENEMOS UN
              GRAN  <br />GRUPO HUMANO QUE TRABAJARÁ EN  <br />CONJUNTO PARA CUMPLIR TODAS LAS
              EXPECTATIVAS.
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
