//==========Exercícios de interpretação de código=========

// ======1========

// A) O que vai ser impresso no console?
// O nome, o apelido e a posicão do nome.

// ======2=======

// A) O que vai ser impresso no console?
// Ele vao imprimir apenas os nomes.

// ======3=======

// A) O que vai ser impresso no console?
// O Filter vai literalmente filtrar o nome escolhido,
// ou seja vai retirar o nome filtrado


//============ Exercícios de escrita de código=============

//===================1)=============
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const nomeDosDoguinhos = pets.map ((doguinhos) =>{
//     return doguinhos.nome
//  })
//  const nomeSalsisha = pets.map ((salsisha) =>{
//     return salsisha.raca === "Salsicha"
//  })
//  console.log(nomeDosDoguinhos, nomeSalsisha)

//  const nomeDoPudlle = pets.map ((item) =>{
//         return item.nome === "Poodle"      
//  })
// console.log (nomeDoPudlle(`Voce ganhou um cupom de desconto de 10% para tosar o/a ${item}`))

//===================2)=============

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  A)
// const nomeDosProdutos = produtos.map((item) =>{
//     return item.nome
// })
// console.log(nomeDosProdutos)
// B) 

// const nomeDosItens = produtos.map((item) =>{
//     return item.nome   
// })
//     const descontoDosProdutos = produtos.map((index) =>{
//     return index.preco * 0.95
// console.log(nomeDosItens, descontoDosProdutos)
// })

// C)
//  const catBebidas = produtos.filter ((beber) =>{
//     return beber.categoria === "Bebidas"
//  })
//  console.log(catBebidas)

// D)
//  const prodYpe = produtos.filter ((limpeza) =>{
//     return limpeza.nome.includes ("Ypê")
//  })
// console.log(prodYpe)  

//E) 

//  const prodYpe = produtos
//  .filter ((limpeza) =>{
//     return limpeza.nome.includes ("Ypê")
//  })
//  .map ((produtos) =>{
//      return `Compre ${produtos.nome} por ${produtos.preco}`
//  })

// ============== DESAFIOS ================
// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]

// const pok = pokemons.map ((item) =>{
//     return  item.nome
// }).sort ()
// console.log(pok)

//B) 
// const osTipos = pokemons.map((item) => item.tipo)
// const tipos = osTipos.filter((item, i) => osTipos.indexOf(item) === i)
// console.log(tipos)
