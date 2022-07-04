import axios from 'axios'
import React from 'react'

export default class CreatPlaylistPage extends React.Component {
    state = {
        nome: ''
    }
    criarListaDeMusica = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            name: " ",
        }

        axios.post(url, body, {
            headers: {
                Authorization: "rafael-barbosa-ailton"
            }
        })
        .then ((res) => {
            alert("Playlist cadastrada com Sucesso")
            this.setState({nome: ''})
        })
        .catch ((err) => {
            console(err.response.data)
        })
    }

    render () {
        return (
            <div>
                <h4>Cadastrar Playlist</h4>
                <input placeholder={'Playlist'}
                Value={this.state.nome}
                onChange={this.handleNome}
                />
                <button onClick={this.cadastrarPlaylist}>cadastrar</button>
            </div>
        )
    }
}