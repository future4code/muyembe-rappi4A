import React from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPages from '../../hooks/useProtectedPages';
import {
  goToEditAddressPage,
  goToEditDataPage,
  goToHistoryPage,
  goToRestaurantListPage
} from '../../routes/Coordinator';

const ProfilePage = () => {
  useProtectedPages()
  const history = useHistory();

  return (
    <>
      <p>TELA DE PERFIL DE USUÁRIO</p>
      <button onClick={() => goToHistoryPage(history)}> Ir para histórico de pedidos </button>
      <button onClick={() => goToEditDataPage(history)}> Ir para edição de dados </button>
      <button onClick={() => goToEditAddressPage(history)}> Ir para edição de endereço </button>
      <button onClick={() => goToRestaurantListPage(history)}> Ir para página inicial </button>
    </>
  );
}

export default ProfilePage;