import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function ToolBar({navigation}) {
    return (
        <View style={styles.fundo}>
            <Pressable onPress={() => navigation.navigate('Login')}>
                <Text>Sair</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    fundo: {
        backgroundColor: '#fff',
        width: '25%',
        padding: 10,
        borderRadius: 10,
        position: 'absolute',
        right: 25,
        top: 50,
    }
});