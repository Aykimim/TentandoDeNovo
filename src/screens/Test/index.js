import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { Container, SendButton, SendButtontext } from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function Pagina1Screen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>test1!</Text>
    </View>
  );
}

// function Pagina2Screen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>test2!</Text>
//     </View>
//   );
// }


const Tab = createBottomTabNavigator();

export default function App() {
  const navigation = useNavigation();

  // function HomeScreen() {
  //   navigation.navigate("Home");
  // }
  function RankScreen() {
    navigation.navigate("Rank");
  }
  function CursosScreen() {
    navigation.navigate("Cursos");
  }
  function PerfilScreen() {
    navigation.navigate("Perfil");
  }





  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Rank") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "Cursos") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "Perfil") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray"
      })}
    >
      <Tab.Screen name="Home" component={Pagina1Screen} />
      <Tab.Screen name="Rank" component={RankScreen} />
      <Tab.Screen name="Cursos" component={CursosScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
