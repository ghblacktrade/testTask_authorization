import {AxiosResponse} from "axios";
import $api from "../../axios/main";
import {IUser} from "../user.interface";

export default class UserService {

    static async login(email: string, password: string): Promise<AxiosResponse<IUser[]>> {

        return $api.get<IUser[]>('/users')

    }

}