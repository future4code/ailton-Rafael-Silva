export type GoodGames = {
    nome: string
    jogos: Jogos[]
}

export type Jogos = {
    id: number,
    jogo: string,
    genero: string,
    preco: number,
}

export type editarGoodGames = {
    jogo: string
}


export const games: GoodGames[] = [
    {
        nome: "jogos PS5",
        jogos: [
            {   
                id: 121,
                jogo: "god of war",
                genero: "RPG",
                preco: 350
            },
            {   
                id: 44,
                jogo: "the last of us",
                genero: "ação",
                preco: 300
            },
            {   
                id: 163232,
                jogo: "Horizon",
                genero: "ação",
                preco: 285
            }
        ]
    }
];