import React, { useEffect, useState, useRef } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

import Cordeirinho from "../../assets/images/Cordeirinho.png";
import { CadastrarEndereco } from "../../services/api";


export interface EnderecoType {
  cep: string;
  numCasa: string
  complemento: string;
  idUsuario: number;
}

export const Enderecos = ({ navigation }) => {
 
  const [dados, setDados] = useState<EnderecoType>({
    cep: '',
    numCasa: '',
    complemento: '',
    idUsuario: 0,
  });

  function cadastrarEndereco() {
    setDados({
      ...dados
    });
    console.log(dados);
    CadastrarEndereco(dados)
      .then(() => navigation.navigate("Home"))
      .catch(() => console.log("deu erro"));
  }

  return (
    <LinearGradient style={styles.gradient} colors={["#37A8D9", "#E1F0F6"]}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <Image source={Cordeirinho} style={styles.image} />
          <View style={styles.headerText}>
            <Text style={styles.titleText}>Cordeirinho</Text>
            <Text style={styles.titleText}>Delivery</Text>
          </View>
        </View>
        <ScrollView>
          <Text style={styles.inputTitle}>CEP:</Text>
          <TextInputMask
            style={styles.input}
            // REALIZAR SUBMITEDITING PARA O SECOND INPUT
            // ref={(input) => {secondTextInputMask = input; }}
            type={"zip-code"}
            placeholder={"_____-___"}
            onChangeText={(e) =>
              setDados({ ...dados, cep: e.replace(/\D+/g, "") })
            }
          />
          {/* REALIZAR TRATAMENTO NO PLACEHOLDER */}

          {/* <Text style={styles.inputTitle}>Rua:</Text>
          <TextInput
            style={styles.input}
            textContentType={"addressCity"}
            keyboardType={"default"}
            placeholder={"Digite o nome da rua:"}
            onChangeText={(e) => setDados({ ...dados, rua: e })}
            returnKeyType="next"
            // REALIZAR SUBMITEDITING PARA O SECOND INPUT
            // onSubmitEditing={() => {secondTextInputMask.focus(); }}
            blurOnSubmit={false}
          /> */}
          
          <Text style={styles.inputTitle}>Número:</Text>
          <TextInput
            style={styles.input}
            textContentType={"oneTimeCode"}
            keyboardType={"default"}
            placeholder={"Digite o numero da sua residência"}
            onChangeText={(e) =>
              setDados({ ...dados, numCasa: e})
            }
          />

          {/* <Text style={styles.inputTitle}>Bairro:</Text>

          <TextInput
            style={styles.input}
            textContentType={"name"}
            keyboardType={"default"}
            placeholder={"Digite seu Bairro"}
            onChangeText={(e) => setDados({ ...dados, bairro: e })}
          />

          <Text style={styles.inputTitle}>Cidade:</Text>
          <TextInput
            style={styles.input}
            textContentType={"addressCityAndState"}
            keyboardType={"default"}
            placeholder={"Digite sua Cidade e Estado"}
            onChangeText={(e) => ({ ...dados, Cidade: e })}
          />
          REALIZAR TRATAMENTO DE SENHA NO INPUT */}

          <Text style={styles.inputTitle}>Complemento:</Text>
          <TextInput
            style={styles.input}
            textContentType={"location"}
            keyboardType={"default"}
            placeholder="Digite uma informação:"
            onChangeText={(e) => setDados({ ...dados , complemento: e })}
          />

          <Text style={styles.inputTitle}>ID do Usuário:</Text>
          <TextInput
            style={styles.input}
            textContentType={"oneTimeCode"}
            keyboardType={"numeric"}
            placeholder="Digite seu Username"
            onChangeText={(e) =>
              setDados({ ...dados, idUsuario: Number(e) })
            }
          />

          <TouchableOpacity
            style={styles.button}
            onPress={ () => cadastrarEndereco()}
          >
            <Text style={{ fontWeight: "bold" }}>Cadastrar</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};