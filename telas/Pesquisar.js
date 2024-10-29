import { View, TextInput } from 'react-native'
import { useState } from 'react'
import { styles } from '../estilos/Pesquisar'

export default function Pesquisar() {
  const [pesquisa, setPesquisa] = useState('')

  return (
    <View>
      <View style={styles.header}>
        <TextInput value={pesquisa} placeholder="Pesquise uma receita..." onChangeText={txt => setPesquisa(txt)} />
      </View>
    </View>
  );
}