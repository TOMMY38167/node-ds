import "./roles.css"
export const Roles = ({ textoIzquieda, textoCentro, textoDerecha }) => {


    return (
      <div className="textInputContainer">
        <p>{textoIzquieda}</p>
        <h5>{textoCentro}</h5>
        <p>{textoDerecha}</p>
      </div>
    );
  };
  export default Roles;
