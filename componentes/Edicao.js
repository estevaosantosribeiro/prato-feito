import { View, Modal, TextInput, TouchableOpacity, Text } from 'react-native';

export default function Edicao({ visible, styles, input, functions, navigation }) {
  const { setInput, setVisible, setDescricao } = functions

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
    >
      <View style={styles.modal}>
        <View style={styles.box}>
          <TextInput
            multiline={true}
            numberOfLines={5}
            value={input}
            style={styles.input}
            placeholder="Digite aqui sua descrição..."
            onChangeText={txt => setInput(txt)}
          />
          <View style={styles.botoes}>
            <TouchableOpacity style={styles.cancelar} onPress={() => setVisible(false)}>
              <Text style={styles.texto}>
                Cancelar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmar} onPress={() => {
              setVisible(false)
              setDescricao(input)
            }}>
              <Text style={styles.texto}>
                Confirmar
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.avatar} onPress={() => {
            setVisible(false)
            navigation.navigate('Avatar')
          }}>
            <Text style={styles.texto}>
              Mudar avatar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}