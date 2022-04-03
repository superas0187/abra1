import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  favoriteslist: localStorage.getItem("favoriteslist")
    ? JSON.parse(localStorage.getItem("favoriteslist"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favoriteslist", JSON.stringify(state.favoriteslist));
  }, [state]);

  
  const addWetherlist = (city) => {
    dispatch({ type: "ADD_WETHER_LIST", payload: city });
  };

  const removeWetherlist = (keys) => {
    dispatch({ type: "REMOVE_WETHER_LIST", payload: keys });
  };


  return (
    <GlobalContext.Provider
      value={{
        favoriteslist: state.favoriteslist,
        addWetherlist,
        removeWetherlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};