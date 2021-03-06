import React from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPages from '../../hooks/useProtectedPages';
import { goToProfilePage, goToRestaurantListPage } from '../../routes/Coordinator';
import { ContainerHistory } from './styled'

const HistoryPage = () => {
  useProtectedPages()
  const history = useHistory();

  return (
    <ContainerHistory>
      <p>TELA DE HISTÓRICO DE PEDIDOS</p>
      <button onClick={() => goToProfilePage(history)}> Ir para perfil de usuário </button>
      <button onClick={() => goToRestaurantListPage(history)}> Ir para página inicial </button>
    </ContainerHistory>
  );
}

export default HistoryPage;