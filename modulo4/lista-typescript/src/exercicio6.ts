type deficit = {
	cliente: string,
	
	debitos: number [],
	saldoTotal: number 
}

// entrad

let clientesBancarios: deficit [] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

let total = clientesBancarios.reduce(getTotal, 0)
 function getTotal(total: any, item: any) {
    return total + (item. saldoTotal - item.debitos)
 }

console.table(total)

