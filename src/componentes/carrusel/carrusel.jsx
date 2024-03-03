import { Background, Parallax } from "react-parallax";
import "./carrusel.css";
import Baires from "../../img/baires.png";
import Boscova from "../../img/boscova.png";
import Fulltex from "../../img/fulltex.png";
import Iaproyectos from "../../img/iaproyectos.png";

const Carrusel = () => {
  return (
    <>
      <Parallax contentClassName="contenedor1" bgImage={Baires} bgClassName="imgFondo" >
     <h1></h1>
      </Parallax>
     
      <Parallax contentClassName="contenedor1"  bgImage={Fulltex} bgClassName="imgFondo">
       <h2></h2>
      </Parallax>
      
    </>
  );
};
export default Carrusel;