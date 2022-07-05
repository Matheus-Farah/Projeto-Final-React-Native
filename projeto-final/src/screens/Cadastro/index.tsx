import React from "react";
import { Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Cordeirinho from "../../assets/images/Cordeirinho.png";

export const Cadastro = () => {
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
                />
                <Text style={styles.inputTitle}>CPF:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType={"numeric"}
                    placeholder={"___.___.___-__"}
                />
                <Text style={styles.inputTitle}>Telefone:</Text>
                <TextInput
                    style={styles.input}
                    textContentType={"telephoneNumber"}
                    keyboardType={"number-pad"}
                    placeholder={"(__)_____-____"}
                />
                <Text style={styles.inputTitle}>Data de Nascimento:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType={"numeric"}
                    placeholder={"__/__/____"}
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
                    placeholder={"Digite seu Username"}
                />
            </ScrollView>
            <View>
                <TouchableOpacity
                    style={styles.button}>
                    <Text style={{ fontWeight: "bold" }}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}