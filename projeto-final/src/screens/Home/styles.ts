import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F6F9',
        paddingTop: 60,
        paddingBottom:30
    },
    header: {
        flexDirection:"row",
        justifyContent:"space-between"

    },

    viewImg: {
        alignItems: "center",

    },
    img: {
        width: 300,
        height: 300,
        borderRadius: 9,
        marginHorizontal: 30,
        marginVertical:30,
        

    },
    textProduto: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "baseline",
        paddingLeft: 10


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
        borderRadius:15,
        

    },
    viewProdutos:{
        flex:1
       
    },
    cordeirinho:{
        alignSelf:"flex-end",
        width:50,
        height:50,
        borderRadius:30,
        marginRight:20

    }
})