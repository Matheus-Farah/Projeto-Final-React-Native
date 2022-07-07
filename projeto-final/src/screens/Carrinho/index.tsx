import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { CardItem } from "../../components/CardItem";
import { styles } from "./styles";

import Coca from "../../assets/images/Coca-Cola.png"
import Guarana from "../../assets/images/guarana.png"
import Cordeirinho from "../../assets/images/Cordeirinho.png"
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { ContextoCarrinho } from "../../context/CarrinhoContext";
import { Produtos } from "../Home";
import { useFocusEffect } from "@react-navigation/native";

export interface ItensCarrinhoProps {
  id: string,
  nome: string,
  quantidade: number,
  preco: number,
  url: string,
}



export const Carrinho = () => {
  const setListaDeProdutos = useContext(ContextoCarrinho).adicionaItensCarrinho;
    const listaDeProdutosCarrinho = useContext(ContextoCarrinho).listaDeProdutos;
    const retiraItemCarrinho = useContext(ContextoCarrinho).retiraItemCarrinho;
    const finalizarPedido = useContext(ContextoCarrinho).finalizarPedido;

    const [precoTotal,setPrecoTotal] = useState<number>()
    const [value,setValue] = useState<number>()

    useEffect(() => { 
      calculaPrecoTotal()
      
    },[precoTotal])

    useFocusEffect(
      React.useCallback(() => {
        setValue(Math.random());
        calculaPrecoTotal()
      }, [])
    );
    useEffect(() => { 
    },[value])

    function calculaPrecoTotal() {
      let somaTotal = 0
      listaDeProdutosCarrinho.map((item) => {
          somaTotal += item.preco
      });
      setPrecoTotal(somaTotal);
  };



  return (

    <LinearGradient style={styles.gradient} colors={['#37A8D9', '#E1F0F6']}>
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.text}>Carrinho</Text>
          
          <View>
            <Image source={Cordeirinho} style={styles.cordeirinho} />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <FlatList
            data={listaDeProdutosCarrinho}
            renderItem={({ item }) => 
            <CardItem produto={item} />
            }
            keyExtractor={(item) => item.nome}
          />
        </View>

        {/* <View style={styles.total}>
          <Text style={styles.totalText}>Total: R$</Text>
        </View> */}

        <TouchableOpacity style={styles.button} onPress={ ()=> finalizarPedido()
         }>
          <Text style={styles.subtitleText}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
