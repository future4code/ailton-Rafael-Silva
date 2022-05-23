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
// function retornaObjetoEntreDoisNumeros(num1, num2) {
//    if (num1 > num2) {
//        return maiorNumero
//    } else{

//    }
// }

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

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
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {...pessoa,
    nome: "ANÔNIMO"
   }
}

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