import express, {Express} from 'express'
import cors from 'cors'
import dotenv from "dotenv";
import knex from 'knex';

const app: Express = express();

app.use(express.json());
app.use(cors());

dotenv.config();

// estabelecer a conexão com o banco no index.ts:

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
  }
});


import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});