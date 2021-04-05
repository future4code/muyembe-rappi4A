import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const GlobalState = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = () => {
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  };

  // const getProducts = async () => {
  //   const response = await axios.get(`${BASE_URL}/products`);
  //   console.log("resposta", response);
  // };

  const states = { products, cart };
  const setters = { setProducts, setCart };
  const requests = { getProducts };

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
