
enum Role {
    ADMIN = "admin"
}

type tipo = {
    name: string,
    email: string,
    role: string
}

let usuariosTorrent: tipo [] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

    const result = usuariosTorrent.filter((item) =>{
        return item.role === 'admin';
    })
    result.map((item)=>{
		return item.email == 'admin'
	})

	console.table(result)
