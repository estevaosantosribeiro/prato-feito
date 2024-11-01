import { useEffect, useState, useContext } from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native'
import { styles } from '../estilos/Home'
import { AvatarContext } from '../contexts/AvatarContext'
import Placeholder from '../componentes/Placeholder'
import Receitas from '../componentes/Receitas'

export default function Home({ navigation, route }) {
  const numeros = [15, 20, 25, 30, 35, 40, 45]
  const [loading, setLoading] = useState(true)
  const [receitas, setReceitas] = useState([])
  const { avatar } = useContext(AvatarContext)
  const { nome } = route.params

  useEffect(() => {
    let imagens = []
    let ids = []
    let resultado = []
    setLoading(true)

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=American')
    .then((response) => response.json())
    .then((data) => {
      let texto = ''
      data.meals.forEach((element, index) => {
        if(index < 15) {
          texto += index == 14 ? `${element.strMeal}` : `${element.strMeal}, `
          imagens.push(element.strMealThumb)
          ids.push(element.idMeal)
        }
      })
      return fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=en|pt`)
    })
    .then((response) => response.json())
    .then((data) => {
      let nomes = data.responseData.translatedText.split(', ')
      nomes.forEach((_element, index) => {
        resultado.push({
          id: ids[index],
          nome: nomes[index][0].toUpperCase() + nomes[index].slice(1),
          imagem: imagens[index],
          preparo: numeros[Math.floor(Math.random() * numeros.length)]
        })
      })
      setReceitas(resultado)
      setLoading(false)
    })
  }, [])


  return (
    <View>
      <View style={styles.header}>
        <Text>
          Olá, {nome}
        </Text>
        <Image source={avatar} style={styles.imagem} />
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
            <Receitas receitas={receitas} estilos={styles} navigation={navigation} />
            <Text style={styles.subtitulo}>
              Categorias
            </Text>
            <FlatList
              data={receitas}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => { }}>
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