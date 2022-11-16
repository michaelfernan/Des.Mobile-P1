import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: '#1465bb',
        textAlign: 'center',
        display: 'flex',
        paddingTop: 170,
        marginTop: -60
    },

    containerC: {

        flex: 1,
        paddingTop: 40,
        backgroundColor: '#f5f5f5',
        paddingBottom: 10,
        paddingHorizontal: 30,
        textAlign: 'center',
        display: 'flex',
    },

    conteudoImg: {

        flex: 1,
        marginTop: 5,
        marginBottom: 5,
        paddingTop: 5,
        paddingHorizontal: 100,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        border:8,
        
        
    },

    logo: {

        marginTop: -70,
        marginBottom: 50,
        borderRadius: 40,
        width: 240,
        height: 60,
        left: 60,
    },

    image: {

        marginLeft: 10,
        width: 45,
        height: 45,
        borderRadius: 5,
        color: 'black',
    },

    conteudo: {

        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    },

    entrar: {

        paddingTop: 20,
        marginBottom: 15,
        color: 'black',
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
    },

    textL: {

        color: 'black',
        fontSize: 18,
        left: 7
    },

    textEs: {

        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        left: 65,
    },

    textTer: {

        color: '#dddcdc',
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: "underline",
        marginTop: 20
    },

    textOff: {

        color: 'black',
        fontSize: 20,
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30
    },

    button: {

        backgroundColor: '#2196f3',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20
    },

    button2: {

        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 7,
        borderColor: 'black',
        borderWidth: 1
    },

    buttonText: {

        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },


    buttonText2: {

        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    input: {

        color: 'black',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 7,
        borderColor: 'black',
        borderBottomWidth: 1
    },

    checkbox: {

        margin: 2,
        borderRadius: 10,
    },

})