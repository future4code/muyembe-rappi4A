import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToSignUpPage, goToLoginPage } from '../../routes/Coordinator';
import { ContainerLoginPage, ContainerForm, NaoPossuiCadastroButton, Linha, ArrowBack} from './styled'
import ComponentLogo from '../../components/ComponentLogo/ComponentLogo'
import useUnProtectedPages from '../../hooks/useUnProtectedPage';
import SignUpPage from './SignUpForm';

const LoginPage = () => {
  useUnProtectedPages()
  const history = useHistory()
  return (
    <ContainerLoginPage>
      <ArrowBack onClick={() => goToLoginPage(history)}/>
      <Linha/>
      <ComponentLogo />
      <h3>Cadastrar</h3>
      <ContainerForm >
        <SignUpPage />
      </ContainerForm>
    </ContainerLoginPage>
  )
}

export default LoginPage