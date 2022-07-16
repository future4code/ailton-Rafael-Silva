import React from 'react'
import useForm from "../../Hook/useForm"
import { login } from "../../components/solicita"
import useUnprotectedPage from '../../Hook/useUnprotectedPage'
import { Container, Botoes } from "./styled"
import { useHistory } from 'react-router-dom'
import { goToHomePage } from '../../routes/coordenadas'

const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()
    const {form, onChange} = useForm({email: "", password: ""})

    const onClickLogin = (event) => {
        event.preventDefault()
        login(form, history)

        
    }

    return ( 
        <div>   
        <Container> 
                <h2>Login</h2>
                <form onSubmit={onClickLogin}>
            <input 
            placeholder={"E-mail"}
            type={"email"}
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
            />
            <input 
            placeholder={"Senha"}
            type={"password"}
            name={"password"}
            value={form.password}
            onChange={onChange}
            required
            pattern={"^.{5,}"}
            title={"Sua senha deve ter no mínimo 5 caracteres"}
            />
            <Botoes>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button type={"submit"}>Entrar</button>
            </Botoes>
            </form>
        </Container>
        </div>              
    )
}

export default LoginPage
