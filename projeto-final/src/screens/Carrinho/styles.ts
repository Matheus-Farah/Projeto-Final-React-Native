import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        backgroundColor: '#FFFFFF'
    },
    header: {
        backgroundColor: '#898AA6',
        borderColor: "#000000",  
        borderWidth: 1.5,
        paddingVertical: 20
    },
    text: {
        width: '100%',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 32,
        paddingLeft: 5
    },
    total: {
        backgroundColor: '#898989',
        borderColor: '#000000',
        borderRadius: 10,
        borderWidth: 1.2,

        marginHorizontal: 10,
        marginTop: 250
    },
    totalText: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
    },
    button: {
        borderWidth: 2 ,
        alignItems:"center",
        paddingTop: 9,
        borderRadius: 10,
        marginTop: 15,
        marginHorizontal: 100,
        height: 46,
        width: "50%",
        backgroundColor: '#455EF1'
    },
    subtitleText: {
        fontSize:18,
        fontWeight:"bold",
    },
});