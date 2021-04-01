import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToCartPage, goToProfilePage } from '../../routes/Coordinator';

const RestaurantListPage = () => {
  const history = useHistory();

  return (
    <>
      <p>TELA INICIAL DE LISTA DE RESTAURANTES/BUSCA</p>
      <button onClick={() => goToCartPage(history)}> Ir para carrinho </button>
      <button onClick={() => goToProfilePage(history)}> Ir para o perfil de usuário </button>
    </>
  );
}

export default RestaurantListPage;