import express from "express";
import {games, GoodGames, Jogos} from "./jogos";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.get("/test", (req, res) => {
    res.send(games)
})

app.post("/test/:adicionaJogos", (request, response) => {
    try {
        const {nome} = request.body

        const novoJogo: GoodGames = {
            nome,
            jogos: []
        }
        games.push(novoJogo)

        response.send(games)
    } catch(error: any) {
        response.status(response.statusCode || 500) .send ({ message: error.message})
    }
})

app.get("/retornaJogos", (request, response) => {
    try {
        const {nome} = request.body

        if (!nome) {
            response.statusCode = 401
            throw new Error ("Ei , não pode mandar valores vazios")
        }

        const achouJogos: GoodGames[] = games.filter((games) => {
            return games.nome.includes(nome.toLowerCase())
        })
        
        if (!achouJogos.length) {
            response.statusCode = 404
            throw new Error(`Não foi possivel achar a playlist com o nome -> ${nome}`)
        }

        response.send(achouJogos)
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message})
    }
})

app.put("/alterarJogo/:nomeJogo", (request, response) => {
    try {
        const {jogo} = request.body
        const nomeJogo = request.params.nomeJogo

        type valoreBody = {
            jogo:  string
        }

        const objetoJogos: valoreBody = {
            jogo
        }

        if (!jogo) {
            throw new Error ("Ei , não pode mandar valores vazios")
        }

        const [acharJogos]: GoodGames[] = games.filter((play)=> {
            return play.nome.includes(nomeJogo)
        })

        const mudarJogos = acharJogos.jogos.map((jogo) => {
            if (jogo.jogo.includes(objetoJogos.jogo)) {
                return {
                    ...jogo,
                    jogo:objetoJogos.jogo
                }
            }
            return jogo
        })
        response.status(200).send(mudarJogos)

    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message})
    }
})




const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;