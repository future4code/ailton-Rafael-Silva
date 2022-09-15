import { Request, Response } from "express"
import {connection} from "../data/connection"
import { users } from "../types"


export async function getAllUsers (req: Request, res: Response): Promise<void> {
   try {
      const result = await connection("aula48_exercicio")

      const users = result.map(toUsers)

      res.status(200).send(users)
   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

const toUsers = (input:any): users => {
   return {
      id:input.id,
      name: input.name,
      email: input.email,
      type: input.type,  

   }
}
