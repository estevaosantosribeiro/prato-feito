import { View, Text, Image, TouchableOpacity, Modal, TextInput, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { styles } from '../estilos/Perfil';
import { useState, useContext } from 'react';
import { DescricaoContext } from '../contexts/DescricaoContext'
import { AvatarContext } from '../contexts/AvatarContext';
import ToolBar from '../componentes/ToolBar';
import Edicao from '../componentes/Edicao';

export default function Perfil({ route, navigation }) {
  const [visible, setVisible] = useState(false)
  const [option, setOption] = useState(false)
  const [input, setInput] = useState('')
  const { descricao, setDescricao } = useContext(DescricaoContext)
  const { avatar } = useContext(AvatarContext)
  const { nome } = route.params

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Edicao visible={visible} styles={styles} input={input} functions={{ setInput, setVisible, setDescricao }} navigation={navigation} />
        <TouchableOpacity onPress={() => setOption(!option)} style={styles.header}>
          <SimpleLineIcons name="options-vertical" size={24} color="black" />
        </TouchableOpacity>
        {option ? <ToolBar navigation={navigation} /> : <></>}
        <Image source={avatar} style={styles.imagem} />
        <Text style={styles.nome}>
          {nome}
        </Text>
        <Text style={styles.subtitulo}>
          Descrição
        </Text>
        <Text style={styles.descricao}>
          {descricao == '' ? 'Você ainda não adicionou uma descrição.' : descricao}
        </Text>
        <TouchableOpacity style={styles.botao} onPress={() => setVisible(true)}>
          <Text style={styles.texto}>
            Editar perfil
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}