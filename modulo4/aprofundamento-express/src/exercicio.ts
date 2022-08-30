import express from "express";
import { AddressInfo } from "net";
import {deveres,Afazeres} from "./deveres";


const app = express();
app.use(express.json());

///////////////////////////////////////////////////

app.get("/retornaDeveres", (req, res) => {
    res.send(deveres)
})

// app.get("/retornaDeveres/:titles", (req,res) => {
//     const titles = req.params.titles

//     const acharDeveres: Afazeres[] = deveres.filter((deveres) => {
//         return deveres.titles.includes(titles)
//     })
//     res.send(acharDeveres)
// })

// app.post("/retornaDeveres/:attDever", (req, res) => {
//     const attDever = req.params.attDever
//     const addDever = req.body

//     const acharDever: Afazeres[] = deveres.filter((deveres) => {
//         return deveres.dever.includes(attDever)
//     })

//     acharDever[0].titles.push(addDever)

//     res.status(201).send({Mensagem:"Afazer Adicionada com sucesso"})
// })

app.post("/retornaDeveres", (req, res) => {
    const {dever} = req.body

    const novosDeveres:Afazeres = {
        dever,
        titles: []
    }
    deveres.push(novosDeveres)
    console.log(deveres)
    
})

app.delete("/apagarAfazer/:dever", (req, res) => {
    const dever = req.params.dever

    const deleteAfazer: Afazeres[] = deveres.filter((deveres) => {
        return deveres.dever !== dever
    })

    res.send(deleteAfazer)
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;