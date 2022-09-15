// no index.ts:
import { getAllUsers } from "./endpoints/getAllUsers"
import {app} from "./app"






app.get("/users", getAllUsers)

