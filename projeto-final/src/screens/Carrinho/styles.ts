import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: 60,
    },
    header: {
        flexDirection: "row",
        // backgroundColor: '#898AA6',
        // borderColor: "#000000",  
        // borderWidth: 1.5,      
        
    },
    text: {
        width: '83%',
        fontWeight: 'bold',
        fontSize: 25,
        paddingLeft: 20,
    },
    total: {
        backgroundColor: '#898989',
        borderColor: '#000000',
        borderRadius: 10,
        borderWidth: 1.2,

        marginHorizontal: 10,
        marginTop: 10,
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
        marginTop: 5,
        marginBottom: 5,
        marginHorizontal: 100,
        height: 46,
        width: "50%",
        backgroundColor: '#455EF1'
    },
    subtitleText: {
        fontSize:18,
        fontWeight:"bold",
    },

    cordeirinho:{
        alignSelf:"auto",
        width:50,
        height:50,
        borderRadius:30,
        marginRight:20,

    },

});