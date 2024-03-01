import "./App.css";
import { Nav } from "./componentes/navbar/nav";
import { Footer } from "./componentes/footer/footer";
import { Parallax } from "react-scroll-parallax";

function App() {
  return (
    <div>
      <Nav />
      <div className="contenido">
        <Parallax speed={-10} translateX={['-400px', '0px']}>
          <div className="capa1">
            <h1>hola mundo</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              id blanditiis aliquam minima quibusdam rem libero quos in dolore
              adipisci quaerat officia, assumenda repellendus maxime minus non
              accusantium doloremque laborum.
            </p>
          </div>
        </Parallax>
        <Parallax speed={-10} translateY={['0px', '400px']}>
          <div className="capa2">
            <h1>hola mundo 3</h1>
            <h1>hola mundo 4</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              id blanditiis aliquam minima quibusdam rem libero quos in dolore
              adipisci quaerat officia, assumenda repellendus maxime minus non
              accusantium doloremque laborum.
            </p>
          </div>
        </Parallax>
        <Parallax speed={-800}>
          <div className="capa3">
            <h1>hola mundo</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              id blanditiis aliquam minima quibusdam rem libero quos in dolore
              adipisci quaerat officia, assumenda repellendus maxime minus non
              accusantium doloremque laborum.
            </p>
          </div>
        </Parallax>
        <Parallax speed={-50}>
          <div className="capa4">
            <h1>hola mundo</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              id blanditiis aliquam minima quibusdam rem libero quos in dolore
              adipisci quaerat officia, assumenda repellendus maxime minus non
              accusantium doloremque laborum.
            </p>
          </div>
        </Parallax>
        <Parallax speed={-20}>
          <div className="capa5">
            <h1>hola mundo</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              id blanditiis aliquam minima quibusdam rem libero quos in dolore
              adipisci quaerat officia, assumenda repellendus maxime minus non
              accusantium doloremque laborum.
            </p>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
