import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    elemento: {
        width: 200,
    },
    input: {
        width: 200,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBlockColor: 'black',
        borderWidth: 1,
    },
    mensagem: {
        marginBottom: 10,
        color: 'red',
        fontSize: 10,
        alignSelf: 'flex-start'
    }
});