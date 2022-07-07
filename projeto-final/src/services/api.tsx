import axios from "axios";
import { UsuarioType } from "../screens/Cadastro";
import jwt_decode from "jwt-decode";
import { UserType } from "../screens/Login";
import { EnderecoType } from "../screens/Enderecos";
import { useContext } from "react";
import { TokenContext } from "../context/TokenContext";

const api = axios.create({
    baseURL: 'https://api-cdelivery.herokuapp.com',
});

export function buscaListaProdutos () {
    const url = `produto`;

    return api.get(url);
}

export function buscaProdutoEspecifico (index: string) {
    const url = `produto/${index}/`;

    return api.get(url);
}

export async function buscaCliente (index: string) {
    const url = `cliente/${index}/`;
    const response = await api.get(url)
    return response;
}



export async function Cadastrar (usuario: UsuarioType) {
    const url = `/cliente`;
    const response = await api.post(`/cliente`, usuario);
    console.log(response.data);
    
    //handleSetToken(response.headers.authorization);
    return response;
}

export async function CadastrarEndereco (endereco: EnderecoType) {
    const response = await api.post(`/endereco`, endereco);
    return response;
}

export async function Logar (usuario: UserType) {
    
    const response = await api.post(`/login`, usuario);
    const decoded: string = jwt_decode(response.headers.authorization);
    const decodedSubmit: string = String(decoded.sub)
    console.log(decodedSubmit);
    
    //console.log(decodedSubmit);
    
    
    return decodedSubmit;
}

