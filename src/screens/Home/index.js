import React from "react";

import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Container, SendButton, SendButtontext, ButtonText } from "./styles";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate("Login");
  }

  const Custumizavel = () => {
    alert("Voltar");
  };

  function MyCustomLeftComponent() {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={Custumizavel}>
          <Icon name="arrow-left" size={40} color="#000" />
        </TouchableOpacity>
      </View>
    );
  }

  function MyCustomCenterComponent() {
    return (
      // Personalize o componente de acordo com suas necessidades
      <ButtonText>Home</ButtonText>
    );
  }
  
  function MyCustomRightComponent() {
    return (
      // Personalize o componente de acordo com suas necessidades
      <ButtonText></ButtonText>
    );
    }

  return (
    <Container>
      <Header backgroundColor="#E16539" 
      leftComponent={<MyCustomLeftComponent />}
      centerComponent={<MyCustomCenterComponent />}
      rightComponent={<MyCustomRightComponent />}
      />
      <View>
        <Text>Home!</Text>
      </View>
    
    </Container>
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
