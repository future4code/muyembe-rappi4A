import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const GlobalState = (props) => {
  const [ restaurants, setRestaurants ] = useState([]);
  const [ cart, setCart ] = useState([]);
  const [categorySelected, setCategorySelected ] = useState("Árabe")
  const [ dataRestaurantsView, setDataRestaurantsView ] = useState([]);
  const [ categoriesRestaurants, setCategoriesRestaurants ] = useState([]);
  const [ isListPageRestaurants, setIsListPageRestaurants ] = useState(true)
  
  const token = localStorage.getItem("token")
  
  const getRestaurants = () => {
    const token = localStorage.getItem("token")
    axios
      .get(`${BASE_URL}restaurants`, {
        headers: {
            auth: token
        } 
      })
      .then((res) => setRestaurants(res.data.restaurants) )
      .catch((err) => console.log(err));
  };

  const getCategories = () => {
    const arrayCategories = restaurants.map((restaurant) => {
      return restaurant.category
    })
    setCategoriesRestaurants(arrayCategories)
  }

  const filterRestaurantsByCategory = () => {
    const dataRestaurant =
    states.restaurants.filter((restaurant) => {
      if(categorySelected === restaurant.category) {
        return restaurant
      }
    })
    setDataRestaurantsView(dataRestaurant)
  }


  const states = { restaurants, cart, categorySelected, dataRestaurantsView, categoriesRestaurants, isListPageRestaurants };
  const setters = { setRestaurants, setCart, setCategorySelected, setDataRestaurantsView, setCategoriesRestaurants, setIsListPageRestaurants };
  const requests = { getRestaurants, getCategories, filterRestaurantsByCategory };

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};


export default GlobalState;