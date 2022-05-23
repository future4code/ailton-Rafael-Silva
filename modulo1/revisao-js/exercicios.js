// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
// const array = ["Banana", "Morango", "Abacaxi"]

// function retornaTamanhoArray(array) {
//   const quantidade = array.length
// return quantidade
// }

// EXERCÍCIO 02
// const array = [0,8,23,16,10,15,41,12,13]

// function retornaArrayInvertido(array) {
//       const quantidade = array.reverse()
//     return quantidade
//     } 


// EXERCÍCIO 03
// const array = [0,8,23,16,10,15,41,12,13]

// function retornaArrayOrdenado(array) {
//       const quantidade = array.sort((a,b) => a-b)
//     return quantidade
//     } 


// EXERCÍCIO 04
// const array = [0,8,23,16,10,15,41,12,13]

// function retornaNumerosPares(array) {
//     const par = x => x % 2 === 0
//      const pares = array.filter(par)
//     return pares
//  } 


// EXERCÍCIO 05

// function retornaNumerosParesElevadosADois(array) {
//     const novoArray = array.filter(item => item %2 === 0).map (item => item ** 2)
//     return novoArray
// }

// EXERCÍCIO 06

// function retornaMaiorNumero(array) {
//     let maior = -Infinity
//     for (let numero of array){
//     if(numero > maior) {
//         maior = numero       
//     }
// }   
//  return maior
// }

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
 let maiorNum = 0
 let maiorDivisivelPeloMenor = 0
 let difere = 0
 let objeto1 = {maiorNumero: 0,}
 let objeto2 = {maiorNumero: 0,}
 if (num1 > num2){
     maiorNum = num1
     maiorDivisivelPeloMenor = num1 % num2 === 0
     difere = num1 - num2
     objeto1.maiorNumero = maiorNum
     objeto1.maiorDivisivelPorMenor = maiorDivisivelPeloMenor,
     objeto1.diferenca = difere
        return objeto1
 } else{
     maiorNum = num2
     maiorDivisivelPeloMenor = num2 % num1 === 0
     difere = num2 - num1
     objeto2.maiorNumero = maiorNum
     objeto2.maiorDivisivelPorMenor = maiorDivisivelPeloMenor
     objeto2.diferenca = difere
        return objeto2
 }
}
// EXERCÍCIO 08
// function retornaNPrimeirosPares(n) {
//     let numerosPares = [];
//     for (let i = 0; numerosPares.length < n; i++) {
//         if (i % 2 == 0) {
//             numerosPares.push(i);
//         }
//     }
//     return numerosPares;
// }


// EXERCÍCIO 09
// function classificaTriangulo(ladoA, ladoB, ladoC) {
//         if (ladoA === ladoB && ladoA === ladoC){
//             return "Equilátero"
//         } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
//             return "Isósceles"
//         } else {
//             return "Escaleno"
//         }
// }


// EXERCÍCIO 10
// function retornaSegundoMaiorESegundoMenor(array) {
//   let primMaior = -Infinity
//   let segMaior = -Infinity
//   let primMenor = Infinity
//   let segMenor = Infinity

//   for (let number of array) {
//       if (number > primMaior) {
//           primMaior = number
//   } if (number < primMenor){
//       primMenor = number
//   }
// }
// for (let number of array){
//     if (number > segMaior && number !== primMaior) {
//         segMaior = number
//     } if (number < segMenor && number !== primMenor){
//         segMenor = number
//     }
// }
//     const resultado = [segMaior, segMenor]
//     return resultado
// }



// EXERCÍCIO 11


// function retornaChamadaDeFilme(filme) {
//     nome = 'O Diabo Veste Prada',
//     nomeano = 2006,
//     diretor = 'David Frankel',
//     nomeatores = ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']

//    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, 
// dirigido por ${filme.diretor} e estrelado por ${filme.nomeatores}.`
// }

// EXERCÍCIO 12
// function retornaPessoaAnonimizada(pessoa) {
//    return {...pessoa,
//     nome: "ANÔNIMO"
//    }
// }

// EXERCÍCIO 13A
// function retornaPessoasAutorizadas(pessoas) {
//     const pessoasAut = pessoas.filter((autorizo) => {
//         return autorizo.altura >= 1.5 && autorizo.idade >= 15 &&
//         autorizo.idade < 60
//     })
//    return pessoasAut
// }

// EXERCÍCIO 13B
// function retornaPessoasNaoAutorizadas(pessoas) {
//   const pessoasAut = pessoas.filter((itens) => {
//       return itens.idade <= 14 || itens.idade >= 60 || itens.altura < 1.5
//   })
//   return pessoasAut
// } 


// EXERCÍCIO 14
// function retornaContasComSaldoAtualizado(contas) {
// let comprinhas = contas.map((ObjCLiente) =>{
//     for (let compra of ObjCLiente.compras){
//         ObjCLiente.saldoTotal = ObjCLiente.saldoTotal - compra;
//     }
//     return {...ObjCLiente,
//     saldoTotal: ObjCLiente.saldoTotal,
//     compras: []
//     }
// })
// return comprinhas;
// }

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}