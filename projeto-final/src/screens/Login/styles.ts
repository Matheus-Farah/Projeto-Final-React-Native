import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: "center",
        backgroundColor: '#F0F6F9',
    },
    containerLogo: {
        flex: 1,
        justifyContent: "center",
        // backgroundColor: '#1616',
    },
    container:{
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        // paddingBottom: -10
        

    },
    image: {
        borderRadius: 10,
        borderWidth:2,
        borderColor: 'black',
        marginTop: 40,
    },
    input: {
        marginHorizontal: 15,
        borderWidth: 2,
        borderColor: 'black',
        color: 'black',
        fontSize: 16,
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 10,
        height: 50,
        width: '90%',
        marginBottom: 10,
        backgroundColor:'#fff',
    },
    inputTitle: {
        fontSize: 20,
        paddingLeft: 18,
        justifyContent:'flex-start',
    },
    button: {
        borderWidth: 2 ,
        alignItems:"center",
        paddingTop:10,
        borderRadius: 10,
        // marginTop: 1,
        height: 46,
        width: 264,
        backgroundColor: '#455EF1'
    },
    subtitle: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'row',
        // marginTop:5,
        paddingBottom:5,
    },
    subtitleText: {
        fontSize:18,
        fontWeight:"bold",
    },

})