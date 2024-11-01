import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useLayoutEffect } from 'react';
import { styles } from '../estilos/Receita';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const ingredientes = ['Palmito', 'Feijão', 'Batata', 'Frango']

export default function Receita({ route, navigation }) {
  const { nome } = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      title: nome,
    })
  }, [navigation, nome])

  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/comida.jpeg')} style={styles.imagem} />
      <Text style={styles.titulo}>
        Nome da Receita
      </Text>
      <Text style={styles.subtitulo}>
        Ingredientes:
      </Text>
      <FlatList
        data={ingredientes}
        renderItem={({item}) => {
          return <Text style={styles.ingrediente}>
            <Octicons name="dot-fill" size={10} color="#555" /> {item}
          </Text>
        }}
        scrollEnabled={false}
      />
      <Text style={styles.subtitulo}>
        Modo de preparo:
      </Text>
      <Text style={styles.preparo}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Text>
    </ScrollView>
      <View style={styles.elemento}>
        <TouchableOpacity style={styles.botao} onPress={() => {}}>
          <Text style={styles.texto}>
            Adicionar aos favoritos
          </Text>
          <AntDesign name="hearto" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
}