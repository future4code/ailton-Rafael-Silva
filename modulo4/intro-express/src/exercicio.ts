import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })

type Playstation = {
    jogo: string,
    genero: string,
    ano: number
}

type Ps5 = {
    nome: string,
    jogos: Playstation[]
}

const games:Ps5[] = [
    {
        nome: "jogos",
        jogos: [
            {
                jogo: "god of war",
                genero: "RPG",
                ano: 2018
            },
            {
                jogo: "the last of us",
                genero: "ação",
                ano: 2022
            }
        ]

    }
]

app.get("/retornaJogos", (req, res) => {
    res.send(games)
})

app.get("/retornaJogos/:nome",(req, res) => {
    const nome = req.params.nome

    
    const acharjogos = games.filter((games) =>{
        return games.nome === nome
    })
    res.send(acharjogos)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});