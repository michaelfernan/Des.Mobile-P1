import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({

    container: {

        flex: 1,
        paddingTop: 10,
        backgroundColor: '#f5f5f5',
        paddingBottom: 60,
        textAlign: 'center',
        display: 'flex',
        paddingHorizontal: 10
    },

    conteudo: {

        flex: 1,
        marginTop: 10,
        marginBottom: 90,
        paddingTop: 5,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },

    title: {

        marginTop: 50,
        fontSize: 32,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',

    },

    sub: {

        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',

    },

    button: {

        backgroundColor: '#fff',
        paddingTop: 10,
        paddingBottom: 5,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 15,
        width: 115,
        height: 95,
    },

    buttonText: {

        padding: 15,
        alignItems: 'center',
        color: '#666666',
        fontSize: 13,
        textAlign: 'center',
    },

    input: {

        left: 15,
        color: 'black',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 20,
        backgroundColor: '#fff',
        width: 370,
        height: 50,
        textAlign: 'left',
    },

    icons: {

        marginTop: -72,
        marginBottom: 40,
        left: 330,
        display: 'flex',
        flexDirection: 'row',
        width: 60,
        height: 60,
    },

    menu: {

        flex: 1,
        marginBottom: -15,
        right: 10,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },

    buttonM: {

        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 20,
        width: 85,
        height: 80,
        paddingTop: 15
    },

    buttonTextM: {

        paddingTop: 5,
        alignItems: 'center',
        color: '#666666',
        fontSize: 12,
        textAlign: 'center',
    },

})