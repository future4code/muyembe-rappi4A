import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToRestaurantListPage, goToSignUpPage } from '../../routes/Coordinator';

const LoginPage = () => {
  const history = useHistory();
  return (
    <>
      <p>TELA DE LOGIN</p>
      <button onClick={() => goToSignUpPage(history)}> Ainda não tem login? Faça seu cadastro! </button>
      <button onClick={() => goToRestaurantListPage(history)}> Ir para página inicial </button>
    </>
  );
}

export default LoginPage;