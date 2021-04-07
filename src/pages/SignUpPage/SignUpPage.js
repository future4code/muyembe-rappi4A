import React from 'react';
import { useHistory } from 'react-router-dom';
import useUnProtectedPages from '../../hooks/useUnProtectedPage';
import { goToLoginPage, goToRestaurantListPage } from '../../routes/Coordinator';
import Header from '../../components/ComponentLogo/ComponentLogo'

const SignUpPage = () => {
  useUnProtectedPages()
  const history = useHistory();

  return (
    <>
      <Header />
      <p>TELA DE CADASTRO</p>
      <button onClick={() => goToLoginPage(history)}> Já tem cadastro? Faça login! </button>
      <button onClick={() => goToRestaurantListPage(history)}> Ir para página inicial </button>
    </>
  );
}

export default SignUpPage;