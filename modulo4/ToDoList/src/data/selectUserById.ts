import { connection } from "./baseDataBase";
import {userData} from "../types/user";

export default async function selectUserById(id: string): Promise<userData | undefined> {

    const [result] = await connection('user_to_do_list')
        .select('id', 'nickname')
        .where({ id })

    const userData: UserData = {
        id: result.id,
        nickname: result.nickname
    }
}