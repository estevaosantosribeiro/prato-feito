import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingBottom: 70,
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    botao: {
        backgroundColor: '#4cc66e',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    texto: {
        color: '#fff',
    },
    receita: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginHorizontal: 30,
    },
    item: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        gap: 10,
        flex: 1,
    },
    imagem: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        borderRadius: 20,
    },
    nome: {
        fontSize: 15,
    },
    preparo: {
        fontSize: 12,
        opacity: 0.5,
    }
});