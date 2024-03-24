import "./App.css";
import React, { useState } from "react";
import { Nav } from "./componentes/navbar/nav";
import { Footer } from "../src/componentes/footer/footer";
import SobreNosotros from "./pages/sobrenosotros/sobrenosotros";
import Planes from "./pages/planes/planes";
import Servicios from "./pages/servicios/servicios";
import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import cx from "classnames";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const mainClassName = cx("main", {
    light: isLightMode,
  });

  return (
    <div className={mainClassName}>
      <Nav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      {!isMenuOpen && (
        <Routes>
          <Route
            path="/"
            element={
              <Home isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
            }
          />
          <Route path="/planes" element={<Planes />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      )}
      {!isMenuOpen && <Footer />}
    </div>
  );
}

export default App;
