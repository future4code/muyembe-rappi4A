import React from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPages from '../../hooks/useProtectedPages';
import { goToRestaurantListPage } from '../../routes/Coordinator';

const RestaurantPage = () => {
  useProtectedPages()
  const history = useHistory();

  return (
    <>
      <p>TELA DE PÁGINA DE RESTAURANTE</p>
      <button onClick={() => goToRestaurantListPage(history)}> Ir para página inicial </button>
    </>
  );
}

export default RestaurantPage;