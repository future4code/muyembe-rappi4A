import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalStateContext from '../../global/GlobalStateContext';
import { goToCartPage, goToProfilePage } from '../../routes/Coordinator';

const RestaurantListPage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);
  const history = useHistory();

  useEffect(() => {
    requests.getRestaurants();
  }, []);

  return (
    <>
      <p>TELA INICIAL DE LISTA DE RESTAURANTES/BUSCA</p>
      <button onClick={() => goToCartPage(history)}> Ir para carrinho </button>
      <button onClick={() => goToProfilePage(history)}> Ir para o perfil de usuário </button>
    </>
  );
}

export default RestaurantListPage;