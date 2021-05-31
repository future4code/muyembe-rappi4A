import React from 'react';
import emoji from '../../img/emoji.png'
import erroFeliz from '../../img/erro_feliz.png'
import { 
        Emoji, 
        Container, 
        Enfeite, 
        Enfeite2,
        Mensagem, 
        Mensagem1, 
        Mensagem2, 
        BackButton, 
        Enfeite3, 
        Enfeite4, 
        Enfeite5, 
        ImgErroFeliz
      } from './styled'
import useProtectedPages from '../../hooks/useProtectedPages';
import { goToRestaurantListPage } from '../../routes/Coordinator';
import { useHistory } from 'react-router';

const ErrorPage = () => {
  useProtectedPages()
  const history = useHistory()
  return (
    <Container>
      <Enfeite></Enfeite>
      <Emoji src={emoji} />
      <Enfeite2></Enfeite2>
      <></>
      <Mensagem>Ops,</Mensagem>
      <Mensagem1>Página não encontrada</Mensagem1>
      <Mensagem2>Para voltar a navegar</Mensagem2>
      <BackButton onClick={()=>goToRestaurantListPage(history)}>Clique aqui</BackButton>
      <Enfeite3 />
      <ImgErroFeliz src={erroFeliz}/>
      <Enfeite4></Enfeite4>
      <Enfeite5></Enfeite5>
    </Container>
  );
}

export default ErrorPage;