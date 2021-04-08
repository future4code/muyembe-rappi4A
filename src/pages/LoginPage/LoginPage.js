import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToSignUpPage } from '../../routes/Coordinator';
import { Button } from '@material-ui/core'
import { ContainerLoginPage, ContainerForm, NaoPossuiCadastroButton} from './styled'
import LoginForm from './LoginForm';
import ComponentLogo from '../../components/ComponentLogo/ComponentLogo'
import useUnProtectedPages from '../../hooks/useUnProtectedPage';

const LoginPage = () => {
  useUnProtectedPages()
  const history = useHistory()
  return (
    <ContainerLoginPage>
      <ComponentLogo />
      <h3>Entrar</h3>
      <ContainerForm >
        <LoginForm />
        <NaoPossuiCadastroButton
          onClick={() => goToSignUpPage(history)}
          variant={"text"}
          >
          Não Possui Cadastro? Clique aqui.
        </NaoPossuiCadastroButton>
      </ContainerForm>
    </ContainerLoginPage>
  )
}

export default LoginPage