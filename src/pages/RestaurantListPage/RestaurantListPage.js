import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CategoriesFoods from '../../components/CategoriesFoods/CategoriesFoods';
import SearchRestaurant from '../../components/SearchRestaurant/SearchRestaurant';
import GlobalStateContext from '../../global/GlobalStateContext';
import useProtectedPages from '../../hooks/useProtectedPages';
import { goToCartPage, goToProfilePage } from '../../routes/Coordinator';
import { TitlePageRestaurantsList, ContainerTitle, ContainerIconBack } from './styled'
import CircularProgress  from '@material-ui/core/CircularProgress'
import CardRestaurant from '../../components/CardRestaurant/CardRestaurant';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const RestaurantListPage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);

  const history = useHistory();
  useProtectedPages()

  useEffect(() => {
    requests.getRestaurants();
  }, []);

  useEffect(() => {
    if(states.restaurants.length > 0 ) {
      requests.getCategories()
    }
  }, [states.restaurants]);

  useEffect(() => {
    requests.filterRestaurantsByCategory()
  }, [states.categorySelected, states.restaurants]);

  const onClickIconBack = () => {
    setters.setIsListPageRestaurants(true)
    history.goBack()
  }
  
  return (
    <>
      <ContainerTitle>
        {(states.isListPageRestaurants === false) && 
          <ContainerIconBack>
            <ArrowBackIosIcon onClick={onClickIconBack} /> 
          </ContainerIconBack>
        }
        <TitlePageRestaurantsList>{states.isListPageRestaurants ? "Rappi4" : "Busca" }</TitlePageRestaurantsList>
      </ContainerTitle>
      <SearchRestaurant />
      {states.isListPageRestaurants && <CategoriesFoods /> }
      <CardRestaurant /> 
      
      {/* <button onClick={() => goToCartPage(history)}> Ir para carrinho </button>
      <button onClick={() => goToProfilePage(history)}> Ir para o perfil de usuário </button> */}
    </>
  );
}
export default RestaurantListPage;