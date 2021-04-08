import React from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPages from '../../hooks/useProtectedPages';
import { goToRestaurantListPage } from '../../routes/Coordinator';

const CartPage = () => {
  useProtectedPages()
  const history = useHistory();

  return (
    <>
      <p>TELA DE CARRINHO</p>
      <button onClick={() => goToRestaurantListPage(history)}> Ir para página inicial </button>
    </>
  );
}

export default CartPage;