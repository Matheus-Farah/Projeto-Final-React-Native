import axios from "axios";
import { UsuarioType } from "../screens/Cadastro";
import jwt_decode from "jwt-decode";
import { UserType } from "../screens/Login";

const api = axios.create({
    baseURL: 'https://swapi.dev/api/',
});

export function buscaNaves () {
    const url = `starships`;

    return api.get(url);
}

export function buscaNaveEspecifica (index: string) {
    const url = `starships/${index}/`;

    return api.get(url);
}



export async function Cadastro (usuario: UsuarioType) {
    const url = `cliente`;
    const response = await api.post(`cliente`, usuario);
    const decoded = jwt_decode(response.headers.authorization);
    //handleSetToken(response.headers.authorization);
    return response;
}

export async function Logar (usuario: UserType) {
    
    const response = await api.post(`login`, usuario);
    const decoded = jwt_decode(response.headers.authorization);
    console.log(decoded);
    
    //handleSetToken(response.headers.authorization);
    return response;
}

