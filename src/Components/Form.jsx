import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { setTokenInStorage } from "./utils/localStorage.service";
import styles from "../index.css"
import { useState } from "react";


const Form = () => {

  const [nombre, setNombre] = useState();
  const {theme} = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false
  //Aqui deberan implementar el form completo con sus validaciones

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // no se va a enviar nada, solo se toman los valores, se meten en un state y se muestran
    if(setNombre.length <= 4){
      setNombre(document.getElementById("nombreUsuario").value);
    }else{
      alert("Verifica que tu nombre esté correcto")
    }
  }

  return (
    
    <div
    className={`text-center cajita " ${
      isDarkMode ? "cardDark" : ""
    }`}>

      <h1
      className="h1">
        ¿Quieres saber más de nosotros?
      </h1>
      <p>
        Envianos un correo y te responderemos toda la información que requieras.
      </p>
      <div 
      className= "card-body CardBody1">
        <form 
        onSubmit={handleSubmit} className="form">
          <input
          className= "form-control inputSpacing"
          id="nombreUsuario"
          placeholder="Nombre completo"
          name="nombre"
          required>
          </input>
         
          <input
          className= "form-control inputSpacing"
          id="emailCorre"
          placeholder="Email"
          name="email"
          required>
          </input>
        
        <button
        className="btn btn-info"
        type="submit">Enviar</button>
        
        <p>{ nombre && "Gracias "+nombre+", te contactaremos cuanto antes vía email."}</p>
      </form>
      </div>
    </div>
  );
};

export default Form;
