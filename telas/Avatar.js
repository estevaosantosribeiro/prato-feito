import { View, Text, Image, FlatList, Pressable, ScrollView } from 'react-native';
import { styles } from '../estilos/Avatar';
import { useContext } from 'react';
import { AvatarContext } from '../contexts/AvatarContext';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const avatares = [
  require('../assets/avatar/cat.png'),
  require('../assets/avatar/chicken.png'),
  require('../assets/avatar/dog.png'),
  require('../assets/avatar/duck.png'),
  require('../assets/avatar/fox.png'),
  require('../assets/avatar/hippopotamus.png'),
  require('../assets/avatar/koala.png'),
  require('../assets/avatar/rabbit.png'),
  require('../assets/avatar/sea-lion.png')
]

export default function Avatar() {
  const {avatar, setAvatar} = useContext(AvatarContext)

  return (
    <ScrollView>
      <Image source={avatar} style={styles.imagem} />
      <Text style={styles.subtitulo}>
        Escolha seu avatar:
      </Text>
      <FlatList
        data={avatares}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => setAvatar(item)}>
              <Image source={item} style={styles.avatar} />
              {item == avatar ? <MaterialIcons style={styles.icone} name="done" size={24} color="black" /> : <></>}
              
            </Pressable>
          )
        }}
        numColumns={3}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}