import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { CardItem } from "../../components/CardItem";
import { styles } from "./styles";

import Coca from "../../assets/images/Coca-Cola.png"
import Guarana from "../../assets/images/guarana.png"
import Cordeirinho from "../../assets/images/Cordeirinho.png"
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

export interface ItensCarrinhoProps {
  id: string,
  name: string,
  quantidade: number,
  preco: number,
  image: Document,
}

export const Carrinho = () => {
  const [carrinho, setCarrinho] = useState<ItensCarrinhoProps[]>([
    {
      id: "1",
      name: "Coca-cola",
      quantidade: 2,
      preco: 3.5,
      image: Coca
    },
    {
      id: "2",
      name: "Guarana",
      quantidade: 2,
      preco: 3.5,
      image: Guarana
    },
    {
      id: "3",
      name: "Guarana",
      quantidade: 2,
      preco: 3.5,
      image: Guarana
    },
    {
      id: "4",
      name: "Guarana",
      quantidade: 2,
      preco: 3.5,
      image: Guarana
    },
    {
      id: "5",
      name: "Guarana",
      quantidade: 2,
      preco: 3.5,
      image: Guarana
    },
  ]);

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
          < FlatList
            data={carrinho}
            renderItem={({ item }) => <CardItem produto={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style={styles.total}>
          <Text style={styles.totalText}>Total: R$</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.subtitleText}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
