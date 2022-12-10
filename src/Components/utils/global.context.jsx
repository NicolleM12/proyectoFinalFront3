import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext, useMemo, useReducer } from "react";
import { actions, initialState, reducer } from "./reducer.service"

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer (reducer, initialState);

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsuarios(data));
    } catch (error) {
      console.error(error);
    }
  }, []);


  const providerState = useMemo(() => ({
      theme: state.theme,
      setDarkTheme: () => {
        dispatch({ type: actions.SET_THEME_DARK });
      },
      setLightTheme: () => {
        dispatch({ type: actions.SET_THEME_LIGHT });
      },
      usuarios:usuarios
  }),
  [state.theme,usuarios]
  );

  return (
    <ContextGlobal.Provider value={ providerState }>
      {children}
    </ContextGlobal.Provider>
  );
};
