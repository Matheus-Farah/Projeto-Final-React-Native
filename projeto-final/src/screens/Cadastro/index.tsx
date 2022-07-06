import React, { useEffect, useState, useRef } from "react";
import { Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TextInputMask } from 'react-native-masked-text'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles";
import { Form } from 'react-native-autofocus';

import Cordeirinho from "../../assets/images/Cordeirinho.png";
import { Cadastrar } from "../../services/api";

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

export const Cadastro = ({ navigation }) => {


    const [cell, setCell] = useState('');
    const [cpf, setCpf] = useState('');
    const [data, setData] = useState('');

    const cpf_2 = useRef();

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

    function cadastrarCli() {
        setDados({ ...dados, usuario: { username: usuarioTransfer.username, email: usuarioTransfer.email, senha: usuarioTransfer.senha } })
        console.log(dados);
        Cadastrar(dados)
            .then(() => navigation.navigate("Home"))
            .catch(() => console.log("deu erro"));
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
                        // onSubmitEditing={() => {cpf_2.current.focus(); }}
                        blurOnSubmit={false}
                    />

                    <Text style={styles.inputTitle}>CPF:</Text>
                    <TextInputMask style={styles.input}
                        // REALIZAR SUBMITEDITING PARA O SECOND INPUT
                        // ref={(input_2) => {secondTextInputMask = input; }}
                        // ref ={cpf_2}    
                        type ={'cpf'}
                        value ={cpf}
                        placeholder ={"___.___.___-__"}
                        onChangeText ={(e) => setDados({ ...dados, cpf: e.replace(/\D+/g, '') })}
                    />
                    
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
                        onChangeText={(e) => setDados({ ...dados, telefone: e.replace(/\D+/g, '') })}
                    />

                    <Text style={styles.inputTitle}>Data de Nascimento:</Text>
                    <TextInputMask style={styles.input}
                        type={'datetime'}
                        options={{
                            format: 'yyyy-MM-dd',
                        }}
                        value={data}
                        onChangeText={(e) => setDados({ ...dados, dataNascimento: e })}
                        placeholder={"yyyy-mm-dd"}
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

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => cadastrarCli()}
                    >
                        <Text style={{ fontWeight: "bold" }}>Cadastrar</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}