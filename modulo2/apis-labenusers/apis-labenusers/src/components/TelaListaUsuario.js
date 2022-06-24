import React, { useDeferredValue } from "react";
import axios from 'axios'
import styled from 'styled-components'

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 150px;
    display: flex;
    justify-content: space-between;
`

export default class TelaListaUsuario extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        axios.get(url, {
            headers: {
                Authorization: "rafael-barbosa-ailton"
            }
        })
        .then ((res) => {
            this.setState({usuarios:res.data})
        })
        .catch ((err) => {
            alert("Ocorreu um erro, tente novamente!")
         })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "rafael-barbosa-ailton"
            }
        })
        .then((res) =>{
            alert("Usuario deletado com sucesso!")
            this.pegarUsuarios()
        })
        .catch((err) => {
            alert ("Ocorreu um erro, tente novamente")
        })
    }

    render () {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>Apagar</button>
                </CardUsuario>
        })


        return (
            <div>
        <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
            <h2>Lista de usuarios</h2>
            {listaUsuarios}
            </div>
        )
    }
}