import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: '#898989',
        borderColor: '#000000',
        borderRadius: 10,
        borderWidth: 1.2,
        
        marginTop: 10,
        marginHorizontal: 10
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 40
    },
    
    textItem: {
        marginLeft: 5,
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
    },
    quantidade: {
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 5,
        color: '#000',

        
        fontSize: 22,
        fontWeight: 'bold',
        
        width: '30%',
        textAlign: "center",

        backgroundColor: '#fff',
        borderRadius: 10
    },
    
    card: {
        flexDirection: "row",
    },
    informacoes: {
        flexDirection: "column"
    },
    buttons: {
        fontSize: 25,
        padding: 4,
        borderWidth: 2,
        
        width: '80%',
        textAlign: "center",

        marginLeft: 5,
        borderRadius: 10
    },
})