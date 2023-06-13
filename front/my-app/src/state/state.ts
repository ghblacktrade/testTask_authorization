import {IUser} from "../auth/user.interface";
import {makeAutoObservable} from "mobx";
import Auth from "../auth/Auth";

export default class State {

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

        try {

            const response = await Auth.login(email, password)
            localStorage.setItem('token', response.data.access_token)
        } catch (err) {


        }
    }

}