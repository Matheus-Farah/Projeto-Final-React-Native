import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingBottom: 60,
        alignItems:"center",
    },
    image: {
        width: 200, 
        height: 200,
        borderRadius: 40,
        borderWidth:2,
        borderColor: 'black',
        marginTop: 60,
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
        width: 290,
    },
    inputTitle: {
        fontSize: 20,
        paddingLeft: 18
    },
    button: {
        borderWidth: 2 ,
        alignItems:"center",
        paddingTop:10,
        borderRadius: 10,
        marginTop: 20,
        height: 46,
        width: 264,
        backgroundColor: '#455EF1'
    },
    subtitle: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'row',
        marginTop:20,
    },
    subtitleText: {
        fontSize:18,
        fontWeight:"bold",
    },

})