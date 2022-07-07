import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, FlatList, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";

import AntDesign from "@expo/vector-icons/AntDesign";
import { buscaListaProdutos } from "../../services/api";



interface Produtos {
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    url: string
}

export const Search = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');


    const [produtos, setProdutos] = useState([




    ]);

    const [list, setList] = useState(produtos);


    useEffect(() => {

        buscaListaProdutos().then((res) => {
            setProdutos(res.data);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {

        })
    }, [])

    useEffect(() => {
        if (searchText === '') {
            setList(produtos);
        } else {
            setList(
                produtos.filter(
                    (item) =>
                        item.nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                )
            );
        }
    }, [searchText]);


    return (
        <LinearGradient style={styles.gradient} colors={["#37A8D9", "#E1F0F6"]}>
            <View style={styles.container}>
                <View style={styles.azulzin}>

                    <TextInput
                        style={styles.input}
                        placeholder="Pesquisar"
                        placeholderTextColor='#aaa'
                        value={searchText}
                        onChangeText={(t) => setSearchText(t)}
                    />


                    <TouchableOpacity >
                        <AntDesign name={"search1"} size={25} color={"#fff"} style={styles.lupa} />
                    </TouchableOpacity>

                </View>

                <View style={styles.viewProdutos}>
                    <FlatList

                        numColumns={2}
                        data={list}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                style={styles.buttonProdutos}
                                onPress={() => navigation.navigate('Produto', { produto: item })}>
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