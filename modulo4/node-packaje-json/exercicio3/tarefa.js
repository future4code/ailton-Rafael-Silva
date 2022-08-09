import {tarefas} from "../tarefas.js"

tarefas.push(process.argv[3])

console.table(tarefas)