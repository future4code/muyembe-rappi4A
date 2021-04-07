import styled from 'styled-components'
import { Button, OutlinedInput } from '@material-ui/core'

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
    padding: 19px 48px 19px 16px;
    font-size: 16px;
    margin-left: 12px;
    margin-bottom: 16px;
`

export const PasswordInput = styled.input`
    width: 70vw;
    padding: 19px 48px 19px 16px;
    margin-left: 12px;
    font-size: 16px;
    margin-bottom: 20px;
`

export const LoginButton = styled.button`
    margin: 15px 0;
    background-color: #e86e5a;
    width: 90vw;
    padding: 12px 16px;
    font-size: 16px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
`

export const InputPassword = styled(OutlinedInput)`
    width: 90vw;
`

export const RegisterButton = styled(Button)`
    font-size: 12px;
    font-weight: bold;
`