import axios from "axios";
import { UsuarioType } from "../screens/Cadastro";
import jwt_decode from "jwt-decode";
import { UserType } from "../screens/Login";
import { EnderecoType } from "../screens/Enderecos";

const api = axios.create({
    baseURL: 'https://api-cdelivery.herokuapp.com',
});

export function buscaListaProdutos () {
    const url = `produto`;

    return api.get(url);
}

export function buscaNaveEspecifica (index: string) {
    const url = `produto/${index}/`;

    return api.get(url);
}



export async function Cadastrar (usuario: UsuarioType) {
    const url = `/cliente`;
    const response = await api.post(`/cliente`, usuario);
    //handleSetToken(response.headers.authorization);
    return response;
}

export async function CadastrarEndereco (endereco: EnderecoType) {
    const response = await api.post(`/endereco`, endereco);
    return response;
}

export async function Logar (usuario: UserType) {
    
    const response = await api.post(`/login`, usuario);
    const decoded = jwt_decode(response.headers.authorization);
    console.log(decoded);
    
    //handleSetToken(response.headers.authorization);
    return response;
}

