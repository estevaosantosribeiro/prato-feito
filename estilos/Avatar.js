import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imagem: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginHorizontal: 'auto',
        marginVertical: 20,
    },
    subtitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    avatar: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    icone: {
        backgroundColor: '#0f0', 
        width: 25, 
        borderRadius: 15,
        position: 'absolute',
        bottom: 16,
        right: 18,
    }
});