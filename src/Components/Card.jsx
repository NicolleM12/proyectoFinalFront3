import React from "react";
import styles from '../index.css';
import { useContext, useState } from "react";
import { setFavInStorage, isFavorited, removeFavInStorage } from "./utils/localStorage.service";
import {ContextGlobal} from "./utils/global.context"
import {Link} from "react-router-dom";

const Card = ({nombre, username, id}) => {

  const [favorite, setFavorite] = useState (() => isFavorited(id));

  const { theme } = useContext(ContextGlobal);

  const isDarkMode = theme === "dark" || false;

  const isFavorite = (favorite) => {
    setFavorite(favorite);
  };

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    const favorite = setFavInStorage({nombre, username, id});
    isFavorite(favorite)
  }

  const removeFav = () => {
    const favorite = removeFavInStorage(id);
    isFavorite(favorite)
  }

  return (
    <div className={`card ${isDarkMode ? "cardDark" : ""}`}>
      <img 
      className="card-img-top"
      src="images/doctor.jpg"
      alt="doctor imagen"
      />
        <div className="card-body CardBody">
          
          <Link 
          to = {`/dentist/${id}`}>
            <h5 className="card-title title">
              {nombre}
            </h5>
          </Link>
          <p className="card-text">{username}</p>
        </div>
        <button 
          onClick={favorite ? removeFav : addFav}
          className={`btn btn-${isDarkMode ? "dark" : "light"} ${
            styles.favButton
          }`}>
            {favorite ? "❌ Elimina a este doctor de tus favoritos" : "⭐ ¡Agrega a este doctor a tus favoritos!"}
          </button>
    </div>
  );
};

export default Card;
