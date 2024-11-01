import { View, Text, Image, FlatList, Pressable, TouchableOpacity } from 'react-native';
import { styles } from '../estilos/Favoritos';
import Feather from '@expo/vector-icons/Feather'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

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


export default function Favoritos() {
 return (
   <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.titulo}>
        Seus favoritos
      </Text>
      <TouchableOpacity style={styles.botao} onPress={() => {}}>
        <Text style={styles.texto}>
          Limpar
        </Text>
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
            <FontAwesome6 name="trash-can" size={24} color="gray" />
            </TouchableOpacity>
          </View>
        }}
        showsVerticalScrollIndicator={false}
      />
   </View>
  );
}