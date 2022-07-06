import React, { useEffect, useState } from "react";
import { FlatList, KeyboardAvoidingView, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';

import Coca from "../../assets/images/coca.png";
import Vodka from "../../assets/images/vodka.png";
import Vodkalimao from "../../assets/images/vodka2.png";
import Coca2 from "../../assets/images/coca2.png";
import Cordeirinho from "../../assets/images/Cordeirinho.png"
import { buscaListaProdutos } from "../../services/api";




interface ProdutosImagens {
    id: string,
    image: Document
}
interface Produtos {
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    url: string
}


export const Home = () => {
    const [produtoImg, setProdutoImg] = useState<ProdutosImagens[]>([
        {
            id: "1",
            image: Coca2
        },

        {
            id: "2",
            image: Vodkalimao
        },
    ]);

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {

        buscaListaProdutos().then((res) => {
            setProdutos(res.data);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {

        })
    }, [])



    return (

        <LinearGradient style={styles.gradient} colors={['#37A8D9', '#E1F0F6']}>
            
            <View style={styles.container}>

                <View style={styles.header}>
                    <View >
                        <Text style={styles.textProduto}>
                            Promoções
                        </Text>
                    </View>
                    <View>
                        <Image source={Cordeirinho} style={styles.cordeirinho} />
                    </View>
                </View>

                <View >
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={produtoImg}
                        renderItem={({ item }) =>
                            <View style={styles.viewImg}>
                                {/* <Image source={item.image} style={styles.img} /> */}
                            </View>
                        }
                        keyExtractor={item => item.id}
                    />
                </View>

                <View style={styles.viewProdutos}>

                    <FlatList
                        numColumns={2}
                        data={produtos}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={styles.buttonProdutos}>
                                <Image source={{ uri: item.url }} style={styles.imgMenor} />
                                <View >
                                    <Text style={[{ fontWeight: "bold" }]}>
                                        {item.preco}
                                    </Text>
                                    <Text >
                                        {item.nome}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </LinearGradient>
    )
}