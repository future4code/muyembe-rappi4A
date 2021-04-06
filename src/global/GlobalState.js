import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const GlobalState = (props) => {
    const [ token, setToken ] = useState("");
    const [ restaurants, setRestaurants ] = useState([]);
    const [ cart, setCart ] = useState([]);

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
            auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IktzczdtVGpweHNVZUFFNTMza1F4IiwibmFtZSI6IkFiYyIsImVtYWlsIjoiYXN0cm9kZXZAZnV0dXJlNC5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0wMCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJBYmMsIDEsIEFiYyAtIEFiYyIsImlhdCI6MTYxNzY2MTk0N30.Pf8LfLye3tKQejHj9tEAham3WGHHSfYprgFb78fA94Q"
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
