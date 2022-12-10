import React from 'react'
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import styles from "../index.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {theme, setDarkTheme, setLightTheme} = useContext(ContextGlobal);
  
  const isDarkMode = theme === "dark" || false;

  const changeTheme = () => {
    if (isDarkMode) setLightTheme();
    else setDarkTheme();
  };

  return (
    <header className="sticky-top">

    <nav className={`navbar navbar-expand-sm ${
          isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
        aria-label="Third navbar example">
      <div 
      className="container">
        <Link 
        className={`navbar-brand "navbarBrand"`} 
        to="/home">
          DH Clinica
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
            </span>
          </button>
      </div>

      <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarsExample03">
        <ul className="navbar-nav mb-2 mb-sm-0">
          <li className={`nav-item "navBarLink"`}>
            {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
            <Link 
            className="nav-link"
            to="/home">
            Home
            </Link>
          </li>
          <li className={`nav-item "navBarLink"`}>
            <Link 
            className="nav-link"
            to="/contact">
            Contacto
            </Link>
          </li>
          <li className={`nav-item "navBarLink"`}>
            <Link 
            className="nav-link"
            to="/favs">
            Favs
            </Link>
          </li>
        </ul>
      </div>
    
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button 
      className={`btn btn-${isDarkMode ? "light" : "dark"} $"btnStyle"`}
      onClick={changeTheme}>
        {isDarkMode ? "☀" : "🌙"}
      </button>
    </nav>

    </header>
  )
}

export default Navbar
