import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome"; // Importe o ícone que deseja usar
import { colors } from "../Components/Theme";
import Svg, { Line, Path } from "react-native-svg";
import { ScrollView, View, Text, } from "react-native";

// Resto das importações de telas...
import Home from "../screens/TelasPrincipais/Home";
import Rank from "../screens/TelasPrincipais/Rank";
import Cursos from "../screens/TelasPrincipais/Cursos";
import Perfil from "../screens/TelasPrincipais/Perfil";

const Tab = createBottomTabNavigator();
const CustomIcon = ({ color, size, isActive, iconName }) => (
  <View style={{ alignItems: 'center' }}>
    {isActive && (
      <Svg width={size} height={size} viewBox="0 0 102 102" fill="none">
        <Path
          d="M76 1H26C12.1929 1 1 12.1929 1 26V76C1 89.8071 12.1929 101 26 101H76C89.8071 101 101 89.8071 101 76V26C101 12.1929 89.8071 1 76 1Z"
          stroke={color}
          strokeWidth="5"
        />
        {/* Adicione mais elementos Path aqui conforme necessário */}
        <Icon name={iconName} size={size} color={color} />
      </Svg>
    )}
    {!isActive && <Icon name={iconName} size={size} color={color} />}
  </View>
);


export default () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size, focused }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Cursos") {
          iconName = "graduation-cap";
        } else if (route.name === "Rank") {
          iconName = "star";
        } else if (route.name === "Perfil") {
          iconName = "user";
        }

        return <CustomIcon iconName={iconName} size={size} color={color} isActive={focused} />;
      },
      tabBarActiveTintColor: colors.primaria,
      tabBarInactiveTintColor: colors.primaria,
      tabBarStyle: {
        backgroundColor: colors.fundo,
        paddingBottom: 5,
        height: 52
      }
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Cursos" component={Cursos} />
    <Tab.Screen name="Rank" component={Rank} />
    <Tab.Screen name="Perfil" component={Perfil} />
  </Tab.Navigator>
);