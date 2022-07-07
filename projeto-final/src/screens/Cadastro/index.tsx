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

    const ref_input2: any = useRef<TextInputMask>(null);
    const ref_input3: any = useRef<TextInputMask>(null);
    const ref_input4: any = useRef<TextInputMask>(null);
    const ref_input5: any = useRef<TextInputMask>(null);
    const ref_input6: any = useRef<TextInputMask>(null);
    const ref_input7: any = useRef<TextInputMask>(null);

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
            .then(() => navigation.navigate("Login"))
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
                        returnKeyType="done"
                        // REALIZAR SUBMITEDITING PARA O SECOND INPUT
                        // onSubmitEditing={() => ref_input2.current?.focus()}
                        blurOnSubmit={true}
                    />

                    <Text style={styles.inputTitle}>CPF:</Text>
                    <TextInputMask style={styles.input}
                        // REALIZAR SUBMITEDITING PARA O SECOND INPUT (TEXTINPUTMASK NÃO ACEITA O ONSUBIMIT)
                        // ref={(input_2) => {secondTextInputMask = input; }}
                        // ref ={cpf_2}
                        keyboardType={"numeric"}    
                        type={'cpf'}
                        value={cpf}
                        placeholder={"___.___.___-__"}
                        onChangeText={(e) => setDados({ ...dados, cpf: e.replace(/\D+/g, '') })}
                        // onSubmitEditing={() => ref_input3.current?.focus()}
                        // ref={ref_input2}
                    />

                    <Text style={styles.inputTitle}>Telefone:</Text>
                    <TextInputMask style={styles.input}                                              
                        keyboardType = "numeric"
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={cell}
                        placeholder={"(__)_____-____"}
                        
                        onChangeText={(e) => setDados({ ...dados, telefone: e.replace(/\D+/g, '') })}
                        // onSubmitEditing={() => ref_input4.current?.focus()}
                        // ref={ref_input3}
                    />

                    <Text style={styles.inputTitle}>Data de Nascimento:</Text>
                    <TextInputMask style={styles.input}
                        
                        type={'datetime'}
                        options={{
                            format: 'yyyy-MM-dd',
                        }}
                        value={data}
                        placeholder={"yyyy-mm-dd"}
                        onChangeText={(e) => setDados({ ...dados, dataNascimento: e })}
                        // onSubmitEditing={() => ref_input5.current?.focus()}
                        // ref={ref_input4}
                        
                    />

                    <Text style={styles.inputTitle}>Email:</Text>
                    <TextInputMask
                        type={"custom"}
                        style={styles.input}
                        textContentType={"emailAddress"}
                        keyboardType={"email-address"}
                        placeholder={"SeuEmail@email.com"}
                        onChangeText={(e) => setUsuario({ ...usuarioTransfer, email: e })}
                        // onSubmitEditing={() => ref_input6.current?.focus()}
                        // ref={ref_input5}
                    />

                    <Text style={styles.inputTitle}>Senha:</Text>
                    <TextInputMask
                        type={"custom"}
                        style={styles.input}
                        textContentType={"password"}
                        keyboardType={"visible-password"}
                        placeholder={"Digite sua senha:"}
                        onChangeText={(e) => setUsuario({ ...usuarioTransfer, senha: e })}
                        // onSubmitEditing={() => ref_input7.current?.focus()}
                        // ref={ref_input6}
                    />

                    <Text style={styles.inputTitle}>Nome de Usuário:</Text>
                    <TextInputMask
                    type={"custom"}
                        style={styles.input}
                        textContentType={"username"}
                        keyboardType={"default"}
                        placeholder={"Digite seu Username"}
                        onChangeText={(e) => setUsuario({ ...usuarioTransfer, username: e })}
                        // onSubmitEditing={() => ref_input7.current?.focus()}
                        // ref={ref_input7}
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