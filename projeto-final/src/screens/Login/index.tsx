import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Cordeirinho from "../../assets/images/Cordeirinho.png";

export const Login = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={Cordeirinho}
                    style={styles.image}
                />

            </View>
            <View>
                <Text style={styles.inputTitle}>Email:</Text>
                <TextInput
                    style={styles.input}
                    textContentType={"emailAddress"}
                    keyboardType={"email-address"}
                />
                <Text style={styles.inputTitle}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    textContentType={"password"}
                    keyboardType={"visible-password"}
                />
            </View>
            <View>
                <TouchableOpacity 
                style={styles.button}>
                    <Text style={{fontWeight: "bold"}}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.subtitle}>
                <Text style={styles.subtitleText}>Esqueceu a senha?</Text>
                <TouchableOpacity>
                    <Text style={[styles.subtitleText, {borderBottomWidth: 2}]}> Clique aqui</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={[styles.subtitleText, {borderBottomWidth: 2}]}>Cadastre-se aqui</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}