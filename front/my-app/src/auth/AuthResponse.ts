import {IUser} from "./user.interface";

export interface AuthResponse {

    access_token: string
    refresh_token: string
    user: IUser
}