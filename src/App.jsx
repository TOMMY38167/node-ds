import "./App.css";
import { Nav } from "./componentes/navbar/nav";
import { Footer } from "./componentes/footer/footer";
import { Parallax } from "react-scroll-parallax";
import Carrusel from "../src/componentes/carrusel/carrusel";
import Fondo from "./svg/indexLogo.svg";

function App() {
  return (
    <div>
      <Nav />
      <div className="fondo">
        <img src={Fondo} alt="" />
        <p>
          En Node Digital Studio, nos dedicamos a ofrecer soluciones creativas y
          digitales que impulsan el éxito de tu negocio. Desde la creación de
          páginas web dinámicas y atractivas hasta el desarrollo de estrategias
          de marca impactantes y el diseño gráfico de primera calidad
        </p>
      </div>
     <Carrusel />
    </div>
  );
}

export default App;
