import { HashManager } from './../services/HashManager';
import { ISignupInputDTO, User, USER_ROLES, ILoginInputDTO } from './../models/User';
import { UserDatabase } from "../database/UserDatabase"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signup = async(input: ISignupInputDTO) => {
        const { name, email, password} = input

        if(typeof name !=="string"){
            throw new Error("Parametro name inválido")
        }

        if(typeof email !=="string"){
            throw new Error("Parametro email inválido")
        }

        if(typeof password !=="string"){
            throw new Error("Parametro password inválido")
        }

        if(name.length < 3) {
            throw new Error ("Parameter invalid, this name for minim 3 caracters")
        }

        if (password.length < 6){
            throw new Error ("Parametro invalido, a senha deve ter no minimo 6 caracteres")
        }

        if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i)){
            throw new Error ("Email no formato invalido")
        }

        const isEmailAlredyExist = await this.userDatabase.findByEmail(email)

        if (isEmailAlredyExist){
            throw new Error("Email já cadastrado")
        }

        const id = this.idGenerator.generate()
        const hashManager = await this.hashManager.hash(password)

        const user = new User(id, name, email, password, USER_ROLES.NORMAL)

        await this.userDatabase.createUser(user)

        const payload:ITokenPayload ={
            id: user.getId(),
            role:user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: `Usuario " ${user.getName()}" cadstrado com sucesso`
        }

        return response
    }

    public login = async (input: ILoginInputDTO) => {
        const {email, password} = input

        if(typeof email !=="string"){
            throw new Error("Parametro email inválido")
        }

        if(typeof password !=="string"){
            throw new Error("Parametro password inválido")
        }

        if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i)){
            throw new Error ("Email no formato invalido")
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if (!userDB){
            throw new Error("Email não está cadastrado")
        }

        const user = new User(userDB.id,userDB.name,userDB.email,userDB.password,userDB.role)

         const isPasswordCorrect = await this.hashManager.compare(password,user.getPassword())
        
         if(!isPasswordCorrect){
            throw new Error("Password incorreto")
         }

        const payload:ITokenPayload ={
            id: user.getId(),
            role:user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response: ISignupOutputDTO = {
            message: `Usuario " ${user.getName()}" logado com sucesso`,
            token
        }

        return response
    }

}