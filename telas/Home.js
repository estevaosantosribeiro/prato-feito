import { useEffect, useState } from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native'
import { styles } from '../estilos/Home'
import Placeholder from '../componentes/Placeholder'
import Receitas from '../componentes/Receitas'

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
]

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])


  return (
    <View>
      <View style={styles.header}>
        <Text>
          Olá, Usuário!
        </Text>
        <Image source={require('../assets/avatar/cat.png')} style={styles.imagem} />
      </View>
      <View style={styles.fundo}>
        <Image source={require('../assets/banner.png')} style={styles.banner} />
      </View>
      <View style={styles.receitas}>
        {loading ? (
          <Placeholder />
        ) : (
          <View>
            <Text style={styles.subtitulo}>
              Receitas em alta
            </Text>
            <Receitas receitas={receitas} estilos={styles} />
            <Text style={styles.subtitulo}>
              Categorias
            </Text>
            <FlatList
              data={receitas}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity>
                    <View style={styles.secao}>
                      <Image source={item.imagem} style={styles.categoriaImg} />
                    </View>
                    <Text style={styles.categoria}>
                      {item.nome.split(' ')[0]}
                    </Text>
                  </TouchableOpacity>
                )
              }}
              horizontal
              contentContainerStyle={styles.lista}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )}
      </View>
    </View>
  );
}