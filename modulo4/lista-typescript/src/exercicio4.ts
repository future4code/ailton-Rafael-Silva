enum setores {
    marketing = "marketing",
    vendas = "vendas",
    financeiro = "financeiro"
}

const trabalhadores: tipos[] = [
	{ nome: "Marcos", salário: 2500, setor:setores.marketing, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: setores.vendas, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: setores.financeiro, presencial: true},
	{ nome: "João" ,salário: 2800, setor: setores.marketing, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: setores.financeiro, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: setores.vendas, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: setores.marketing, presencial: true }
]


type tipos= {
    nome: string,
    salário: number,
    setor: setores,
    presencial: boolean
}

    const trampo = trabalhadores.filter((item: any) =>{
        return item.presencial === true
    })
    console.table(trampo)


