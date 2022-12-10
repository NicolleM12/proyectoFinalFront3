import React from 'react'
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import styles from "../index.css"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

    const { id } = useParams();
    const [usuarios, setUsuarios] = useState();
    const { theme } = useContext(ContextGlobal);
    const isDarkMode = theme === "dark" || false;


useEffect(() => {
    async function fetchData() {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUsuarios(data);
        });
    }
    fetchData();
  }, [id]);

      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
  return (
    <>
      {usuarios ? (
        <>
          <h1>Información sobre el Odontologo</h1>
          <section>
            <div
              className={`card-body row ${isDarkMode ? "cardDark" : ""}`}
            >
                <div className="col-sm-12 col-lg-6">
                <ul className="list-group">
                  <li className="list-group-item">Nombre: {usuarios.name}</li>
                  <li className="list-group-item">
                    Email: {usuarios.email}
                  </li>
                  <li className="list-group-item">
                    Phone: {usuarios.phone}
                  </li>
                  <li className="list-group-item">
                    Website: {usuarios.website}
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
export default Detail 