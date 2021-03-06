import { BackHandler, Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    gradient: {
        flex: 1,
    },

    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingBottom: 60,
        alignItems:"center",
        
    },

    image: {
        width: 90, 
        height: 90,
        borderRadius: 25,
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
        backgroundColor:'#fff'
    },

    inputTitle: {
        fontSize: 20,
        paddingLeft: 18
    },

    button: {
        borderWidth: 2 ,
        alignItems:"center",
        alignSelf:"center",
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

    header: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'row',
        marginTop:20,
        marginBottom:20,
        height: 120,
        backfaceVisibility:'visible',     
    },

    headerText: {
        display: "flex",
        flexDirection: 'column',
        marginTop:50,
    },

    subtitleText: {
        fontSize:18,
        fontWeight:"bold",
    },

    titleText: {
        
        fontSize: 32,
        paddingHorizontal: 20
    },
    
})