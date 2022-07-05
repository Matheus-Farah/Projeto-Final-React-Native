import React, { useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TextInputMask } from 'react-native-masked-text'

import { styles } from "./styles";

import Cordeirinho from "../../assets/images/Cordeirinho.png";

export const Cadastro = () => {

    const [cell, setCell] = useState('');
    const [cpf, setCpf] = useState('');
    const [data, setData] = useState('');


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
                    placeholder={"Digite seu nome"}
                />

                <Text style={styles.inputTitle}>CPF:</Text>
                <TextInputMask style={styles.input}
                    type={'cpf'}
                    value={cpf}
                    onChangeText={text => setCpf(text)}
                    placeholder={"___.___.___-__"}
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
                    onChangeText={Text => setCell(Text)}
                    placeholder={"(__)_____-____"}
                />

                <Text style={styles.inputTitle}>Data de Nascimento:</Text>
                <TextInputMask style={styles.input}
                    type={'datetime'}
                    options={{
                        maskType:"BRL"
                    }}
                    value={data}
                    onChangeText={text => setData(text)}
                    placeholder={"dd/mm/yyyy"}
                />

                <Text style={styles.inputTitle}>Email:</Text>
                <TextInput
                    style={styles.input}
                    textContentType={"emailAddress"}
                    keyboardType={"email-address"}
                    placeholder={"SeuEmail@email.com"}
                />

                <Text style={styles.inputTitle}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    textContentType={"password"}
                    keyboardType={"visible-password"}
                    placeholder={"Digite sua senha:"}
                />

                <Text style={styles.inputTitle}>Nome de Usuário:</Text>
                <TextInput
                    style={styles.input}
                    textContentType={"username"}
                    keyboardType={"default"}
                    placeholder={"Username"}
                />

                <TouchableOpacity
                    style={styles.button}>
                    <Text style={{ fontWeight: "bold" }}>Cadastrar</Text>
                </TouchableOpacity>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}