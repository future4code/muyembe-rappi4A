import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalStateContext from '../../global/GlobalStateContext';
import useProtectedPages from '../../hooks/useProtectedPages';
import { goToCartPage, goToProfilePage } from '../../routes/Coordinator';
import { TitlePageRestaurantsList, ContainerTitle } from './styled'

const RestaurantListPage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);
  const history = useHistory();
  useProtectedPages()

  useEffect(() => {
    requests.getRestaurants();
  }, []);

  console.log("states.restaurants", states.restaurants)
  return (
    <>
      <ContainerTitle>
        <TitlePageRestaurantsList>Rappi4</TitlePageRestaurantsList>
      </ContainerTitle>
      {/* <button onClick={() => goToCartPage(history)}> Ir para carrinho </button>
      <button onClick={() => goToProfilePage(history)}> Ir para o perfil de usuário </button> */}
    </>
  );
}
export default RestaurantListPage;