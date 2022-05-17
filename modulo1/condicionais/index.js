// Exercícios de interpretação de código

// 1)
// a) ele vai imprimir se passa ou nao no testo os numeros
// que dividem por 2 e sobra o resto da divisão 0.

// b) numeros divisiveis por 2 que da resto da divisão 0. exemplo: 2, 4, 6, 8...

// c) aqueles que não dividem por 2 que resta 0. exemplo: 3, 5, 7, 9...

// 2)
// a) Serve pra ver o valor da fruta.

// b) "O preço da fruta ", Maça, " é ", "R$ ", 2.25

// c) Iria valer o valor do break default, ou seja a fruta ia valer R$ 5

// 2)
// a) pede para o usuario digitar o primeiro numero.

// b) se fosse 10 seria: ("Esse número passou no teste")
// -10 seria undefined

// c) Teria! o if não teve o retorno de else caso fosse falso

// ===================Exercícios de escrita de código==========================

// ==1===

// let generoFilme = prompt("Qual o genero do filme?")
// let precoDoIngresso = prompt("O ingresso é abaixo de 15 reais?")

// const cinemaTop = (generoFilme, precoDoIngresso) => {
//     if(generoFilme === "fantasia" && precoDoIngresso < 15) {
//         console.log("Bom filme")
//     } else {
//         console.log("Escolha outro filme")
//     }

// }
// cinemaTop(generoFilme,precoDoIngresso)


// let idadeDoUsuario = Number(prompt("Qual a sua idade?"))

// let dirigirCarro = (idadeDoUsuario) => {
//   if (idadeDoUsuario > 18) {
//     console.log("Voce pode dirigir")
//   } else {
//     console.log("Voce nao pode dirigir")
//   }
// }

// dirigirCarro(idadeDoUsuario)

// ==2===

// Agora faça um programa que verifica que turno do dia um aluno estuda.
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco

// let turnoEstudo = prompt("que turno voce estuda? M (matutino), V (Vespertino) ou N (Noturno)")

// const podeEstudar = (turno) => {
//     if (turno === 'M') {
//         console.log("Bom dia")
//     } else if (turno === 'V') {
//         console.log("Boa tarde")
//     } else if (turno === 'N') {
//         console.log("Boa noite")
//     }
// }

// console.log(podeEstudar(turnoEstudo))

// ==3===

// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// let turnoEstudo = prompt("que turno voce estuda? M (matutino), V (Vespertino) ou N (Noturno)")

// let podeEstudar = (turno) => {
//     switch (turno) {
//         case 'M':
//             console.log('matutino')
//          break
//         case 'V':
//             console.log('vespertino')
//             break
//         case 'N':
//             console.log('noturno')
//             break
//     }

// }
// console.log(podeEstudar(turnoEstudo))

// ==4===

// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele
// for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual
// o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
//  então verifique se seu amigo ou amiga vai topar assistir o filme.
//  Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// let generoFilme = prompt("Qual o genero do filme?")
// let precoDoIngresso = prompt("O ingresso é abaixo de 15 reais?")

// const cinemaTop = (generoFilme, precoDoIngresso) => {
//     if(generoFilme === "fantasia" && precoDoIngresso < 15) {
//         console.log("Bom filme")
//     } else {
//         console.log("Escolha outro filme")
//     }

// }
// cinemaTop(generoFilme,precoDoIngresso)


//DESAFIOOOS
// Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", 
// pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc)
//  e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

// let generoFilme = prompt("Qual o genero do filme?")
// let precoDoIngresso = prompt("O ingresso é abaixo de 15 reais?")
// let lancheCinema = prompt ("qual lanchinho ele vai comprar?")

// const cinemaTop = (generoFilme, precoDoIngresso, lancheCinema) => {
//     if(generoFilme === "fantasia" && precoDoIngresso < 15 ) {
//         console.log("Bom filme")
//     } else if (lancheCinema === 'pipoca || pizza'){
//         console.log("Aproveite seu lanchinho []")
//     }   
//      else {
//         console.log("Escolha outro filme")
//     }

// }
// cinemaTop(generoFilme,precoDoIngresso, lancheCinema)



