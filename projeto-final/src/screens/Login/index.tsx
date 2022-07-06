import React, { useState, useEffect } from "react";
import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, StyleSheet, Animated, Keyboard } from "react-native";
import {Logar} from "../../services/api"
import { LinearGradient } from 'expo-linear-gradient';




import { styles } from "./styles";

import Cordeirinho from "../../assets/images/Cordeirinho.png";

export interface UserType {
    email: string,
    senha: string
}

export const Login = ({navigation}) => {

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }))
    const [opacity] = useState(new Animated.Value(0));

    const [logo] = useState(new Animated.ValueXY({x: 170, y: 195}))
    const [usuario, setUsuario] = useState({
        email: "",
        senha: ""
    });

   
        
    
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                useNativeDriver: false,
                bounciness: 30,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 800,
                useNativeDriver: false,
            })

        ]).start();
    }, []);


        function keyboardDidShow(){
            
            Animated.parallel([
                Animated.timing(logo.x, {
                    toValue: 55,
                    duration: 100,
                    useNativeDriver: false
                }),
                Animated.timing(logo.y, {
                    toValue: 60,
                    duration: 100,
                    useNativeDriver: false
                }),

            ]).start();

        }

        function keyboardDidHide(){
            Animated.parallel([
                Animated.timing(logo.x, {
                    toValue: 170,
                    duration: 100,
                    useNativeDriver: false
                }),
                Animated.timing(logo.y, {
                    toValue: 195,
                    duration: 100,
                    useNativeDriver: false
                }),

            ]).start();
        }
        
        function login() {
            
            console.log(usuario);
            
            Logar(usuario)
            .then(() => navigation.navigate("Home"))
            .catch(() => console.log("deu erro"));
            
        }


    return (


        <LinearGradient style={styles.background} colors={['#37A8D9', '#E1F0F6']}>

            <View style={styles.headerText}>
                <Text style={styles.titleText}>
                    Cordeirinho Delivery
                </Text>
            </View>
            
            <KeyboardAvoidingView style={styles.background}>
                <View style={styles.containerLogo}>
                    <Animated.Image
                        style={[styles.image, {
                            width: logo.x,
                            height: logo.y,
                        }]}

                        source={Cordeirinho}

                    />

                </View>
                <Animated.View
                    style={[styles.container,
                    {
                        opacity: opacity,
                        transform: [
                            { translateY: offset.y }
                        ]
                    }]}
                >
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        textContentType={"emailAddress"}
                        keyboardType={"email-address"}
                        onChangeText={(e) => setUsuario({ ...usuario, email: e })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        textContentType={"password"}
                        keyboardType={"visible-password"}
                        onChangeText={(e) => setUsuario({ ...usuario, senha: e })}
                    />
                </Animated.View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={ () => login()}
                        >
                        <Text style={{ fontWeight: "bold" }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.subtitle}>
                    <Text style={styles.subtitleText}>Esqueceu a senha?</Text>
                    <TouchableOpacity>
                        <Text style={[styles.subtitleText, { borderBottomWidth: 2 }]}> Clique aqui</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.subtitle}>
                    <TouchableOpacity 
                    onPress={ () => navigation.navigate("Cadastro")}
                    >
                        <Text style={[styles.subtitleText, { borderBottomWidth: 2 }]}>Cadastre-se aqui</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView >
        </LinearGradient>


    )
}