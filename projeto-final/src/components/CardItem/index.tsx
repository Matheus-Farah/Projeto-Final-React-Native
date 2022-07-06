import React from "react";
import {
  Image,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

import { ItensCarrinhoProps } from "../../screens/Carrinho";

interface ItemProps extends TouchableOpacityProps {
  produto: ItensCarrinhoProps;
}

export const CardItem = ({ produto, ...rest }: ItemProps) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.card}>
       
        <View >
          <Image source={produto.image} style={styles.image} />
        </View>

        <View style={styles.informacoes}>
          <View>
            <Text style={styles.textItem}>{produto.name}</Text>
          </View>

          <View style={styles.card}>
            
            <TouchableOpacity>
              <Text style={[styles.buttons, {backgroundColor: 'red'}]}> - </Text>
            </TouchableOpacity>
            
            <Text style={styles.quantidade}>{produto.quantidade}</Text>
            
            <TouchableOpacity>
              <Text style={[styles.buttons, {backgroundColor: 'green'}]}> + </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.textItem}>R$ {produto.preco}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
