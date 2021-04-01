import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToLoginPage, goToRestaurantListPage } from '../../routes/Coordinator';

const SignUpPage = () => {
  const history = useHistory();

  return (
    <>
      <p>TELA DE CADASTRO</p>
      <button onClick={() => goToLoginPage(history)}> Já tem cadastro? Faça login! </button>
      <button onClick={() => goToRestaurantListPage(history)}> Ir para página inicial </button>
    </>
  );
}

export default SignUpPage;