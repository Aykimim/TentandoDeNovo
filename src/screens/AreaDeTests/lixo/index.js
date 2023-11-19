import React from "react";

import { StyleSheet, Text, ScrollView } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import ProgressBar from "react-native-progress/Bar"; // Certifique-se de instalar o pacote react-native-progress
import {
  Container,
  ButtonPerfil,
  ButtonText,
  SendButton,
  SendButtontext,
  View,
  ProgressContainer
} from "./styles";

//components
import HeaderPerfil from "../../Components/FotoPerfil";

//imagens
import coxinha from "../../Components/img/coxinha.png";

//variáveis
import nomeUsuario from "../Login/index";

export default function App() {
  const navigation = useNavigation();

  const botaoteste = () => {
    alert("Teste");
  };
  function navigateToLogin() {
    navigation.goBack();
  }
  const cursos = [
    { nome: "Empreendedorismo" },
    { nome: "Finanças" },
    { nome: "Marketing" },
    { nome: "Gestão de Rh" },
    { nome: "Planejamento" },
    { nome: "eyk" }
  ];
  return (
    <View>
      <HeaderPerfil
        source={(require = coxinha)}
        username={nomeUsuario}
      ></HeaderPerfil>

      <Container>
        <ScrollView>
          {cursos.map((curso, index) => (
            <ButtonPerfil
              key={index}
              onPress={botaoteste}
              underlayColor="#795833"
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ButtonText>{curso.nome}</ButtonText>
                <ProgressContainer>
                  <ProgressBar progress={0.5} width={100} color={"#795833"} />
                </ProgressContainer>
              </View>
            </ButtonPerfil>
          ))}
        </ScrollView>
      </Container>
    </View>
  );
}

// import * as React from "react";
// import { StyleSheet, Text, View } from "react-native";
// // import { useNavigation } from "@react-navigation/native";
// import { Container, SendButton, SendButtontext } from "./styles";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { useNavigation } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";

// function handleVoltar() {
//   navigation.navigate("Login");
// }

// function Pagina1Screen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Home!</Text>

//       <SendButton onPress={handleVoltar}>
//         <SendButtontext>Voltar</SendButtontext>
//       </SendButton>
//     </View>
//   );
// }

// <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//   <Text>Test!</Text>
// </View>;

// // function Pagina2Screen() {
// //   return (
// //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //       <Text>test2!</Text>
// //     </View>
// //   );
// // }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   const navigation = useNavigation();

//   // function HomeScreen() {
//   //   navigation.navigate("Home");
//   // }
//   function RankScreen() {
//     navigation.navigate("Rank");
//   }
//   function CursosScreen() {
//     navigation.navigate("Cursos");
//   }
//   function PerfilScreen() {
//     navigation.navigate("Perfil");
//   }

//   return (
//     // <NavigationContainer>
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === "Home") {
//             iconName = focused ? "home-outline" : "home-outline";
//           } else if (route.name === "Rank") {
//             iconName = focused ? "home-outline" : "home-outline";
//           } else if (route.name === "Cursos") {
//             iconName = focused ? "home-outline" : "home-outline";
//           } else if (route.name === "Perfil") {
//             iconName = focused ? "home-outline" : "home-outline";
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "tomato",
//         tabBarInactiveTintColor: "gray"
//       })}
//     >
//       <Tab.Screen name="Home" component={Pagina1Screen} />
//       <Tab.Screen name="Rank" component={RankScreen} />
//       <Tab.Screen name="Cursos" component={() => {navigation.navigate("Cursos")}} />
//       <Tab.Screen name="Perfil" component={PerfilScreen} />
//     </Tab.Navigator>
//     // </NavigationContainer>
//   );
// }
