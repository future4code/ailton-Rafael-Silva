  //exercicio 1
function checaTriangulo(a:string, b:string, c:string) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  console.log (checaTriangulo (1, 2, 3))

  //exercicio 2


//   function imprimeTresCoresFavoritas() {
//     const cor1:string = ("Insira sua primeira cor favorita")
//     const cor2:string = ("Insira sua segunda cor favorita")
//     const cor3:string = ("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }

  //exercicio 3

// function checaAnoBissexto(ano) {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }

  //exercicio 4

// function comparaDoisNumeros(num1:number, num2:number):number {
//     let maiorNumero: number = 10;
//     let menorNumero: number = 5;
  
//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }
  
//     const diferenca = maiorNumero - menorNumero;
  
//     return diferenca 
//   }

  //exercicio 5

//   function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number ) {
//     let idade = anoAtual - anoNascimento
//     let tempoCarteira = anoAtual - anoEmissao
   
//      if(idade <= 20 ) {
//          return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
//       }else if(idade >= 20 || idade <= 50) {
//          return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
//       }else if(idade > 50) {
//          return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
//        }else {
//            return "error"
//        }
//    }

//    console.log(checaRenovacaoRG(30))
   