import { View, Button, TextInput, Text } from 'react-native';
import { useState } from 'react';
import { styles } from '../estilos/Login';

export default function Login({ navigation }) {
    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('')

    const entrar = () => {
        if (nome.trim() != '') {
            navigation.replace('AreaPrincipal', { nome })
        } else {
            setMensagem('Você precisa preencher este campo')
        }
    }

    return (

        <View style={styles.container}>
            <View style={styles.elemento}>
                <TextInput style={styles.input} value={nome} placeholder="Seu nome" onChangeText={txt => setNome(txt)} />
                <Text style={styles.mensagem}>
                    {mensagem}
                </Text>
            </View>
            <Button title="Entrar" onPress={entrar} />
        </View>
    );
}