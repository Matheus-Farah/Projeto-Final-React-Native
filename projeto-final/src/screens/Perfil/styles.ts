import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingBottom: 60,
        alignItems:"center",
    },
    image: {
        borderRadius: 180,
        marginTop: 30,
        borderWidth: 2,
        borderColor: 'black',
    },
    username: {
        padding: 10,
        paddingHorizontal: 20,
        borderWidth:2,
        marginTop: 20,
        borderRadius:10,
        backgroundColor: '#898989'
    },
    infoPessoal: {
        padding: 10,
        borderWidth:2,
        borderRadius:10,
        backgroundColor: '#898989',
    },
    infoText: {
        fontSize: 32,
        marginBottom: 10
    },
    button: {
        borderWidth: 2 ,
        alignItems:"center",
        borderRadius: 10,
        marginTop: 20,
        height: 46,
        width: 264,
        backgroundColor: '#455EF1'
    },
    buttonExit: {
        borderWidth: 2 ,
        alignItems:"center",
        borderRadius: 20,
        marginTop: 20,
        height: 46,
        width: 215,
        backgroundColor: '#EF4949'
    },
})