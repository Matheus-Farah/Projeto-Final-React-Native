import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    gradient: {
        flex: 1,
    },

    container: {
        flex: 1,
        paddingTop: 60,
        paddingBottom: 30,
    },
    input: {
        fontSize: 15,
        backgroundColor:"#fff",
        borderRadius: 8,
        padding: 3,
        width:300,
        height:40,
        margin:15,
        marginLeft:30,
       
    },
    
    buttonProdutos: {
        backgroundColor: "#aaa",
        width: 150,
        height: 190,
        alignItems: "center",
        marginVertical: 9,
        marginHorizontal: 15,
        borderRadius: 8,



    },
    imgMenor: {
        width: 130,
        height: 130,
        marginVertical: 5,
        borderRadius: 15,


    },
    viewProdutos: {
        flex: 1,
        marginLeft: 20,

    },
    azulzin: {
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor: '#898AA6',
        borderColor: "#000000",  
        borderWidth: 1.5,
        height: 60,
    },
    lupa:{
        marginRight:40,
        marginTop:20
    }


})