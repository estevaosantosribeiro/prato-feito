import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    imagem: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    banner: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    fundo: {
        borderRadius: 50,
        width: 310,
        height: 175,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginHorizontal: 'auto',
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 30,
        marginBottom: 18,
    },
    foto: {
        width: '100%',
        height: '75%',
        resizeMode: 'contain',
        marginTop: -5,
    },
    lista: {
        paddingHorizontal: 30,
        gap: 15,
    },
    item: {
        width: 100,
        height: 125,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        overflow: 'hidden',
    },
    nome: {
        fontSize: 12,
    },
    preparo: {
        fontSize: 9,
        opacity: 0.5,
    },
    secao: {
        width: 50,
        height: 46,
        borderRadius: 25,
        overflow: 'hidden',
    },
    categoriaImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    categoria: {
        textAlign: 'center',
        fontSize: 11,
        opacity: 0.7,
        fontWeight: 'bold',
    }
});