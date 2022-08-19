// no index.ts:

import express, { Express } from "express";
import cors from "cors";


const app: Express = express();
app.use(express.json());
app.use(cors());

type User = {
    nome: string,
    cpf: string,
    nascimento: string,
    balance: number
}

type transacao = {
    valor: number,
    data: number,
    descricao: string
}


let users: User[] = [
     {    
    nome: "Rafael",
    cpf: "47858736195",
    nascimento: "14/12/1991",
    balance: 100
},
{
    nome: "Kézia",
    cpf: "54947836195",
    nascimento: "12/10/1993" ,
    balance: 130
}
]

app.get("/users", (req, res) => {
    let errorCode: number = 400
    try{
        const cpf: string = req.query.cpf as string;
        const user: User | undefined = users.find((user) => user.cpf === cpf);
        if(!user) {
            throw new Error("usuário não encontrado");
        }
        res.status(200).send(user);;
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message})
    }
})

app.post("/user", (req, res) => {
    let errorCode: number = 400
        try {
            const {nome, cpf, nascimento, balance} = req.body;

            if (!nome || !cpf || !nascimento || !balance) {
                errorCode = 422;
                throw new Error ("Por favor, cheque os dados");
            }

            const newUser: User = {
                nome,
                cpf,
                nascimento,
                balance
            }
            users.push(newUser)

            res.status(201).send({ message: "Usuário criado com sucesso!"})
        } catch (error: any) {
            res.status(errorCode).send({ message: error.message})
        }
})

app.put("/user/:cpf", (req, res) => {
    let errorCode: number = 400
        try {
            const {cpf} = req.params
            const {balance, nome} = req.body;

            if (!balance && !nome) {
                errorCode = 422;
                throw new Error ("Por favor, cheque os dados");
            } else if (typeof balance !== "number" || typeof nome !=="string") {
                res.statusCode = 422
                throw new Error("O valor precisa ser um NUMBER")
            } else if (balance <= 0) {
                res.statusCode = 422
                throw new Error("O saldo tem que ser maior que 0")
            }

            const productIndex = users.findIndex(User => User.cpf == (cpf))

            if (productIndex < 0) {
                res.statusCode = 404
                throw new Error("Product not found")
            }
    
            if (!balance) {
                users[productIndex].nome = nome
                res.status(200).send(users)if (!balance) {
                users[productIndex].nome = nome
                res.status(200).send(users)
            } else if (!nome) {
                users[productIndex].balance = balance
                res.status(200).send(users)
            } else {
                users[productIndex].balance = balance
                users[productIndex].nome = nome
                res.status(200).send(users)
            }


            res.status(201).send({ message: "Dados atualizados com sucesso!"})
       } } catch (error: any) {
            res.status(errorCode).send({ message: error.message})
        }
})

const server = app.listen(3003, () => {
       console.log(`Server is running in http://localhost:3003`);
});