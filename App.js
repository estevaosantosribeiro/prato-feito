import { View, StatusBar } from 'react-native';
import Routes from './Routes';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <Routes />
    </View>
  );
}
