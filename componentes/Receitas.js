import { FlatList, TouchableOpacity, Text, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather'

export default function Receitas({ receitas, estilos }) {
 return (
    <FlatList
    data={receitas}
    renderItem={({ item }) => {
      return (
        <TouchableOpacity style={estilos.item} onPress={() => { }}>
          <Image source={item.imagem} style={estilos.foto} />
          <Text style={estilos.nome} numberOfLines={1}>
            {item.nome}
          </Text>
          <Text style={estilos.preparo}>
            <Feather name="clock" size={10} color="black" /> {item.preparo} mins
          </Text>
        </TouchableOpacity>
      )
    }}
    horizontal
    contentContainerStyle={estilos.lista}
    showsHorizontalScrollIndicator={false}
  />
  );
}