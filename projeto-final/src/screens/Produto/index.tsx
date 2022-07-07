import React, { useContext, useState } from "react";
import { Image, View, Text, TouchableOpacity, ScrollView } from "react-native";

import Absolute from "../../assets/images/vodka.png";
import { ContextoCarrinho } from "../../context/CarrinhoContext";
import { Produtos } from "../Home";
import { styles } from "./styles";

export interface ProdutoEspecifico {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  url: string;
}

export const Produto = ({ route, navigation }) => {

  const { produto } = route.params;

  const setListaDeProdutos = useContext(ContextoCarrinho).adicionaItensCarrinho;

  function handleComprar(produto: Produtos) {
    setListaDeProdutos(produto);
  }

  return (
    
      <View style={styles.container}>
        <ScrollView>
        <View>
          <Image source={{ uri: produto.url }} style={styles.image} />
        </View>

        <View style={styles.informacoes}>
          <Text style={styles.textoNome}>{produto.nome}</Text>
          <Text style={styles.textoPreco}>R$ {produto.preco}</Text>
          <Text style={styles.descricao}>{produto.descricao}</Text>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleComprar(produto)}
          >
            <Text style={styles.textBotao}>Comprar</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    
  );
};
