import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import Absolute from "../../assets/images/vodka.png";
import { styles } from "./styles";

export interface ProdutoEspecifico {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  url: string;
}

export const Produto = ({ navigation }, produto: ProdutoEspecifico) => {
  const [dados, setDados] = useState<ProdutoEspecifico>({
    id: 0,
    nome: "Vodka",
    descricao:
      "Elaborada a partir de ingredientes naturais os principais ingredientes da absolut vodka são água e o trigo de inverno do sul da suécia",
    preco: 100,
    url: "",
  });

  return (
    <View style={styles.container}>
      <View>
        <Image source={Absolute} style={styles.image} />
      </View>

      <View style={styles.informacoes}>
        <Text style={styles.textoNome}>{dados.nome}</Text>
        <Text style={styles.textoPreco}>R$ {dados.preco}</Text>
        <Text style={styles.descricao}>{dados.descricao}</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textBotao}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
