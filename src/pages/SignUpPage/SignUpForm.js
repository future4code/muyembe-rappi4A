import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { useHistory } from 'react-router-dom'
import useUnProtectedPages from '../../hooks/useUnProtectedPage';
import { LoginButton, BotaoOlho, OlhoFechado, BotaoOlhoConfirma} from './styled'
import useForm from '../../hooks/useForm'
import { TextField } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';

const SignUpPage = () => {
    useUnProtectedPages()
    const [form, onChange] = useForm({ name: "", email: "", cpf:"", password: "" })
    const [viewPassword, setViewPassword] = useState(false)
    const [confirm, setConfirm] = useState("")
    const [viewConfirmPassword, setViewConfirmPassword] = useState(false)
    const history = useHistory()

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        if(form.password === confirm){
            console.log("realizar cadastro")
            // cadastrar()
        }else{
            alert("as senhas não correspondem")
        }
    }

    // const cadastrar = () => {
    //     axios
    //         .post(`${BASE_URL}signup`, form)
    //         .then((resp) => {
    //             console.log(resp)
    //         })
    //         .catch((err) => {
    //             console.log(err.response.data)
    //             alert(err.response.data.message)
    //         })

    // }

    const handleClickShowPassword = () => {
        setViewPassword(!viewPassword);
    }

    const handleClickShowConfirmPassword = () => {
        setViewConfirmPassword(!viewConfirmPassword)
    }

    const handleConfirmPassword = (event) => {
        setConfirm(event.target.value)
    }
    
    return (
        <>
        
        <form onSubmit={onSubmitForm}>
        <TextField
                required
                label="Size"
                id="outlined-size-normal"
                variant="outlined"
                type="text"
                name={"nome"}
                value={form.nome}
                onChange={onChange}
                label={"Nome"}
                placeholder="Nome e sobrenome"
                fullWidth
                margin={"normal"}
            />
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
                label="Size"
                id="outlined-size-normal"
                variant="outlined"
                type="text"
                name={"cpf"}
                value={form.cpf}
                onChange={onChange}
                label={"CPF"}
                placeholder="000.000.000-00"
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
            <TextField
                required
                id="outlined-adornment-password"
                variant="outlined"
                type={viewConfirmPassword ? 'text' : 'password'}
                name={"confirm"}
                value={confirm}
                onChange={handleConfirmPassword}
                label={"Confirmar"}
                placeholder={"Confirme a senha anterior"}
                fullWidth
                margin={"normal"}     
            />
    

            <BotaoOlho onClick={handleClickShowPassword} type="button">
                {viewPassword ? <Visibility /> : <OlhoFechado />}
            </BotaoOlho>

            <BotaoOlhoConfirma onClick={handleClickShowConfirmPassword} type="button">
                {viewConfirmPassword ? <Visibility /> : <OlhoFechado />}
            </BotaoOlhoConfirma>
            
            <LoginButton 
                variant="contained" 
                color="primary" 
                fullWidth
                type="submit"
            >Criar
            </LoginButton>
        </form>
        </>
    )
}

export default SignUpPage