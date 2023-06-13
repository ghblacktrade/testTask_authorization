import $api from "../axios/main"
import {AxiosResponse} from 'axios'
import {AuthResponse} from "./AuthResponse";
import {response} from "express";

// add promise with generic authResponse
export default class Auth {

    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {

        return $api.post('/login', {email, password})

    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {

        return $api.post('/registration', {email, password})

    }

    static async logout(email: string, password: string): Promise<void> {

        return $api.post('/logout')

    }

}


