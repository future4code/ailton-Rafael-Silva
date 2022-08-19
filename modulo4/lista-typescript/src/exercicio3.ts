enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}


const filmesTorrent: filmes = {
     Entradas: "Duna", 
     Lancamento: 2021, 
     genero: GENERO.ACAO, 
     pontuacao: 74
    }
    
type filmes = {
        Entradas: string,
        Lancamento: number,
        genero: GENERO.ACAO,
        pontuacao?: number
     }


console.table(filmesTorrent)
