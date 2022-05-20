
console.log('Boas vindas ao jogo de Blackjack!')

let blackJack = confirm("Quer iniciar uma nova rodada?")

let computador = []
let usuario = []


const black21 = () => {
   if (blackJack == true) {
      for (let i = 0; i < 2; i++) {
         usuario.push(comprarCarta())
         computador.push(comprarCarta())
      }
      let compSoma = computador[0].valor + computador[1].valor
      let usuarioSoma = usuario[0].valor + usuario[1].valor
      console.log(`As cartas do Computador são ${computador[0].texto} e ${computador[1].texto} e a pontuação é ${compSoma}`)
      console.log(`As cartas do Usuário são ${usuario[0].texto} e ${usuario[1].texto} e a pontuação é ${usuarioSoma}`)
      if (compSoma > usuarioSoma) {
         console.log(`O Computador ganhou!`)
      } else if (usuarioSoma > compSoma) {
         console.log(`O Usúario ganhou!`)
      } else {
         console.log(`Empate!`)
      }
   } else {  
      console.log(`O jogo acabou!`)
   }
}
black21()
    