import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, FlatList, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./style";

import AntDesign from "@expo/vector-icons/AntDesign";



interface Produtos {
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    url: string
}

export const Search = () => {
    const [searchText, setSearchText] = useState('');
    

    const [produtos, setProdutos] = useState([
        {
            id: "1",
            nome: "Absolut Elyx Vodka",
            descricao: "Beba com moderação",
            preco: 130,
            url: "https://produits.bienmanger.com/30973-0w600h600_Absolut_Elyx_Vodka.jpg"
        },
        {
            id: "2",
            nome: "Guarana",
            descricao: "Beba com moderação",
            preco: 130,
            url: "https://produits.bienmanger.com/30973-0w600h600_Absolut_Elyx_Vodka.jpg"
        },
        {
            id: "3",
            nome: "Coca Cola",
            descricao: "Beba com moderação",
            preco: 130,
            url: "https://produits.bienmanger.com/30973-0w600h600_Absolut_Elyx_Vodka.jpg"
        },
        
        

    ]);

    const [list, setList] = useState(produtos);


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
    )

}