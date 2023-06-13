import {IUser} from "../auth/user.interface"
import {makeAutoObservable} from "mobx"
import Auth from "../auth/Auth"

export default class Store {

    user = {} as IUser
    isAuth = false

    constructor() {

        makeAutoObservable(this)
    }

    setAuth(bool:boolean) {

        this.isAuth = bool
    }

    setUser(user: IUser) {

        this.user = user
    }

    async login(email: string, password: string) {

            const response = await Auth.login(email, password)
            localStorage.setItem('token', response.data.access_token)

            this.setAuth(true)
            this.setUser(response.data.user)

    }

    async registration(email: string, password: string) {

            const response = await Auth.registration(email, password)
            localStorage.setItem('token', response.data.access_token)

            this.setAuth(true)
            this.setUser(response.data.user)

    }

    async logout() {

            const response = await Auth.logout()
            localStorage.removeItem('token')

            this.setAuth(false)
            this.setUser({} as IUser)

    }

}