import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        padding: 20,
        alignSelf: 'flex-end',
    },
    imagem: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
        marginHorizontal: 'auto',
        marginVertical: 20,
    },
    nome: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitulo: {
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginTop: 10,
    },
    descricao: {
        fontSize: 12,
        marginHorizontal: 20,
        marginVertical: 10,
        color: '#777'
    },
    botao: {
        backgroundColor: '#4cc66e',
        width: 100,
        marginHorizontal: 'auto',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    texto: {
        color: '#fff',
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        backgroundColor: '#fff',
        width: 250,
        height: 220,
        borderRadius: 15,
    },
    input: {
        backgroundColor: '#f5f5f5',
        margin: 10,
        padding: 5,
        borderRadius: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    cancelar: {
        backgroundColor: '#d24633',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
    },
    confirmar: {
        backgroundColor: '#4cc66e',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
    },
    avatar: {
        backgroundColor: '#054f77',
        marginHorizontal: 20,
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 15,
    }
});