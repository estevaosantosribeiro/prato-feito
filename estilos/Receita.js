import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingBottom: 65
    },
    imagem: {
        width: 340,
        height: 310,
        marginHorizontal: 'auto',
        marginVertical: 15,
        resizeMode: 'contain',
        borderRadius: 20
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    subtitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    ingrediente: {
        fontSize: 12,
        marginHorizontal: 20,
        alignItems: 'center',
        color: '#555'
    },
    preparo: {
        fontSize: 12,
        marginHorizontal: 20,
        color: '#555',
    },
    elemento: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#f5f5f5',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        backgroundColor: '#4cc66e',
        flexDirection: 'row',
        width: '80%',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    },
    texto: {
        color: '#fff',
    }
});