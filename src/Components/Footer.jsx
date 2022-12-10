import React from 'react';
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';
import styles from "../index.css";

const Footer = () => {


  const {theme} = useContext(ContextGlobal)
  
  const isDarkMode = theme === "dark" || false
  
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  } 

  return (
    <footer>
      <div className="footerWrapper">
        <button class="btn btn-info top" onClick={scrollToTop}>¡Vuela arriba!</button>
        <div className={`${isDarkMode ? "navbar-dark bg-dark footer" : "navbar-light bg-light footer"}`}>
          <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-6">
                  <img src="images/DH.png" className={`${isDarkMode ? "iconsDark dhLogo" : 'dhLogo'}`}  alt='DH-logo' />
                </div>
                <div 
            className={`col-sm-12 col-lg-6 ${isDarkMode ? "iconsDark icons" : 'icons'}`}>
              <img src='images/ico-facebook.png'alt='icono fb' className="icon"/>
              <img src='images/ico-instagram.png' alt='icono ig' className="icon"/>
              <img src='images/ico-whatsapp.png' alt='icono ws' className="icon"/>
              <img src='images/ico-tiktok.png' alt='icono tiktok' className="icon"/>
            </div>
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
