import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToRestaurantListPage } from '../../routes/Coordinator';
import { BASE_URL } from '../../constants/urls'
import { LoginButton, BotaoOlho, OlhoFechado} from './styled'
import useForm from '../../hooks/useForm'
import { TextField } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import CircularProgress  from '@material-ui/core/CircularProgress'

const LoginForm = () => {
    const [form, onChange] = useForm({ email: "", password: "" })
    const [viewPassword, setViewPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        login(setIsLoading)
    }

    const login = (setIsLoading) => {
        setIsLoading(true)
        axios
            .post(`${BASE_URL}login`, form)
            .then((resp) => {
                localStorage.setItem("token", resp.data.token)
                setIsLoading(false)
                goToRestaurantListPage(history)
            })
            .catch((err) => {
                setIsLoading(false)
                console.log(err.response.data)
                alert(err.response.data.message)
            })

    }

    const handleClickShowPassword = () => {
        setViewPassword(!viewPassword);
    }
    
    return (
        <form onSubmit={onSubmitForm}>
            <TextField
                required
                label="Size"
                id="outlined-size-normal"
                variant="outlined"
                type="email"
                name={"email"}
                value={form.email}
                onChange={onChange}
                label={"E-mail"}
                placeholder="email@email.com"
                fullWidth
                margin={"normal"}
            />
            <TextField
                required
                id="outlined-adornment-password"
                variant="outlined"
                type={viewPassword ? 'text' : 'password'}
                name={"password"}
                value={form.password}
                onChange={onChange}
                label={"Senha"}
                placeholder={"Minimo 6 caracteres"}
                fullWidth
                margin={"normal"}     
            />
    

            <BotaoOlho onClick={handleClickShowPassword} type="button">
                {viewPassword ? <Visibility /> : <OlhoFechado />}
            </BotaoOlho>
            
            <LoginButton 
                variant="contained" 
                color="primary" 
                fullWidth
                type="submit"
            > {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Entrar</>}
            </LoginButton>
        </form>
    )
}

export default LoginForm