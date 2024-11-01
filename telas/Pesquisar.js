import { View, TextInput, TouchableOpacity, FlatList, Text, Pressable, Image } from 'react-native'
import { useState } from 'react'
import { styles } from '../estilos/Pesquisar'
import Fontisto from '@expo/vector-icons/Fontisto'
import Feather from '@expo/vector-icons/Feather'
import AntDesign from '@expo/vector-icons/AntDesign';

const numeros = [15, 20, 25, 30, 35, 40, 45]
const indiceAleatorio = Math.floor(Math.random() * numeros.length)
const receitas = [
  {
    nome: 'Risoto de Macarronada',
    imagem: require('../assets/comida.jpeg'),
    preparo: numeros[indiceAleatorio]
  },
  {
    nome: 'Risoto de Frango',
    imagem: require('../assets/comida.jpeg'),
    preparo: numeros[indiceAleatorio]
  },
  {
    nome: 'Risoto de Frango',
    imagem: require('../assets/comida.jpeg'),
    preparo: numeros[indiceAleatorio]
  },
  {
    nome: 'Risoto de Frango',
    imagem: require('../assets/comida.jpeg'),
    preparo: numeros[indiceAleatorio]
  },
  {
    nome: 'Risoto de Frango',
    imagem: require('../assets/comida.jpeg'),
    preparo: numeros[indiceAleatorio]
  },
  {
    nome: 'Risoto de Frango',
    imagem: require('../assets/comida.jpeg'),
    preparo: numeros[indiceAleatorio]
  },
  {
    nome: 'Risoto de Frango',
    imagem: require('../assets/comida.jpeg'),
    preparo: numeros[indiceAleatorio]
  },
  {
    nome: 'Risoto de Frango',
    imagem: require('../assets/comida.jpeg'),
    preparo: numeros[indiceAleatorio]
  },
  {
    nome: 'Risoto de Frango',
    imagem: require('../assets/comida.jpeg'),
    preparo: numeros[indiceAleatorio]
  },
]

export default function Pesquisar() {
  const [pesquisa, setPesquisa] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.input} value={pesquisa} placeholder="Pesquise uma receita..." onChangeText={txt => setPesquisa(txt)} />
        <TouchableOpacity onPress={() => { }}>
          <Fontisto style={styles.botao} name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={receitas}
        renderItem={({ item }) => {
          return <View style={styles.receita}>
            <Pressable style={styles.item}>
              <Image source={item.imagem} style={styles.imagem} />
              <View style={{}}>
                <Text style={styles.nome}>
                  {item.nome}
                </Text>
                <Text style={styles.preparo}>
                  <Feather name="clock" size={10} color="black" /> {item.preparo} mins
                </Text>
              </View>
            </Pressable>
            <TouchableOpacity onPress={() => {}} style={{}}>
              {/* <AntDesign name="heart" size={24} color="black" />  */}
              <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>
          </View>
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}