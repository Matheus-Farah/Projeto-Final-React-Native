import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { CardItem } from "../../components/CardItem";
import { styles } from "./styles";

import Coca from "../../assets/images/Coca-Cola.png"
import Guarana from "../../assets/images/guarana.png"

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
  ]);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.text}>Carrinho</Text>
      </View>
      
      <View>
        <FlatList
          data={carrinho}
          renderItem={({ item }) => <CardItem produto={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.total}>
        <Text style={styles.totalText}>Total: R$</Text>
      </View>
    </View>
  );
};
