import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Login from "./telas/Login"
import Cadastro from "./telas/Cadastro"
import Home from "./telas/Home"
import Pesquisar from "./telas/Pesquisar"
import Favoritos from "./telas/Favoritos"
import Perfil from "./telas/Perfil"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const AreaPrincipal = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false, tabBarIcon: ({ focused }) => {
                    return focused ? <Ionicons name="home-sharp" size={24} color="black" /> : <Ionicons name="home-outline" size={24} color="black" />
                }
            }} />
            <Tab.Screen name="Pesquisar" component={Pesquisar} options={{
                headerShown: false, tabBarIcon: ({ focused }) => {
                    return focused ? <FontAwesome name="search" size={24} color="black" /> : <AntDesign name="search1" size={24} color="black" />
                }
            }} />
            <Tab.Screen name="Favoritos" component={Favoritos} options={{
                headerShown: false, tabBarIcon: ({ focused }) => {
                    return focused ? <AntDesign name="heart" size={24} color="black" /> : <AntDesign name="hearto" size={24} color="black" />
                }
            }} />
            <Tab.Screen name="Perfil" component={Perfil} options={{
                headerShown: false, tabBarIcon: ({ focused }) => {
                    return focused ? <FontAwesome5 name="user-alt" size={24} color="black" /> : <FontAwesome5 name="user" size={24} color="black" />
                }
            }} />
        </Tab.Navigator>
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
                <Stack.Screen name="AreaPrincipal" component={AreaPrincipal} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}