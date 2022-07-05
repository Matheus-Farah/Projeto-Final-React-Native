import axios from "axios";
import { UsuarioType } from "../screens/Cadastro";

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export function buscaProdutos () {
    const url = `produto`;

    return api.get(url);
}

export function buscaProdutoEspecifico (index: string) {
    const url = `magic-items/${index}`;

    return api.get(url);
}

export function Cadastro (usuario: UsuarioType) {
    const url = `cliente`;

    return api.post(url, usuario);
}

