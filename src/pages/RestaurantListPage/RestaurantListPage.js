import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CategoriesFoods from '../../components/CategoriesFoods/CategoriesFoods';
import SearchRestaurant from '../../components/SearchRestaurant/SearchRestaurant';
import GlobalStateContext from '../../global/GlobalStateContext';
import useProtectedPages from '../../hooks/useProtectedPages';
import { goToCartPage, goToProfilePage } from '../../routes/Coordinator';
import { TitlePageRestaurantsList, ContainerTitle } from './styled'
import CircularProgress  from '@material-ui/core/CircularProgress'
import CardRestaurant from '../../components/CardRestaurant/CardRestaurant';

const RestaurantListPage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);
  const [categories, setCategories ] = useState([])
  const history = useHistory();
  useProtectedPages()

  useEffect(() => {
    requests.getRestaurants();
  }, []);

  useEffect(() => {
    const arrayCategories = states.restaurants.map((restaurant) => {
      return restaurant.category
    })
    setCategories(arrayCategories)
  }, [states.restaurants]);

  // const filterRestaurantCategory =
  //   states.restaurants &&
  //   states.restaurants.filter((restaurant) => {
  //     if(states.categorySelected === restaurant.category) {
  //       return restaurant
  //     }
  //   })
  
  console.log("states.restaurants", states.restaurants)
  // console.log("filterRestaurantCategory", filterRestaurantCategory)
  return (
    <>
      <ContainerTitle>
        <TitlePageRestaurantsList>Rappi4</TitlePageRestaurantsList>
      </ContainerTitle>
      <SearchRestaurant />
      <CategoriesFoods 
        categories={categories} 
      />
      <CardRestaurant 
        // dataRestaurants={filterRestaurantCategory}
      />
      
      {/* <button onClick={() => goToCartPage(history)}> Ir para carrinho </button>
      <button onClick={() => goToProfilePage(history)}> Ir para o perfil de usuário </button> */}
    </>
  );
}
export default RestaurantListPage;