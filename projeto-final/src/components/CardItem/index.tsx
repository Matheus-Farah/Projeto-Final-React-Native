import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

import { ItensCarrinhoProps } from "../../screens/Carrinho";
import { Produtos } from "../../screens/Home";
import { ContextoCarrinho } from "../../context/CarrinhoContext";
import { useFocusEffect } from "@react-navigation/native";

interface ItemProps extends TouchableOpacityProps {
  produto: Produtos;
}



export const CardItem = ({ produto, ...rest }: ItemProps) => {

  const [produtoNovo, setProdutoNovo] = useState(produto)
  // const [precoTotalProduto, setPrecoTotalProduto] = useState<number>()
  const retiraItemCarrinho = useContext(ContextoCarrinho).retiraItemCarrinho;
  const adicionaItensCarrinho = useContext(ContextoCarrinho).adicionaItensCarrinho;
  const [value,setValue] = useState<number>()

  // useEffect(()=>{
  //   setPrecoTotalProduto(produto.preco*produto.quantidade)
  //   setProdutoNovo(produto)
  // },[produto])
  
  useFocusEffect(
    React.useCallback(() => {
      setValue(Math.random());
    }, [])
  );
  useEffect(() => { 
  },[value])

  function adicionarQuantidade() {
    let valueNovo = value
    valueNovo +=1
    setValue(valueNovo)
  }

  function diminuirQuantidade() {
    let valueNovo = value
    valueNovo -=1
    setValue(valueNovo)
  }

  

  return (
    <TouchableOpacity style={styles.container} {...rest}
    >
      <View style={styles.card}>
       
        <View >
          <Image source={{uri: produto.url}} style={styles.image} />
        </View>

        <View style={styles.informacoes}>
          <View>
            <Text style={styles.textItem}>{produto.nome}</Text>
          </View>

          <View style={styles.card}>
            
            <TouchableOpacity
            onPress={ () => [retiraItemCarrinho(produto.id), diminuirQuantidade()]}
            >
              <Text style={[styles.buttons, {backgroundColor: 'red'}]}> - </Text>
            </TouchableOpacity>
            
            <Text style={styles.quantidade}>{produtoNovo.quantidade}</Text>
            
            <TouchableOpacity
            onPress={ () => [adicionaItensCarrinho(produto), adicionarQuantidade()]}
            >
              <Text style={[styles.buttons, {backgroundColor: 'green'}]}> + </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.textItem}>R$ {produto.preco*produto.quantidade}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
