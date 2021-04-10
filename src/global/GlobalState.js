import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const GlobalState = (props) => {
    const [ restaurants, setRestaurants ] = useState([]);
    const [ cart, setCart ] = useState([]);
    
    const token = localStorage.getItem("token")


  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}restaurants`, {
        headers: {
            auth: token
        } 
      })
      .then((res) => setRestaurants(res.data.restaurants) )
      .catch((err) => console.log(err));
  };


  const states = { restaurants, cart };
  const setters = { setRestaurants, setCart };
  const requests = { getRestaurants };

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};


export default GlobalState;