//EXERCICIO 1

// let minhaString: string 
// minhaString ="br"

// let meuNumero: number | string
// meuNumero = 10


type UserInfo = Pessoa

type Pessoa = {
    name: string,
    idade: number,
    corFavorita: string
}

type Pessoa2 = {
    name: string,
    idade: number,
    corFavorita: string
}

type Pessoa3 = {
    name: string,
    idade: number,
    corFavorita: string
}

type Pessoa4 = {
    name: string,
    idade: number,
    corFavorita: string
}

enum Cor {
    COR1 = "vermelho",
    COR2 = "verde"
}

const pessoaCadastro: UserInfo={
    name: "Rafael",
    idade: 30,
    corFavorita: Cor.COR1
}

const userInfoArray: UserInfo[] = [] ;

userInfoArray.push(pessoaCadastro)

console.log(userInfoArray)

//EXERCICIO 2



// EXERCICIO 3

