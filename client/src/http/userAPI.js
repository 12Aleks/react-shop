import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode' //raszyfrowka tokena

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    return jwt_decode(data.token)//raszyfrowka tokena
}

export const login = async (email, password) => {
    const {data}  = await $host.post('api/user/login', {email, password})
    return jwt_decode(data.token)//raszyfrowka tokena
}

export const check = async () => {
    const response = await $authHost.get('api/user/auth')
    return response
}