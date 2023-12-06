// import React from "react";
// d="M13.7488 61.2836C10.0269 61.2836 7.74557 60.6027 6.00073 64.4003C4.7852 67.0459 1.97855 71.0567 1.89625 74.1019C1.81451 77.1262 1.08767 81.6762 2.07184 84.5057C4.07857 90.2751 7.44629 95.2795 13.5732 97.2143C20.2741 99.3304 28.6996 103.459 34.9077 97.7191C36.7585 96.008 37.1862 92.4475 37.827 90.1247C38.5902 87.3581 38.6391 84.6703 38.6391 81.8279C38.6391 80.0282 38.244 78.3034 38.244 76.5163C38.244 75.6533 38.0042 73.5629 38.6391 75.5944C40.9514 82.994 45.0682 91.2543 50.1843 97.2362C53.2003 100.763 57.4644 106.897 62.9367 105.27C67.6911 103.856 70.4269 96.785 71.6066 92.4952C73.2069 86.6759 73.108 78.283 69.1483 73.4434C67.507 71.4373 67.3662 68.2778 65.7023 66.2441C63.7798 63.8943 62.4263 61.363 59.9297 59.3959C58.8588 58.5522 58.4598 58.1229 57.0105 58.1229C54.674 58.1229 54.8375 57.0126 54.8375 54.8964C54.8375 43.952 56.317 31.4071 51.4135 21.2045C49.8135 17.8756 47.4611 12.9567 43.9947 11.1079C42.6087 10.3687 40.3977 9.27513 39.2317 8.3423C38.8912 8.06994 38.8752 7.5099 38.5513 7.24485C38.0396 6.82618 37.4452 6.92895 36.8831 6.36688C35.7669 5.25067 34.2282 4.54602 33.1079 3.4257C31.616 1.93379 30.3089 2.02096 28.323 2.02096C26.9791 2.02096 22.6099 1.99744 21.6724 3.40375C19.8166 6.18739 17.6697 8.55413 16.0315 11.503C9.47446 23.3056 11.7733 38.8025 11.7733 51.9771C11.7733 54.4588 10.1841 62.8639 13.5073 62.8639C13.9282 62.8639 14.5272 63.2984 14.1439 62.8639C13.5301 62.1683 13.3783 60.7642 13.3537 59.8788C13.2693 56.8425 12.7883 54.009 12.5635 51.0114C12.4445 49.424 11.3783 48.3333 11.3783 46.6435C11.3783 44.4921 10.5881 42.6261 10.5881 40.5417C10.5881 39.2428 9.47291 38.5147 9.40284 37.1834C9.32356 35.677 9.23548 33.9542 9.71013 32.5302C10.3613 30.5767 12.1684 28.5875 12.1684 26.5162C12.1684 24.925 13.6926 24.509 13.7488 23.0482C13.772 22.4439 13.8748 19.8388 14.5389 19.7997C17.035 19.6529 19.9843 19.5119 22.4626 19.8217C27.5701 20.4601 32.6068 22.4835 37.7611 22.5653C41.0389 22.6174 44.2552 22.9604 47.5285 22.9604C49.2639 22.9604 51.8355 23.5922 50.316 21.2045C49.7015 20.2389 49.7649 19.2486 48.8235 18.3072C48.0036 17.4873 47.5389 16.5417 47.0236 15.4538C45.4593 12.1514 43.4013 9.63712 39.8024 8.73739C38.3596 8.37669 37.5353 7.95876 36.3564 7.15705C35.7996 6.77844 36.0244 6.20518 35.4784 5.884C35.0218 5.61543 34.4857 5.21984 34.2053 4.78655C33.6069 3.86167 32.3021 2.95896 31.352 2.41604C30.0516 1.67299 29.983 6.19777 29.9253 7.179C29.7954 9.38655 29.157 11.5092 29.157 13.6979C29.157 15.3945 27.9718 16.6456 27.9718 18.2194" stroke="white" stroke-width="3" stroke-linecap="round"
// import { StyleSheet, Text, ScrollView } from "react-native";
// import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import ProgressBar from "react-native-progress/Bar"; // Certifique-se de instalar o pacote react-native-progress
// import {
//   Container,
//   ButtonPerfil,
//   ButtonText,
//   SendButton,
//   SendButtontext,
//   View,
//   ProgressContainer
// } from "./styles";

// //components
// import HeaderPerfil from "../../Components/FotoPerfil";

// //imagens
// import coxinha from "../../Components/img/coxinha.png";

// //variáveis
// import nomeUsuario from "../Login/index";

// export default function App() {
//   const navigation = useNavigation();

//   const botaoteste = () => {
//     alert("Teste");
//   };
//   function navigateToLogin() {
//     navigation.goBack();
//   }
//   const cursos = [
//     { nome: "Empreendedorismo" },
//     { nome: "Finanças" },
//     { nome: "Marketing" },
//     { nome: "Gestão de Rh" },
//     { nome: "Planejamento" },
//     { nome: "eyk" }
//   ];
//   return (
//     <View>
//       <HeaderPerfil
//         source={(require = coxinha)}
//         username={nomeUsuario}
//       ></HeaderPerfil>

//       <Container>
//         <ScrollView>
//           {cursos.map((curso, index) => (
//             <ButtonPerfil
//               key={index}
//               onPress={botaoteste}
//               underlayColor="#795833"
//             >
//               <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 <ButtonText>{curso.nome}</ButtonText>
//                 <ProgressContainer>
//                   <ProgressBar progress={0.5} width={100} color={"#795833"} />
//                 </ProgressContainer>
//               </View>
//             </ButtonPerfil>
//           ))}
//         </ScrollView>
//       </Container>
//     </View>
//   );
// }

// // import * as React from "react";
// // import { StyleSheet, Text, View } from "react-native";
// // // import { useNavigation } from "@react-navigation/native";
// // import { Container, SendButton, SendButtontext } from "./styles";
// // import { NavigationContainer } from "@react-navigation/native";
// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import { useNavigation } from "@react-navigation/native";
// // import { Ionicons } from "@expo/vector-icons";

// // function handleVoltar() {
// //   navigation.navigate("Login");
// // }

// // function Pagina1Screen() {
// //   return (
// //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //       <Text>Home!</Text>

// //       <SendButton onPress={handleVoltar}>
// //         <SendButtontext>Voltar</SendButtontext>
// //       </SendButton>
// //     </View>
// //   );
// // }

// // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //   <Text>Test!</Text>
// // </View>;

// // // function Pagina2Screen() {
// // //   return (
// // //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// // //       <Text>test2!</Text>
// // //     </View>
// // //   );
// // // }

// // const Tab = createBottomTabNavigator();

// // export default function App() {
// //   const navigation = useNavigation();

// //   // function HomeScreen() {
// //   //   navigation.navigate("Home");
// //   // }
// //   function RankScreen() {
// //     navigation.navigate("Rank");
// //   }
// //   function CursosScreen() {
// //     navigation.navigate("Cursos");
// //   }
// //   function PerfilScreen() {
// //     navigation.navigate("Perfil");
// //   }

// //   return (
// //     // <NavigationContainer>
// //     <Tab.Navigator
// //       screenOptions={({ route }) => ({
// //         tabBarIcon: ({ focused, color, size }) => {
// //           let iconName;

// //           if (route.name === "Home") {
// //             iconName = focused ? "home-outline" : "home-outline";
// //           } else if (route.name === "Rank") {
// //             iconName = focused ? "home-outline" : "home-outline";
// //           } else if (route.name === "Cursos") {
// //             iconName = focused ? "home-outline" : "home-outline";
// //           } else if (route.name === "Perfil") {
// //             iconName = focused ? "home-outline" : "home-outline";
// //           }

// //           // You can return any component that you like here!
// //           return <Ionicons name={iconName} size={size} color={color} />;
// //         },
// //         tabBarActiveTintColor: "tomato",
// //         tabBarInactiveTintColor: "gray"
// //       })}
// //     >
// //       <Tab.Screen name="Home" component={Pagina1Screen} />
// //       <Tab.Screen name="Rank" component={RankScreen} />
// //       <Tab.Screen name="Cursos" component={() => {navigation.navigate("Cursos")}} />
// //       <Tab.Screen name="Perfil" component={PerfilScreen} />
// //     </Tab.Navigator>
// //     // </NavigationContainer>
// //   );
// // }
// // import React, { Component } from "react";
// // import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from "react-native";

// // export default class Animations extends Component {
// //   state = {
// //     animation: new Animated.Value(0),
// //   };

// //   componentDidMount() {
// //     // Acione o método handlePress após o componente ser montado
// //     this.handlePress();
// //   }

// //   handlePress = () => {
// //     this.state.animation.setValue(0);

// //     Animated.timing(this.state.animation, {
// //       duration: 1500,
// //       toValue: 1,
// //       useNativeDriver: false, // ou true dependendo da sua animação
// //     }).start();

// //     // Introduza um atraso antes de redefinir a animação
// //     Animated.delay(2000).start(() => {
// //       this.state.animation.setValue(0);
// //     });
// //   };

// //   render() {
// //     const { progress, color, buttonText } = this.props; // Obtenha os parâmetros

// //     const progressInterpolate = this.state.animation.interpolate({
// //       inputRange: [0, 1],
// //       outputRange: ["0%", progress || "60%"], // Use progress ou um valor padrão de "60%"
// //       extrapolate: "clamp",
// //     });

// //     const colorInterpolate = this.state.animation.interpolate({
// //       inputRange: [0, 1],
// //       outputRange: ["rgb(71,255,99)", color || "rgb(99,71,255)"], // Use color ou um valor padrão
// //     });

// //     const progressStyle = {
// //       width: progressInterpolate,
// //       bottom: 0,
// //       backgroundColor: colorInterpolate,
// //     };

// //     return (
// //       <View style={styles.container}>
// //         <TouchableWithoutFeedback onPress={this.handlePress}>
// //           <View style={[styles.button, { backgroundColor: color }]}>
// //             <View style={StyleSheet.absoluteFill}>
// //               <Animated.View style={[styles.progress, progressStyle]} />
// //             </View>
// //             <Text style={[styles.buttonText, { color: buttonText }]}>{buttonText}</Text>
// //           </View>
// //         </TouchableWithoutFeedback>
// //       </View>
// //     );
// //   }
// // }

// // // Função que cria os estilos
// // export const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   button: {
// //     backgroundColor: "#e6537d",
// //     borderRadius: 2,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     paddingHorizontal: 60,
// //     paddingVertical: 10,
// //     overflow: "hidden",
// //   },
// //   buttonText: {
// //     color: "#FFF",
// //     fontSize: 24,
// //     backgroundColor: "transparent",
// //   },
// //   progress: {
// //     position: "absolute",
// //     left: 0,
// //     top: 0,
// //   },
// // });

