import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToRestaurantListPage } from '../../routes/Coordinator';
import { BASE_URL } from '../../constants/urls'
import { EmailInput, PasswordInput, ContainerButton, InputPassword, LoginButton } from './styled'
import useForm from '../../hooks/useForm'
// import GlobalStateContext from '../../global/GlobalStateContext';

const LoginForm = () => {
    const [form, onChange] = useForm({ email: "", password: "" })
    // const [viewPassword, setViewPassword] = useState(false)
    const history = useHistory()

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        login()
    }

    const login = () => {
        axios
            .post(`${BASE_URL}login`, form)
            .then((resp) => {
                localStorage.setItem("token", resp.data.token)
                goToRestaurantListPage(history)
            })
            .catch((err) => {
                console.log(err.response.data)
                alert(err.response.data.message)
            })

    }

    // const handleClickShowPassword = () => {
    //     // mostra e esconde senha
    //     setViewPassword(!viewPassword)
    // }

    return (
        <form onSubmit={onSubmitForm}>
            <EmailInput
                required
                type="email"
                name={"email"}
                value={form.email}
                onChange={onChange}
                label={"E-mail"}
                placeholder="email@email.com"
            />
            <PasswordInput
                required
                type={'password'}
                // type={viewPassword ? 'text' : 'password'}
                name={"password"}
                value={form.password}
                onChange={onChange}
                label={"Senha"}
                placeholder="Minimo 6 caracteres"
            />

            <LoginButton
                type="submit"
                fullWidth
                variant={"contained"}
                color={"primary"}
                margin={"normal"}
            >Entrar</LoginButton>

        </form>
    )
}

export default LoginForm