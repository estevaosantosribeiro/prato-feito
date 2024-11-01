import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingBottom: 85,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 30,
        gap: 15,
    },
    input: {
        backgroundColor: '#E5E8EF',
        padding: 10,
        borderRadius: 25,
        width: '82%',
    },
    botao: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 15,
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