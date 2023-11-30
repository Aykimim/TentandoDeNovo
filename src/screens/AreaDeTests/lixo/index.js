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
// import React, { Component } from "react";
// import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from "react-native";

// export default class Animations extends Component {
//   state = {
//     animation: new Animated.Value(0),
//   };

//   componentDidMount() {
//     // Acione o método handlePress após o componente ser montado
//     this.handlePress();
//   }

//   handlePress = () => {
//     this.state.animation.setValue(0);

//     Animated.timing(this.state.animation, {
//       duration: 1500,
//       toValue: 1,
//       useNativeDriver: false, // ou true dependendo da sua animação
//     }).start();

//     // Introduza um atraso antes de redefinir a animação
//     Animated.delay(2000).start(() => {
//       this.state.animation.setValue(0);
//     });
//   };

//   render() {
//     const { progress, color, buttonText } = this.props; // Obtenha os parâmetros

//     const progressInterpolate = this.state.animation.interpolate({
//       inputRange: [0, 1],
//       outputRange: ["0%", progress || "60%"], // Use progress ou um valor padrão de "60%"
//       extrapolate: "clamp",
//     });

//     const colorInterpolate = this.state.animation.interpolate({
//       inputRange: [0, 1],
//       outputRange: ["rgb(71,255,99)", color || "rgb(99,71,255)"], // Use color ou um valor padrão
//     });

//     const progressStyle = {
//       width: progressInterpolate,
//       bottom: 0,
//       backgroundColor: colorInterpolate,
//     };

//     return (
//       <View style={styles.container}>
//         <TouchableWithoutFeedback onPress={this.handlePress}>
//           <View style={[styles.button, { backgroundColor: color }]}>
//             <View style={StyleSheet.absoluteFill}>
//               <Animated.View style={[styles.progress, progressStyle]} />
//             </View>
//             <Text style={[styles.buttonText, { color: buttonText }]}>{buttonText}</Text>
//           </View>
//         </TouchableWithoutFeedback>
//       </View>
//     );
//   }
// }

// // Função que cria os estilos
// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   button: {
//     backgroundColor: "#e6537d",
//     borderRadius: 2,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingHorizontal: 60,
//     paddingVertical: 10,
//     overflow: "hidden",
//   },
//   buttonText: {
//     color: "#FFF",
//     fontSize: 24,
//     backgroundColor: "transparent",
//   },
//   progress: {
//     position: "absolute",
//     left: 0,
//     top: 0,
//   },
// });

