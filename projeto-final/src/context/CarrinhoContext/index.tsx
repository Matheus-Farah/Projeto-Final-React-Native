import React, { createContext, useEffect, useState } from "react";
import { Produtos } from "../../screens/Home";

import AsyncStorage from '@react-native-async-storage/async-storage';

export interface TipoContextoCarrinho {
    listaDeProdutos?: Produtos[],
    adicionaItensCarrinho: (produto: Produtos) => void;
    precoTotal: number,
    retiraItemCarrinho: (id: number) => void
}

export const ContextoCarrinho = createContext<TipoContextoCarrinho>({
    listaDeProdutos: [{
        id: 0,
        nome: "",
        descricao: "",
        preco: 0,
        url: ""
    }],
    adicionaItensCarrinho: (produto: Produtos) => { },
    precoTotal: 0,
    retiraItemCarrinho: (id: number) => { }
})

export const ProvedorCarrinho = ({ children }) => {
    const [listaDeProdutos, setProdutos] = useState<Produtos[]>([]);
    const [precoTotal, setPrecoTotal] = useState<number>(0);

    useEffect(() => {
        calculaPrecoTotal();
    }, [listaDeProdutos]);

    useEffect(() => {
        getData().then((res) => {
            res && setProdutos(res);
        })
    }, [])

    function calculaPrecoTotal() {
        let somaTotal = 0
        listaDeProdutos.length !== 0 && listaDeProdutos.map((item) => {
            somaTotal = somaTotal + Number(item.preco)
        });
        setPrecoTotal(somaTotal);
    };

    function retiraItemCarrinho(id: number) {
        let novoCarrinho = listaDeProdutos.filter((produto) => {
            return produto.id !== id
        });
        setProdutos(novoCarrinho);
    };

    function adicionaItensCarrinho(item: Produtos) {
        storeData([...listaDeProdutos, item])
        setProdutos([...listaDeProdutos, item]);
    }

    const storeData = async (value: Produtos[]) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@listaP', jsonValue)
        } catch (e) {
            // saving error
        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@listaP')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    }

    return (
        <ContextoCarrinho.Provider
            value={{
                listaDeProdutos,
                adicionaItensCarrinho,
                precoTotal,
                retiraItemCarrinho
            }}
        >
            {children}
        </ContextoCarrinho.Provider>
    )

}