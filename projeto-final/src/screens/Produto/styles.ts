import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 60
    },
    image: {
        width: 400,
        height: 400
    },
    informacoes: {
        width: '100%',
        height: '70%',
        
        alignItems: "center",
        backgroundColor: '#898989',
    },
    botao: {
        width: '20%',
        height: 40,
        marginTop: 50,

        backgroundColor: 'green',
        alignItems: "center",
        borderRadius: 10,
    },
    textBotao: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 4
    },
    textoNome: {
        fontSize: 40,
        fontWeight: "bold"
    },
    textoPreco: {
        fontSize: 22,
        marginTop: 10
    },
    descricao: {
        textAlign: "center",
        fontSize: 22,
        marginTop: 10
    }
})