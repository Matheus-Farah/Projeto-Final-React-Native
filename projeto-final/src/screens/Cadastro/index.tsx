import React, { useEffect, useState, useRef } from "react";
import { Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TextInputMask } from 'react-native-masked-text'
import { LinearGradient } from 'expo-linear-gradient';
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

export const Cadastro = ({navigation}) => {


    const [cell, setCell] = useState('');
    const [cpf, setCpf] = useState('');
    const [data, setData] = useState('');

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

    const [usuarioTransfer, setUsuario] = useState({
        email: "",
        senha: "",
        username: ""
    })

    function cadastrar() {

        setDados({ ...dados, usuario : { username: usuarioTransfer.username, email : usuarioTransfer.email, senha: usuarioTransfer.senha} })
        console.log(dados);
    }
    

    useEffect(() => {
        setDados({ ...dados, usuario: { username: usuarioTransfer.username, email: usuarioTransfer.email, senha: usuarioTransfer.senha } })
    }, [usuarioTransfer]);



    return (
        <LinearGradient style={styles.gradient} colors={['#37A8D9', '#E1F0F6']}>
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
                        returnKeyType="next"
                        // REALIZAR SUBMITEDITING PARA O SECOND INPUT
                        // onSubmitEditing={() => {secondTextInputMask.focus(); }}
                        blurOnSubmit={false}
                    />

                    <Text style={styles.inputTitle}>CPF:</Text>
                    <TextInputMask style={styles.input}
                        // REALIZAR SUBMITEDITING PARA O SECOND INPUT
                        // ref={(input) => {secondTextInputMask = input; }}    
                        type={'cpf'}
                        value={cpf}
                        placeholder={"___.___.___-__"}
                        onChangeText={(e) => setDados({ ...dados, cpf: e })}
                    />
                    {/* REALIZAR TRATAMENTO NO PLACEHOLDER */}

                    <Text style={styles.inputTitle}>Telefone:</Text>
                    <TextInputMask style={styles.input}
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={cell}
                        placeholder={"(__)_____-____"}
                        onChangeText={(e) => setDados({ ...dados, telefone: e })}
                    />

                    <Text style={styles.inputTitle}>Data de Nascimento:</Text>

                    <TextInputMask style={styles.input}
                        type={'datetime'}
                        options={{
                            maskType: "BRL"
                        }}
                        value={data}
                        onChangeText={(e) => setDados({ ...dados, dataNascimento: e })}
                        placeholder={"dd/mm/yyyy"}
                    />

                    <Text style={styles.inputTitle}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        textContentType={"emailAddress"}
                        keyboardType={"email-address"}
                        placeholder={"SeuEmail@email.com"}
                        onChangeText={(e) => setUsuario({ ...usuarioTransfer, email: e })}
                    />
                    {/* REALIZAR TRATAMENTO DE SENHA NO INPUT */}
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

                    <TouchableOpacity
                        style={styles.button}
                        onPress={ () => navigation.navigate("Login")}
                    >
                        <Text style={{ fontWeight: "bold" }}>Cadastrar</Text>
                    </TouchableOpacity>

                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}