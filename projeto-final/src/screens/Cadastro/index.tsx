import React, { useEffect, useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Cordeirinho from "../../assets/images/Cordeirinho.png";

export interface UsuarioType {
    nome: string,
    cpf: string,
    telefone: string,
    dataNascimento: string,
    usuario: {
        email: string,
        senha: string,
        username: string
    }

};

export const Cadastro = () => {

    const [dados, setDados] = useState<UsuarioType>({
        nome: "",
        cpf: "",
        telefone: "",
        dataNascimento: "",
        usuario: {
            email: "",
            senha: "",
            username: ""
        }
    });

    const [usuarioTransfer,setUsuario] = useState({
        email: "",
        senha: "",
        username: ""
    })

    function cadastrar() {
        setDados({ ...dados, usuario : { username: usuarioTransfer.username, email : usuarioTransfer.email, senha: usuarioTransfer.senha} })
        console.log(dados);
        
    }
    

    useEffect(() => {
        setDados({ ...dados, usuario : { username: usuarioTransfer.username, email : usuarioTransfer.email, senha: usuarioTransfer.senha} })  
    }, [usuarioTransfer]);


    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={Cordeirinho}
                    style={styles.image}
                />
                <View style={styles.headerText}>
                    <Text style={styles.titleText}>
                        Cordeirinho
                    </Text>
                    <Text style={styles.titleText}>
                        Delivery
                    </Text>
                </View>
            </View>
            <ScrollView>
                <Text style={styles.inputTitle}>Nome:</Text>
                <TextInput
                    style={styles.input}
                    textContentType={"name"}
                    keyboardType={"default"}
                    placeholder={"Digite seu nome:"}
                    onChangeText={(e) => setDados({ ...dados, nome: e })}
                />
                <Text style={styles.inputTitle}>CPF:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType={"numeric"}
                    placeholder={"___.___.___-__"}
                    onChangeText={(e) => setDados({ ...dados, cpf: e })}
                />
                <Text style={styles.inputTitle}>Telefone:</Text>
                <TextInput
                    style={styles.input}
                    textContentType={"telephoneNumber"}
                    keyboardType={"number-pad"}
                    placeholder={"(__)_____-____"}
                    onChangeText={(e) => setDados({ ...dados, telefone: e })}
                />
                <Text style={styles.inputTitle}>Data de Nascimento:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType={"numeric"}
                    placeholder={"__/__/____"}
                    onChangeText={(e) => setDados({ ...dados, dataNascimento: e })}
                />
                <Text style={styles.inputTitle}>Email:</Text>
                <TextInput
                    style={styles.input}
                    textContentType={"emailAddress"}
                    keyboardType={"email-address"}
                    placeholder={"SeuEmail@email.com"}
                    onChangeText={(e) => setUsuario({ ...usuarioTransfer, email: e })}
                />
                <Text style={styles.inputTitle}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    textContentType={"password"}
                    keyboardType={"visible-password"}
                    placeholder={"Digite sua senha:"}
                    onChangeText={(e) => setUsuario({ ...usuarioTransfer, senha: e })}
                />
                <Text style={styles.inputTitle}>Nome de Usuário:</Text>
                <TextInput
                    style={styles.input}
                    textContentType={"username"}
                    keyboardType={"default"}
                    placeholder={"Digite seu Username"}
                    onChangeText={(e) => setUsuario({ ...usuarioTransfer, username: e })}
                    
                />
            </ScrollView>
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => cadastrar()}
                    >
                    <Text style={{ fontWeight: "bold" }}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}