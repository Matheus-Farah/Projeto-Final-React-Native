import React, { useState } from "react";
import { FlatList, KeyboardAvoidingView, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { styles } from "./styles";

import Coca from "../../assets/images/coca.png";
import Vodka from "../../assets/images/vodka.png";
import Vodkalimao from "../../assets/images/vodka2.png";
import Coca2 from "../../assets/images/coca2.png";
import Cordeirinho from "../../assets/images/Cordeirinho.png"




interface ProdutosImagens {
    id: string,
    image: Document
}
interface Produtos {
    id: string,
    image: Document,
    preco: string,
    nome: string
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

    const [produtos, setProdutos] = useState<Produtos[]>([
        {
            id: "1",
            image: Coca,
            preco: "R$ 3,00",
            nome: "Coca-Cola"

        },
        {
            id: "2",
            image: Vodka,
            preco: "R$ 130,00",
            nome: "Absolut Vodka"

        },
        {
            id: "2",
            image: Vodka,
            preco: "R$ 130,00",
            nome: "Absolut Vodka"

        },
        {
            id: "2",
            image: Vodka,
            preco: "R$ 130,00",
            nome: "Absolut Vodka"

        },
        {
            id: "2",
            image: Vodka,
            preco: "R$ 130,00",
            nome: "Absolut Vodka"

        },
        {
            id: "2",
            image: Vodka,
            preco: "R$ 130,00",
            nome: "Absolut Vodka"

        },
        {
            id: "2",
            image: Vodka,
            preco: "R$ 130,00",
            nome: "Absolut Vodka"

        },
    ]);




    return (
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
                            <Image source={item.image} style={styles.img} />
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
                            <Image source={item.image} style={styles.imgMenor} />
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


    )
}