import styled from 'styled-components'
import { Button, OutlinedInput } from '@material-ui/core'
import { VisibilityOff } from '@material-ui/icons'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export const Linha = styled.hr`
    width: 100vw;
    margin: 30px 0 -65px -10px;
`

export const ArrowBack = styled(ChevronLeftIcon)`
    position: absolute;
    top: 10px;
    left: 10px;
`

export const BotaoOlhoConfirma = styled.button`
    position: absolute;
    top: 32.5rem;
    right: 3.125rem;
    width: 0.313rem;
    cursor: pointer;
    border: none;
    background-color: transparent;
    margin-top:0.875rem;

    @media screen and (min-width: 700px) {
        right: 6.25rem;
    }   
`

export const BotaoOlho = styled.button`
    position: absolute;
    top: 27.5rem;
    right: 3.125rem;
    width: 0.313rem;
    cursor: pointer;
    border: none;
    background-color: transparent;
    margin-top:0.875rem;

    @media screen and (min-width: 700px) {
        right: 6.25rem;
    }   
`

export const ContainerLoginPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
    color: #000000;
`

export const EmailInput = styled.input`
    width: 70vw;
    padding: 1.188rem 3rem 1.188rem 1rem;
    font-size: 1rem;
    margin-left: 0.75rem;
    margin-bottom: 1rem;
`

export const PasswordInput = styled.input`
    width: 70vw;
    padding: 1.188rem 3rem 1.188rem 1rem;
    margin-left: 0.75rem;
    font-size: 1rem;
    margin-bottom: 1.25rem;
`

export const LoginButton = styled.button`
    margin: 0.938rem 0;
    background-color: #e86e5a;
    width: 90vw;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    margin-bottom: 1.25rem;
    border: none;
    border-radius: 0.313rem;
`

export const InputPassword = styled(OutlinedInput)`
    width: 90vw;
`

export const RegisterButton = styled(Button)`
    font-size: 0.75rem;
    font-weight: bold;
`



export const OlhoFechado = styled(VisibilityOff)`
    color: gray;
`

export const NaoPossuiCadastroButton = styled.button`
    margin-top: 1.3rem;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 1rem;
`