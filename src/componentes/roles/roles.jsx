import React, { useRef,useEffect } from "react";

import "./roles.css";

export const Roles = ({ textoIzquierda, textoCentro, textoDerecha, foto }) => {
  const cursorRef1=useRef();
 
  const followMouse = (ref, e) => {
    ref.current.style.top = `${e.pageY}px`;
    ref.current.style.left = `${e.pageX}px`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      followMouse(cursorRef1, e);
   
    });
  });

  return (
    <div className="contenedor-roles ">
      <div className="textInputContainer">
        <p className="texto-izquierda blanco-negro">{textoIzquierda}</p>
        <div className="texto-medio">
          <p className="blanco-negro">{textoCentro}</p>
        </div>
        <p className="texto-derecha blanco-negro">{textoDerecha}</p>
      </div>
      <div className="follow" ref={cursorRef1}>
<img src={foto} alt="" />
      </div>
    </div>
  );
};

export default Roles;
