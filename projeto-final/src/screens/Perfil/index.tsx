import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';

import Cordeirinho from "../../assets/images/Cordeirinho.png";


export const Perfil = ({navigation}) => {

    const [username, setUsername] = useState<string>("brenin250");
    const [nome, setnome] = useState<string>("Breno");
    const [email, setEmail] = useState<string>("breno@gmail.com");
    const [date, setDate] = useState<string>("25/01/2004");
    const [telefone, setTelefone] = useState<string>("(12)3456-7890");



    return (

        <LinearGradient style={styles.gradient} colors={['#37A8D9', '#E1F0F6']}>
            <ScrollView>
                
                <View style={styles.container}>

                    <View >
                        <Image
                            source={Cordeirinho}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.username}>
                        <Text style={{ fontSize: 28 }}>{username}</Text>
                    </View>

                    <View>
                        <Text style={{ fontSize: 26, marginTop: 10 }}>Informações Pessoais:</Text>
                        <View style={styles.infoPessoal}>

                            <Text style={styles.infoText}>{nome}</Text>
                            <Text style={styles.infoText}>{email}</Text>
                            <Text style={styles.infoText}>{date}</Text>
                            <Text style={styles.infoText}>{telefone}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Enderecos")}>
                            <Text style={{ fontSize: 28 }}>Adicionar Endereço</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonExit}>
                            <Text style={{ fontSize: 28 }}>Sair</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}