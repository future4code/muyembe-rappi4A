import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToProfilePage, goToRestaurantListPage } from '../../routes/Coordinator';

const EditDataPage = () => {
  const history = useHistory();

  return (
    <>
      <p>TELA DE EDIÇÃO DE DADOS</p>
      <button onClick={() => goToProfilePage(history)}> Ir para perfil de usuário </button>
      <button onClick={() => goToRestaurantListPage(history)}> Ir para página inicial </button>
    </>
  );
}

export default EditDataPage;