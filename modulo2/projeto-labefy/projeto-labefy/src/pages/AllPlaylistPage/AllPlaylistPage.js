import axios from 'axios'
import React from 'react'


export default class AllPlaylistPage extends React.Component {
    state = {
        playlist: []
    }

    pegarPlayList = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        
        const body = {
            result: {
                quantity: "number",
                list: [
                    {
                        id: "string",
                        name: "string",
                    }
                ]
            }

        }
        axios.get(url, body, {
            headers: {
                Authorization: "rafael-barbosa-ailton"
            }
        })
        .then ((res) => {
            this.setState({playlist:res.data})
        })
        .catch ((err) => {
            alert("Ocorreu um erro, tente novamente!")
        })
    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId`
        axios.delete (url, {
            headers: {
                Authorization: "rafael-barbosa-ailton"
            }
        })
    }
    render () {
        return (
            <div>
                AllPlaylistPage 
            </div>
        )
    }
}