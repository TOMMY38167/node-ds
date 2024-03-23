import React from "react";
import "./planes.css";
import Nav from "../../componentes/navbar/nav";
import { Footer } from "../../componentes/footer/footer";
import Tarjeta1 from "../../img/img-tarjeta-1.png";
import Tarjeta2 from "../../img/img-tarjeta-2.png";
import Tarjeta3 from "../../img/img-tarjeta-3.png";
import Tarjeta4 from "../../img/img-tarjeta-4.png";
import Tarjeta5 from "../../img/img-tarjeta-5.png";
import Tarjeta6 from "../../img/img-tarjeta-6.png";
import Estrella from "../../svg/Estrella.svg";
import Flechaizquierda from "../../svg/flecha Tarjeta 2.svg";

export default function Planes() {
  return (
    <>
      <Nav />
      <div className="contenedor-planes">
        <h1>PLANES</h1>
        <p>
          En Node Digital Studio, ofrecemos una amplia gama de servicios
          <br />
          diseñados para ayudarte a destacar en el mundo digital. Nuestro
          <br /> equipo experto está aquí para brindarte soluciones creativas y
          <br /> tecnológicas que impulsen el éxito de tu marca. A continuación,
          <br /> se detallan algunos de los servicios que ofrecemos:
        </p>
      </div>
      <div className="contenedor-tarjeta">
        <div className="contenedor-tarjeta-img">
          <img className="tarjeta1" src={Tarjeta2} alt="" />
          <img className="tarjeta2" src={Tarjeta1} alt="" />
          <div className="contenedor-tarjeta-text">
            <div className="h1-p-contenedor">
              <h1 className="hover-text">BASIC</h1>
              <p className="hover-text">
                Nuestro plan Básico es perfecto para que puedas <br /> tener tu
                web personalizada y de forma rápida para que puedas
                <br /> salir al mercado dentro de un tiempo record!
              </p>
            </div>
            <div className="ul-contenedor">
              <ul className="hover-text">
                <li>Desarrollo Web:</li>
                <li>Creación de un sitio web de hasta 5 páginas.</li>
                <li>
                  Diseño responsive para adaptarse a dispositivos móviles.
                </li>
                <li>Brand Strategy:</li>
                <li>
                  Sesión de consultoría inicial para establecer la identidad de
                  marca.
                </li>
                <li>Diseño Gráfico:</li>
                <li>Diseño de logo básico.</li>
                <li>Elección de paleta de colores y tipografía.</li>
                <li>Hosting de la Página Web:</li>
                <li>Alojamiento web para un año</li>
              </ul>
            </div>
            <div className="p-a-contenedor">
              <p>
                Todos nuestros planes están sustentados para
                <br /> que tengas la mejor asesoría y herramientas de
                <br /> estrategias para poder salir al mercado <br />a competir.
                Una web única es seguridad <br />y calidad.
              </p>
              <div className="planes--button ">
                <a href="#">¡Quiero este plan!</a>
              </div>
            </div>
          </div>
        </div>
        <div className="contenedor-tarjeta-img">
          <img className="tarjeta1" src={Tarjeta4} alt="" />
          <img className="tarjeta2" src={Tarjeta3} alt="" />
          <div className="contenedor-tarjeta-text">
            <img className="arriba-izquierda" src={Flechaizquierda} alt="" />
            <img className="arriba-derecha" src={Flechaizquierda} alt="" />

            <img className="abajo-izquierda" src={Flechaizquierda} alt="" />
            <img className="abajo-derecha" src={Flechaizquierda} alt="" />

            <div className="h1-p-contenedor">
              <h1 className="hover-text">LEVEL UP</h1>
              <p className="hover-text">
                Nuestro plan LevelUP es perfecto para que puedas tener <br /> tu
                web personalizada y Profesional, también puedes <br /> pedir el
                E-commerce, perfecto para negocios <br /> o ventas online!
              </p>
            </div>
            <div className="ul-contenedor">
              <ul className="hover-text">
                <li>Desarrollo Web:</li>
                <ul>
                  <li>
                    Creación de un sitio web de hasta 10 páginas con
                    funcionalidades avanzadas.
                  </li>
                  <li>
                    Integración de formulario de contacto y redes sociales.
                  </li>
                </ul>
                <li>E-commerce:</li>
                <ul>
                  <li>Implementación de carrito de compra.</li>
                  <li>Implementación de tienda online.</li>
                </ul>

                <li>Brand Strategy:</li>
                <ul>
                  <li>
                    Sesión de consultoría inicial y elaboración de plan de
                    acción para fortalecer la identidad de marca.
                  </li>
                </ul>
                <li>Diseño Gráfico:</li>
                <ul>
                  <li>Diseño de logo completo y manual de marca.</li>
                  <li>
                    Creación de gráficos personalizados para el sitio web.
                  </li>
                </ul>

                <li>Hosting de la Página Web:</li>
                <ul>
                  <li>Alojamiento web para un año.</li>
                </ul>
                <li>Mantenimiento:</li>
                <ul>
                  <li>
                    1 meses de mantenimiento técnico y soporte post-lanzamiento.
                  </li>
                </ul>
              </ul>
            </div>
            <div className="p-a-contenedor">
              <p>
                Todos nuestros planes están sustentados para
                <br /> que tengas la mejor asesoría y herramientas de
                <br /> estrategias para poder salir al mercado <br />a competir.
                Una web única es seguridad <br />y calidad.
              </p>
              <div className="planes--button ">
                <a href="#">¡Quiero este plan!</a>
              </div>
            </div>
          </div>
        </div>
        <div className="contenedor-tarjeta-img">
          <img className="tarjeta1" src={Tarjeta6} alt="" />
          <img className="tarjeta2" src={Tarjeta5} alt="" />
          <div className="contenedor-tarjeta-text">
            <img className="arriba-izquierda" src={Estrella} alt="" />
            <img className="arriba-derecha" src={Estrella} alt="" />

            <img className="abajo-izquierda" src={Estrella} alt="" />
            <img className="abajo-derecha" src={Estrella} alt="" />

            <div className="h1-p-contenedor">
              <h1 className="hover-text">CORPORATIVO</h1>
              <p className="hover-text">
                Nuestro plan Corporativo es perfecto para que puedas tener
                <br /> tu web personalizada y de forma profesional, con
                complementos
                <br /> que ayudaran a conseguir los objetivos que necesitas
              </p>
            </div>
            <div className="ul-contenedor">
              <ul className="hover-text">
                <li>Desarrollo Web:</li>
                <ul>
                  <li>
                    Creación de un sitio web personalizado con funcionalidades
                    avanzadas y hasta 20 páginas.
                  </li>
                  <li>
                    Integración de sistema de gestión de contenidos (CMS) para
                    fácil administración.
                  </li>
                </ul>
                <li>Ecommerce:</li>
                <ul>
                  <li>
                    Implementación de tienda online con hasta 100 productos.
                  </li>
                  <li>Configuración de pasarela de pago segura.</li>
                </ul>
                <li>Brand Strategy:</li>
                <ul>
                  <li>
                    Sesión de consultoría completa y desarrollo de estrategia de
                    marca personalizada.
                  </li>
                  <li>Creación de contenido de marca y guía de tono de voz.</li>
                </ul>
                <li>Diseño Gráfico:</li>
                <ul>
                  <li>
                    Diseño de logo premium y manual de identidad corporativa.
                  </li>
                  <li>
                    Creación de elementos visuales para marketing digital
                    (banners, anuncios, etc.).
                  </li>
                </ul>
                <li>Hosting de la Página Web:</li>
                <ul>
                  <li>Alojamiento web para un año.</li>
                </ul>
                <li>Mantenimiento:</li>
                <ul>
                  <li>
                    3 meses de mantenimiento técnico y soporte post-lanzamiento.
                  </li>
                </ul>
              </ul>
            </div>
            <div className="p-a-contenedor">
              <p>
                Todos nuestros planes están sustentados para
                <br /> que tengas la mejor asesoría y herramientas de
                <br /> estrategias para poder salir al mercado <br />a competir.
                Una web única es seguridad <br />y calidad.
              </p>
              <div className="planes--button ">
                <a href="#">¡Quiero este plan!</a>
              </div>
            </div>
          </div>
        </div>
        <div className="contenedor-tarjeta-final">
          <p>
            TODO NUESTRO EQUIPO ESTÁ CALIFICADO PARA<br/> CADA APARTADO, TENEMOS UN
            GRAN <br/>GRUPO HUMANO QUE TRABAJARÁ EN <br/>CONJUNTO PARA CUMPLIR TODAS LAS
            EXPECTATIVAS.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
